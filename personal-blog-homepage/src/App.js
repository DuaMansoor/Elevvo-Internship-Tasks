import React, { useState } from "react";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import Filters from "./components/Filters";
import "./App.css";




const postsData = [
  {
    id: 1,
    title: "Understanding React Basics",
    category: "Tech",
    date: "Feb 1, 2024",
    description: "Learn the fundamentals of React including components and state.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
  },
  {
    id: 2,
    title: "Sunset of Thailand",
    category: "Travel",
    date: "Dec 15, 2022",
    description: "A travel guide to the  beautiful sunset in Thailand.",
    image: "https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Easy Homemade Pizza Recipe",
    category: "Food",
    date: "Jan 20, 2025",
    description: "Make delicious pizza at home with simple ingredients.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Advanced JavaScript Concepts",
    category: "Tech",
    date: "Feb 5, 2026",
    description: "Deep dive into closures, promises, and async/await.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
  },
  {
    id: 5,
    title: "Street Food Adventures",
    category: "Food",
    date: "Aug 7, 2023",
    description: "Exploring the best street food around the world.",
    image: "https://plus.unsplash.com/premium_photo-1731953242966-a5a647f88817?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Exploring the Mountains ",
    category: "Travel",
    date: "Nov 23, 2025",
    description: "A travel guide to the most beautiful mountains in Pakistan.",
    image: "https://plus.unsplash.com/premium_photo-1664304370732-9374eac016f9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 3;

  // Filtering logic
  const filteredPosts = postsData.filter((post) => {
    const matchCategory =
      category === "All" || post.category === category;

    const matchSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // Pagination logic
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      <Header />

      <Filters
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />

      <div className="grid">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <p className="no-posts">No posts found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

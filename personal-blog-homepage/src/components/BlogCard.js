import React from "react";

function BlogCard({ post }) {
  return (
    <div className="card">
      <img src={post.image} alt={post.title} />

      <div className="card-body">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span>{post.date}</span>
      </div>
    </div>
  );
}

export default BlogCard;

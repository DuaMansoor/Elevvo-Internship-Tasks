import React from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";


// Reusable component for animated sections
const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`section ${inView ? "animate" : "hidden"}`}
    >
      {children}
    </section>
  );
};

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <AnimatedSection>
        <header className="hero">
          <h1>TaskFlow</h1>
          <p>Organize your tasks and get more done effortlessly.</p>
          <button>Get Started</button>
        </header>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection>
        <section className="features">
          <h2>Features</h2>
          <div className="feature-cards">
            <div className="card">
              <div className="icon">📋</div>
              <h3>Task Management</h3>
              <p>Easily create, edit, and organize your tasks.</p>
            </div>
            <div className="card">
              <div className="icon">⏰</div>
              <h3>Reminders</h3>
              <p>Never miss a deadline with smart reminders.</p>
            </div>
            <div className="card">
              <div className="icon">📊</div>
              <h3>Analytics</h3>
              <p>Track your productivity with clear stats.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Reviews Section */}
      <AnimatedSection>
        <section className="reviews">
          <h2>What Users Say</h2>
          <div className="review-cards">
            <blockquote>
              "TaskFlow has completely changed how I organize my work!"
              <span>- Alex</span>
            </blockquote>
            <blockquote>
              "I love the reminders feature. I never miss a task now."
              <span>- Maria</span>
            </blockquote>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection>
        <section className="pricing">
          <h2>Pricing</h2>
          <div className="pricing-cards">
            <div className="card">
              <h3>Free</h3>
              <p>$0 / month</p>
              <p>Basic features to get started.</p>
              <button>Sign Up</button>
            </div>
            <div className="card">
              <h3>Pro</h3>
              <p>$9.99 / month</p>
              <p>Advanced features for professionals.</p>
              <button>Get Pro</button>
            </div>
            <div className="card">
              <h3>Team</h3>
              <p>$29.99 / month</p>
              <p>Collaborate with your team effectively.</p>
              <button>Join Team</button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection>
        <footer>
          <p>Contact us: info@taskflow.com</p>
          <p>© 2026 taskflow All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-920 362 216q18 11 28 30t10 40v434q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-434q0-21 10-40t28-30l362-216Zm0 466 312-186-312-186-312 186 312 186Zm0 94L160-552v352h640v-352L480-360Zm0 160h320-640 320Z"/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg></a>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
}

export default App;

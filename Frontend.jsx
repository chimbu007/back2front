import React, { useState } from "react";
import FRONTEND from "../COURSES/Assets/frontend.jpg";
import UIUX from "../COURSES/Assets/uiux.jpg"
import GRAPHIC from "../COURSES/Assets/graphic.jpg"
// import FULLSTACK from "../COURSES/Assets/fullstack.webp"
import WHATSAPP from "../COURSES/Assets/whatsapp.jpg"
import AUTO from "../COURSES/Assets/autocad.jpg"
import "./CourseDetails.css";

const CollapsibleFAQ = ({ title, content, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={toggleCollapse}>
        <span className="title">{title}</span>
        <span className="toggle-button">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="collapsible-content">
          {image && <img src={image} alt="Sample" />}
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const CourseDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "Do I need prior coding knowledge?", answer: "No prior coding knowledge is required—this course is designed for beginners." },
    { question: "What does the course cover?", answer: "The course offers a balance of theoretical knowledge and hands-on practical skills." },
    { question: "Are live sessions recorded?", answer: "All live sessions are recorded and available for review." },
    { question: "Will this course help me get a job?", answer: "The course equips you with a portfolio to apply for roles like Frontend Developer or Web Designer." },
    // { question: "Do I Receive Anything After I Complete a Course?", answer: "Yes, you will receive a certificate upon successful completion." },
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="content">
        <nav className="breadcrumb">
          <span>HOME</span> / <span>COURSES</span> / <span className="Indicate">COURSE DETAILS</span>
        </nav>
        <h1>Frontend Development Course</h1>
        <p className="description">
        Master the skills to create dynamic, responsive, and visually appealing websites with our Frontend Development Course. This course is designed for beginners and focuses on real-world projects and modern technologies to prepare you for the booming web development industry.
        </p>
        {/* <p className="description">
          Master the art of building interactive and visually appealing websites and web applications. Enroll now and embark on your path to becoming a skilled front-end web developer.
        </p> */}
      </div>

      {/* Right Sidebar */}
      <div className="sidecard">
        <img src={FRONTEND} alt="Course Illustration" />
        <button className="demo-button"><h3>Book a Demo Class</h3></button>
        <div className="course-info">
          <p><span>📊</span> <strong>Student Level:</strong> Beginner</p>
          <hr />
          <p><span>📅</span> <strong>Duration:</strong> 3 Months</p>
          <hr />
          <p><span>🌍</span> <strong>Mode:</strong> Online, Live Classes</p>
          <hr />
          <p><span>🎓</span> <strong>Certificate:</strong> YES</p>
        </div>
      </div>

      {/* Other Courses */}
      <div className="other-courses">
        <h2>Other Courses</h2>
        <div className="course-item">
          <img src={UIUX} alt="UI UX Course" />
          <p><strong>UI UX Designer Course</strong></p>
        </div>
        <div className="course-item">
          <img src={GRAPHIC} alt="Graphic Design Course" />
          <p><strong>Graphic Design Course</strong></p>
        </div>
        <div className="course-item">
          <img src={AUTO} alt="AutoCAD" />
          <p><strong>AutoCAD</strong></p>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <a href="https://wa.me/1234567890" className="whatsapp">
        <img src={WHATSAPP} alt="WhatsApp Icon" />
      </a>

      {/* Course Syllabus */}
      <div className="Coursedetails">
        <h1>Course Syllabus</h1>
        <h3>Section 1. Front End Development</h3>

        <CollapsibleFAQ
          title="Fundamentals of Web Development"
          content={
            <>
            <ul>
              <li>Introduction to Web Development: Basics of websites, client-server architecture, and frontend technologies.</li>
              <li>HTML Basics: Structured, semantic HTML, forms, tables, and multimedia.</li>
              <li>CSS Basics: Selectors, properties, box model, and page styling.</li>
              <li>Introduction to JavaScript: Variables, loops, events, and interactivity.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Advanced Design Principles"
          content={
            <>
            <ul>
              <li>Responsive Web Design: Mobile-friendly websites using media queries.</li>
              <li>CSS Layout Systems: Flexbox and Grid for complex layouts.</li>
              <li>Bootstrap Framework: Pre-built responsive design components.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="JavaScript Frameworks"
          content={
            <>
            <ul>
              <li>Introduction to React.js: Component-based architecture, state management, and hooks.</li>
              <li>Basics of Angular: SPAs, MVC framework, and routing.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Individual Projects"
          content={
            <>
            <ul>
              <li>Responsive Portfolio Website: Showcase your skills.</li>
              <li>Weather Forecast Web App: Real-time weather data using APIs.</li>
            </ul>
            </>
          }
        />
      </div>

      {/* FAQ Section */}
      <div className="faq-container">
        <h1>Popular Questions to Ask Before Choosing a Course</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`} onClick={() => toggleAnswer(index)}>
            <div className="faq-question">{faq.question}</div>
            <span className="icon">{openIndex === index ? '−' : '+'}</span>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;

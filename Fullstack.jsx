import React, { useState } from "react";
// import FRONTEND from "../COURSES/Assets/frontend.jpg";
// import UIUX from "../COURSES/Assets/uiux.jpg"
// import GRAPHIC from "../COURSES/Assets/graphic.jpg"
import FULLSTACK from "../COURSES/Assets/fullstack.webp"
import WHATSAPP from "../COURSES/Assets/whatsapp.jpg"
// import AUTO from "../COURSES/Assets/autocad.jpg"
import BLENDER from "../COURSES/Assets/3d.jpg"
import GAME from "../COURSES/Assets/gamedesign.png"
import AR from "../COURSES/Assets/arvr.jpg"
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
    { question: "Do I need prior 3D experience?", answer: "No, the course is beginner-friendly." },
    { question: "What software is used?", answer: "Blender, which is free and open-source." },
    { question: "Can I pursue game development after this course?", answer: "Yes, the skills learned are applicable in game design and development." },
    { question: "What’s the final outcome of the course?", answer: "A portfolio of 3D models and animations to showcase your skills." },
    // { question: "Do I Receive Anything After I Complete a Course?", answer: "Yes, you will receive a certificate upon successful completion." },
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="content">
        <nav className="breadcrumb">
          <span>HOME</span> / <span>COURSES</span> / <span className="Indicate">COURSE DETAILS</span>
        </nav>
        <h1>Full Stack Development Course</h1>
        <p className="description">
        Become a versatile developer skilled in building complete web applications. Learn both frontend and backend technologies and work on projects that demonstrate your expertise.

        </p>
        {/* <p className="description">
          Master the art of building interactive and visually appealing websites and web applications. Enroll now and embark on your path to becoming a skilled front-end web developer.
        </p> */}
      </div>

      {/* Right Sidebar */}
      <div className="sidecard">
        <img src={FULLSTACK} alt="Course Illustration" />
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
          <img src={BLENDER} alt="Blender Modelling and Animation" />
          <p><strong>Blender Modelling and Animation</strong></p>
        </div>
        <div className="course-item">
          <img src={AR} alt="AR/VR Development" />
          <p><strong>AR/VR Development</strong></p>
        </div>
        <div className="course-item">
          <img src={GAME} alt="Game Design and Development" />
          <p><strong>Game Design and Development</strong></p>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <a href="https://wa.me/1234567890" className="whatsapp">
        <img src={WHATSAPP} alt="WhatsApp Icon" />
      </a>

      {/* Course Syllabus */}
      <div className="Coursedetails">
        <h1>Course Syllabus</h1>
        {/* <h3>Section 1. Front End Development</h3> */}

        <CollapsibleFAQ
          title="Module 1: Frontend Development"
          content={
            <>
            <ul>
              <li>HTML, CSS, and JavaScript Fundamentals : Build the foundation of web development, Work with semantic HTML, CSS properties, and JavaScript events.</li>
              <li>Responsive Web Design : Learn Flexbox, Grid, and Bootstrap for mobile-friendly websites.</li>
              <li>React.js Basics : Understand component-based architecture, state management, and hooks.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 2: Backend Development"
          content={
            <>
            <ul>
              <li>Node.js and Express Basics : Build scalable server-side applications.</li>
              <li>Database Management : CRUD operations using MongoDB and SQL basics.</li>
              <li>Authentication and Authorization : Secure apps with JWT and OAuth protocols.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 3: Deployment"
          content={
            <>
            <ul>
              <li>Version Control with Git : Collaborate using Git and GitHub.</li>
              <li>Hosting Applications : Deploy apps on platforms like AWS, Heroku, and Netlify.
              </li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 4: Capstone Projects"
          content={
            <>
            <ul>
              <li>Project 1: Blogging Platform : Create a web app with user authentication and CRUD functionality.</li>
              <li>Project 2: E-Commerce Website : Develop an online store with payment gateway integration.</li>
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

import React, { useState } from "react";
// import FRONTEND from "../COURSES/Assets/frontend.jpg";
import UIUX from "../COURSES/Assets/uiux.jpg"
import GRAPHIC from "../COURSES/Assets/graphic.jpg"
import FULLSTACK from "../COURSES/Assets/fullstack.webp"
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
    { question: "Do I need coding knowledge?", answer: "No coding knowledge is required." },
    { question: "This course focuses entirely on designwith job placement?", answer: "We provide guidance and resources for job placements in UI/UX roles." },
    { question: "Can I add projects to my portfolio?", answer: "Yes, you will work on projects that can be added to your professional portfolio." },
    // { question: "Is this course pre-recorded?", answer: "This course includes both live and pre-recorded sessions." },
    // { question: "Do I Receive Anything After I Complete a Course?", answer: "Yes, you will receive a certificate upon successful completion." },
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="content">
        <nav className="breadcrumb">
          <span>HOME</span> / <span>COURSES</span> / <span className="Indicate">COURSE DETAILS</span>
        </nav>
        <h1>UIUX Design Course</h1>
        <p className="description">
        Our UI/UX Design Course is perfect for beginners who want to craft visually stunning user interfaces (UI) and seamless user experiences (UX). You will master tools like Figma, Adobe XD, and Illustrator while developing a deep understanding of user-centered design principles.
        </p>
        {/* <p className="description">
          Master the art of building interactive and visually appealing websites and web applications. Enroll now and embark on your path to becoming a skilled front-end web developer.
        </p> */}
      </div>

      {/* Right Sidebar */}
      <div className="sidecard">
        <img src={UIUX} alt="Course Illustration" />
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
          <img src={GRAPHIC} alt="Graphic Design Course" />
          <p><strong>Graphic Design Course</strong></p>
        </div>
        <div className="course-item">
          <img src={AUTO} alt="AutoCAD" />
          <p><strong>AutoCAD</strong></p>
        </div>
        <div className="course-item">
          <img src={FULLSTACK} alt="Full Stack Web Development Course" />
          <p><strong>Full Stack Web Development Course</strong></p>
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
          title="UX Design Foundations"
          content=
            {
              <>
                  {/* <p>UX Design Foundations</p> */}
                  <ul>
                      <li>Introduction to UI/UX: Fundamentals and roles in product development.</li>
                      <li>User Research and Empathy Mapping: Insights for better design.</li>
                      <li>User Personas and Stories: Represent target audiences.</li>
                      <li>User Journey Mapping: Visualize user experiences.</li>
                      <li>Problem Definition: Address user pain points effectively.</li>
                      <li>User Scenarios and Storyboarding: Validate interactions.</li>
                      <li>Card Sorting and Information Architecture: Enhance usability.</li>
                      <li>Heuristic Evaluation: Evaluate usability principles.</li>
                      <li>Usability Testing: Gather feedback from real users.</li>
                      <li>Affinity Mapping and Iterative Design: Refine for optimal experiences.</li>
                  </ul>
              </>
          }
        />
        <CollapsibleFAQ
          title="UI Design Essentials"
          content={
            <>
            <ul>
              <li>Web and Mobile Layouts: Responsive design principles.</li>
              <li>Wireframing and Prototyping: Low- and high-fidelity prototypes.</li>
              <li>Colors and Typography: Theory, accessibility, and standards.</li>
              <li>Navigation Design: Intuitive navigation systems.</li>
              <li>Material Design and Design Systems: Scalable, modern designs.</li>

            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Tools and Techniques"
          content={
            <>
             <ul>
              <li>Figma (Advanced): Collaborative design and prototyping.</li>
              <li>Adobe XD (Advanced): Prototyping and UX tools.</li>
              <li>Illustrator and Asset Creation: Icons, illustrations, and assets.</li>
              </ul></>
          }
        />
        <CollapsibleFAQ
          title="Hands-On Projects"
          content={
            <>
            <ul>
              <li>Static Website UI Design: Professional UI design.</li>
              <li>Mobile App Design: Interactive, user-friendly prototypes.</li>
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

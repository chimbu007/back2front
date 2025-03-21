import React, { useState } from "react";
// import FRONTEND from "../COURSES/Assets/frontend.jpg";
// import UIUX from "../COURSES/Assets/uiux.jpg"
import GRAPHIC from "../COURSES/Assets/graphic.jpg"
import FULLSTACK from "../COURSES/Assets/fullstack.webp"
import WHATSAPP from "../COURSES/Assets/whatsapp.jpg"
import AUTO from "../COURSES/Assets/autocad.jpg"
import BLENDER from "../COURSES/Assets/3d.jpg"
// import GAME from "../COURSES/Assets/gamedesign.png"
// import AR from "../COURSES/Assets/arvr.jpg"
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
    { question: "Do I need prior design experience?", answer: "No, this course is designed for complete beginners." },
    { question: "Will I receive software access?", answer: "Guidance is provided for accessing free trials or software subscriptions." },
    { question: "What career opportunities can I explore after this course?", answer: "Roles like Graphic Designer, Branding Specialist, or Visual Content Creator." },
    { question: "Is the course project-based?", answer: "Yes, all modules incorporate hands-on projects to build your portfolio." },
    // { question: "Do I Receive Anything After I Complete a Course?", answer: "Yes, you will receive a certificate upon successful completion." },
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="content">
        <nav className="breadcrumb">
          <span>HOME</span> / <span>COURSES</span> / <span className="Indicate">COURSE DETAILS</span>
        </nav>
        <h1 style={{fontSize:"35px"}}>Graphic Designing Course</h1>
        <p className="description">
        Unleash your creativity and develop professional-level graphic design skills in this beginner-friendly course. Gain hands-on experience with real-world projects and master tools like Adobe Photoshop and Illustrator.

        </p>
        {/* <p className="description">
          Master the art of building interactive and visually appealing websites and web applications. Enroll now and embark on your path to becoming a skilled front-end web developer.
        </p> */}
      </div>

      {/* Right Sidebar */}
      <div className="sidecard">
        <img src={GRAPHIC} alt="Course Illustration" />
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
          <img src={AUTO} alt="AutoCAD" />
          <p><strong>AutoCAD</strong></p>
        </div>
        <div className="course-item">
          <img src={FULLSTACK} alt="Full Stack Development Course" />
          <p><strong>Full Stack Development Course</strong></p>
        </div>
        <div className="course-item">
          <img src={BLENDER} alt="Blender Modelling and Animation" />
          <p><strong>Blender Modelling and Animation</strong></p>
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
          title="Module 1: Fundamentals of Design"
          content={
            <>
            <ul>
              <li>Introduction to Graphic Design: Explore design principles: balance, contrast, emphasis, and hierarchy,Understand the design process and its applications.</li>
              <li>Color Theory and Typography : Learn how to use color psychology and typography effectively , Create visually cohesive and impactful designs.</li>
              {/* <li>Storyboarding and Concept Design: Create compelling game narratives and visual concepts to guide the development process. */}
              {/* </li> */}
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 2: Design Tools"
          content={
            <>
            <ul>
              <li>Adobe Photoshop Essentials: Image editing, layering, and effects, Create marketing materials such as posters and flyers.</li>
              <li>Adobe Illustrator Basics: Master vector design for logos and icons, Advanced use of tools like the Pen Tool and Pathfinder.</li>
              {/* <li>Physics and Animation: Master the Unity physics engine to create realistic motion and animations for characters and objects.</li> */}
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 3: Advanced Design Techniques"
          content={
            <>
            <ul>
              <li>Brand Identity Design: Develop logos, brand kits, and marketing materials.</li>
              <li>UI/UX Basics: Introduction to wireframing and prototyping with tools like Figma.
              </li>
              {/* <li>Publishing Your Game: Learn how to optimize, test, and publish your game on platforms like Steam, Google Play, and App Store.
              </li> */}
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 4: Portfolio Projects"
          content={
            <>
            <ul>
              <li>Project 1: Personal Branding Kit : Create a logo, business card, and social media assets.</li>
              <li>Project 2: Promotional Campaign Design : Develop a complete campaign for a product or event.
              </li>
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

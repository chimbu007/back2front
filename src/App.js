import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./App.css";

const App = () => {
  // Reference for Three.js canvas
  const canvasRef = useRef();

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
  }, []);

  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>SA TECH STUDIOS</li>
          <li>BUY 3D MODELS</li>
          <li className="searchbar">
            <input placeholder="Search 3D models" />
          </li>
          <li className="wrapper">
            <li>
              <a href="#" className="dropbtn">
                EXPLORE
              </a>
              <div className="mega-box">
                <div className="content">
                  <div className="main">
                    <ul className="mega-links">
                      <li><a href="#">Popular</a></li>
                      <li><a href="#">Staff picks</a></li>
                      <li><a href="#">Downloadable</a></li>
                      <li><a href="#">Collection</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Community members</a></li>
                      <li><a href="#">SA TECH STUDIOS Members</a></li>
                    </ul>
                  </div>
                  <div className="main">
                    <ul className="mega-links">
                      <li><a href="#">Animals & Pets</a></li>
                      <li><a href="#">Architecture</a></li>
                      <li><a href="#">Art & Abstract</a></li>
                      <li><a href="#">Cars & Vehicles</a></li>
                      <li><a href="#">Characters & Creatures</a></li>
                      <li><a href="#">Cultural Heritage & History</a></li>
                      <li><a href="#">Electronics & Gadgets</a></li>
                      <li><a href="#">Fashion & Style</a></li>
                      <li><a href="#">Food & Drink</a></li>
                    </ul>
                  </div>
                  <div className="main">
                    <ul className="mega-links">
                      <li><a href="#">Furniture & Home</a></li>
                      <li><a href="#">Music</a></li>
                      <li><a href="#">Nature & Plants</a></li>
                      <li><a href="#">News & Politics</a></li>
                      <li><a href="#">People</a></li>
                      <li><a href="#">Places & Travel</a></li>
                      <li><a href="#">Science & Technology</a></li>
                      <li><a href="#">Sports & Fitness</a></li>
                      <li><a href="#">Weapons & Military</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="dropbtn">
                FOR BUSINESS
              </a>
              <div className="dropdown-content">
                <a href="#">Sketchfab for teams</a>
                <a href="#">Augmented reality</a>
                <a href="#">3D viewer</a>
                <a href="#">3D eCommerce</a>
                <a href="#">3D configuration</a>
                <a href="#">Find a partner</a>
                <a href="#">Pricing</a>
                <a href="#">Customer stories</a>
              </div>
            </li>
          </li>
          <li>Log out</li>
          <button>SIGN IN</button>
          <button>UPLOAD</button>
        </ul>
      </nav>
      <header>
        
        <h1>
          The Leading Platform
          <br />
          <br />
          for 3D & AR on the web
        </h1>
        <p>
          Manage your 3D assets. Distribute 3D & AR experiences.
          <br />
          Collaborate with others. Showcase your work. Buy & sell
          <br />
          3D models.
        </p>
        <button>JOIN FOR FREE</button>
        <button>SEE PLANS</button>
      </header>
      <div ref={canvasRef}></div>
    </div>
  );
};

export default App;

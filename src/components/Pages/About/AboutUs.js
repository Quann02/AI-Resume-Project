import React from 'react';
import Footer from '../../Footer/Footer.js';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Resume Review AI</strong>! We are a group of dedicated college students passionate about technology, innovation, and career development.
      </p>
      <h2>Meet Our Team</h2>
      <div className="team">
        <div className="team-member">
          <img src='./imgs/PhuQuan.jpeg' alt="Phu Quan" className="team-photo" />
          <h3>Phu Quan</h3>
          <p>Devloper</p>
        </div>
        <div className="team-member">
          <img src="./imgs/AelyshaSharma.jpeg" alt="Aelysha Sharma " className="team-photo" />
          <h3>Aelysha Sharma </h3>
          <p>Devloper</p>
        </div>
        <div className="team-member">
          <img src="./imgs/Mysterious.jpeg" alt="Justin Tang" className="team-photo" />
          <h3>Justin Tang</h3>
          <p>Devloper</p>
        </div>
        <div className="team-member">
          <img src="./imgs/Mysterious.jpeg" alt="Enrico Pratama" className="team-photo" />
          <h3>Enrico Pratama</h3>
          <p>Devloper</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

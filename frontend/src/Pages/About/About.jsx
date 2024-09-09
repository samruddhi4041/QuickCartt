import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/damn_sam_404";
  };
  const visitGitHub = () => {
    window.location = "https://github.com/samruddhi4040";
  };
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/samruddhi-bhosale-73567926a/";
  };
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{ width: "15rem", height: "15rem", margin: "2rem 0" }}
                src="https://res.cloudinary.com/dj24clwc2/image/upload/v1715095183/fotor-ai-2024050720355_rxwaov.jpg"
                alt="Founder"
              />
              <h1>Samruddhi Bhosale</h1>
              <div className="button-container">
     <button onClick={visitLinkedIn}>Visit LinkedIn</button></div>
     <div className="button-container">
            <button onClick={visitGitHub}>Visit GitHub</button></div>
            <div className="button-container">
              <button onClick={visitInstagram}>Visit Instagram</button></div>
              <br />
              <p>
                This is a MERN stack wesbite made by @Samruddhi Bhosale for the purpose of final year project in partial completion for 
                <br/>K.V.Pendharkar College of Science, Commerce & Arts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

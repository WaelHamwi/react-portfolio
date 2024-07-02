import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import webDeveloper from "../../../src/animation/Animation - 1717582670226.json";
const HeroSection = () => {
  return (
    <section id="hero" className="heroSection flex">
      <div className="left-hero-section">
        <div className="avatar-section flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.2)" }}
            transition={{ damping: 10, type: "spring", stiffness: 100 }}
            src="./images/my img.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified_user"></div>
        </div>
        <h1 className="title">
        Senior Full Stack Web Developer & AI Specialist
        </h1>
        <p className="subtitle">
          Innovating at the intersection of telecommunications, web
          technologies, and artificial intelligence. Expert in building numerous
          websites using a wide range of techniques and frameworks, with a
          proven track record in advanced development and academic research.
        </p>
        <div className="social-icons flex">
          <a
            href="https://www.facebook.com/profile.php?id=100025933565494"
            className="icon icon-facebook"
          ></a>

          <a
            href="https://github.com/WaelHamwi?tab=repositories"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/wael-hamwi-660499223/"
            className="icon icon-linkedin"
          ></a>
          <a
            href="https://www.instagram.com/wael_hamwi_/"
            className="icon icon-instagram"
          ></a>
            <a href="/myResume.pdf"
            className="btn-download"
            download="Wael_Abdulsalam_Hamwi_CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="right-hero-section">
        <div className="animated">
          <Lottie
            className="webDeveloper-animation"
            animationData={webDeveloper}
            loop
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

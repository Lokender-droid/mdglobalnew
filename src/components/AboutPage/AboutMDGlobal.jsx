import React from "react";
import { motion } from "framer-motion";
// import officeImg from "./../../assets/office-730681_1920.jpg";
import officeImg1 from "./../../assets/office-730681_19201.jpg"
import "./AboutMDGlobal.css";

const AboutMDGlobal = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mdg-about-section">
      <motion.div
        className="mdg-main-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mdg-content-layout">
          {/* Text Content */}
          <div className="mdg-text-block">
            <motion.span className="mdg-subheading" variants={textVariants}>
              Your Trusted Recruitment Partner in India and Dubai
            </motion.span>
            <motion.h1 className="mdg-heading" variants={textVariants}>
              MD Global Human Resource Consulting
            </motion.h1>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              Founded in 2009, MD Global HR Consulting is one of GCC & India’s
              best recruitment firms, delivering customised hiring solutions
              across India and the GCC. With over 20,000 successful placements
              across sectors like IT, Non-IT, retail, e-commerce, digital, BFSI,
              FMCG, Healthcare, and Manpower Supply, we are a trusted partner
              for scalable talent acquisition.
            </motion.p>

            <motion.p className="mdg-paragraph" variants={textVariants}>
              Ranked among the Top 10 recruitment agencies in India, we
              specialise in permanent staffing, C2C, and C2H hiring models
              designed to meet today’s fast-changing workforce needs. From
              startups to Fortune 500s, our clients rely on our strategic
              recruitment approach, domain expertise, and seamless execution.
            </motion.p>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              With a presence across India and the GCC, MD Global stands among
              the Top 5 HR consultancies, delivering end-to-end payroll,
              staffing, and recruitment services that drive business
              performance.
            </motion.p>
          </div>

          {/* Image Section */}
          <motion.div className="mdg-image-section" variants={imageVariants}>
            <div className="mdg-image-holder">
              <img src={officeImg1} alt="Office" className="mdg-office-img" />
              <div className="mdg-image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMDGlobal;

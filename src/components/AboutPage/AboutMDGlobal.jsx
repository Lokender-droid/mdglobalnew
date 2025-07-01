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
              Established in 2024, MD Global HR Consulting is a leading recruitment and workforce solutions firm, recognised among the finest in India and the GCC. We specialise in delivering customised hiring solutions that align with our clients’ business objectives and evolving workforce needs.
            </motion.p>

            <motion.p className="mdg-paragraph" variants={textVariants}>
              With over 20,000 successful placements across diverse sectors, including IT, Non-IT, Retail, E-commerce, Digital, BFSI, FMCG, Healthcare, and Manpower Supply, MD Global is a trusted partner for scalable and strategic talent acquisition.
            </motion.p>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              Consistently ranked among the Top 10 recruitment agencies in India, we offer deep expertise in permanent staffing, C2C (Corp-to-Corp), and C2H (Contract-to-Hire) models, tailored to address the demands of today’s fast-paced business landscape. Our clientele ranges from agile startups to global Fortune 500 companies, all relying on our domain knowledge, strategic hiring approach, and seamless execution.
            </motion.p>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              With a strong presence across India and the GCC, MD Global is proudly positioned among the Top 5 HR consultancies, delivering end-to-end recruitment, staffing, and payroll solutions that enhance operational efficiency and long-term performance.
            </motion.p>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              We are ISO 9001:2015 certified, ensuring that all our processes meet the highest standards of quality, compliance, and consistency across every engagement.
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

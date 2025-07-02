import React from "react";
import { motion } from "framer-motion";
// import officeImg from "./../../assets/office-730681_1920.jpg";
import officeImg1 from "./../../assets/office-730681_19201.jpg";
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
              At MD Global HR Consulting, we help businesses grow by providing skilled professionals who truly fit the role and the company. Our solutions are built to be flexible, fast, and future-ready, whether you're hiring for a single role or building an entire team. From strategic recruitment to payroll and staffing, we simplify HR so our clients can focus on what they do best: running their business.
            </motion.p>

            <motion.p className="mdg-paragraph" variants={textVariants}>
              We take pride in our strong foundation, which comes from our association with Balaji Manpower Recruitment Pvt. Ltd, a respected name in the industry with over 17 years of experience in manpower and staffing services. As a part of the MD Global Group, Balaji’s legacy has played a key role in shaping our network, credibility, and operational excellence. Thanks to this foundation, MD Global, established in 2024, was able to quickly earn the trust of 20,000 clients across India and the GCC.
            </motion.p>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              With services covering permanent staffing, C2C/C2H hiring, payroll outsourcing, and project-based manpower, we cater to industries like IT, Non-IT, BFSI, E-commerce, Healthcare, Retail, and Manufacturing. Our recruitment process is backed by ISO 9001:2015-certified systems, ensuring high-quality delivery, compliance, and transparency at every stage.
            </motion.p>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              Whether you're a startup or a Fortune 500 company, MD Global is here to help you build teams that drive success.
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

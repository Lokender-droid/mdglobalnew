import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ForClientCandidate.css";

const cardData = [
  {
    heading: "For Clients",
    text: "Are you hiring employees? Our consultants are here to help you.",
    imageURL:
      "https://www.corporatestalwarts.com/wp-content/uploads/2025/02/Corporate-Stalwarts-For-Clients.webp",
    buttonText: "Hire Talent",
    buttonLink: "/request-a-call-back",
  },
  {
    heading: "For Candidates",
    text: "Drop your CV here and we'll match you with the perfect opportunity.",
    imageURL:
      "https://www.corporatestalwarts.com/wp-content/uploads/2025/02/Corporate-Stalwarts-For-Candidates-1024x838.webp",
    buttonText: "Submit Your CV",
    buttonLink: "/submit-your-cv",
  },
];

const ForClientCandidate = () => {
  return (
    <section id="for-client-candidate">
      <div className="fcc-container">
        <h1 className="fcc-title">
          Comprehensive Recruitment Solutions for Employers and Job Seekers Worldwide
        </h1>
        <p className="fcc-paragraph">
          We don’t just work, we build lasting connections with every client. It’s through
          this approach that we unite leading organisations with skilled talent and empower
          professionals to reach their goals. No matter what profile you're hiring for, we
          provide Comprehensive Recruitment Solutions for Employers and Job Seekers Worldwide
          to help you build a strong team or take the next step in your career, based on your
          unique needs.
        </p>

        <div className="fcc-card-wrapper">
          {cardData.map((val, index) => (
            <motion.div
              key={index}
              className="fcc-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={val.imageURL}
                alt={val.heading}
                loading="lazy"
                className="fcc-image"
              />
              <div className="fcc-overlay" />
              <div className="fcc-content">
                <h2 className="fcc-heading">{val.heading}</h2>
                <p className="fcc-text">{val.text}</p>
                <Link to={val.buttonLink} className="fcc-button text-center flex items-center justify-center">
                  {val.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ForClientCandidate);

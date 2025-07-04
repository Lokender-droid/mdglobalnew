import React from "react";
import { motion } from "framer-motion";
import "./OurServices.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  const servicesWeOffer = [
    {
      heading: "Contractural Hiring",
      text: "In today's fast-paced business environment, companies need to adapt quickly to the changing demands of the market.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Rent-a-Recruiter-768x512.webp",
      to: "/services/Contractual-Staffing-Services",
    },
    {
      heading: "Permanent Staffing",
      text: "Hiring the right people isn’t just about filling roles—it’s about building a future-ready organisation.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Virtual-Hiring-768x512.webp",
      to: "/services/Permanent-Staffing-solution",
    },
    
    {
      heading: "Payroll Services",
      text: "Managing payroll is more than just calculating salaries—it’s about accuracy, compliance, and trust.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Tech-and-Non-Tech-Hiring-768x512.webp",
      to: "/services/PayrollService",
    },
    {
      heading: "Manpower Services",
      text: "Empowering your operations with skilled workers who deliver quality and efficiency.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Executive-Search-768x512.webp",
      to: "/services/ManpowerSupplyServicesInDubai",
    },
    {
      heading: "Outsource Business",
      text: "Streamlining your staffing so you can focus on what matters most.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/HR-Policy-Development-768x512.webp",
      to: "/services/Staff-Outsourcing",
    },
    {
      heading: "Digital Marketing Service",
      text: "Future leaders are nurtured from day one, and our Campus Hiring Programs ensure you don’t miss the opportunity to attract them.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/RPO-Outsourcing-768x512.webp",
      to: "/services/DigitalMarketingServices",
    },
  ];

  return (
    <section id="our-services-section">
      <div className="services-container">
        <h1 className="services-mainheading">
          Precision Talent Matching for Every Organization
        </h1>
        <p className="fcc-paragraph">
          We don’t just pass along resumes; you don’t deserve mismatched
          profiles. At MD Global, we understand the value of true talent. We
          don’t ignore skills or potential. Instead, we filter candidates
          thoroughly to find individuals who bring real value.
        </p>
        <div className="services-card-wrapper">
          {servicesWeOffer.map((service, index) => (
            <motion.div
              className="custom-service-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={service.imageURL}
                alt={service.heading}
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-heading">{service.heading}</h2>
                <p className="card-text">{service.text}</p>
                <Link to={service.to} className="card-button">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

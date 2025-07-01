import React from "react";
import { motion } from "framer-motion";
import "./OurServices.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  const servicesWeOffer = [
    {
      heading: "Contractural Hiring",
      text: "In an economy that demands flexibility and speed, contractual staffing has emerged as a critical workforce strategy for modern businesses.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Rent-a-Recruiter-768x512.webp",
      to: "/services/Executive-Search",
    },
    {
      heading: "Permanent Staffing",
      text: "Providing long-term talent solutions to ensure stability and growth for your team.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Virtual-Hiring-768x512.webp",
      to: "/services/Permanent-Staffing-solution",
    },
    {
      heading: "Campus Placemenet",
      text: "Curating distinguished professionals for pivotal leadership roles.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/RPO-Outsourcing-768x512.webp",
      to: "/services/Leadership-Hiring",
    },
    {
      heading: "Payroll ",
      text: "Flexible staffing solutions to meet dynamic business demands.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Tech-and-Non-Tech-Hiring-768x512.webp",
      to: "/services/Contractual-Staffing-Services",
    },
    {
      heading: "Manpower Services",
      text: "Empowering your operations with skilled workers who deliver quality and efficiency.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/Executive-Search-768x512.webp",
      to: "/services/Blue-Collar-Staffing",
    },
    {
      heading: "Outsource Business",
      text: "Streamlining your staffing so you can focus on what matters most.",
      imageURL:
        "https://www.corporatestalwarts.com/wp-content/uploads/2025/03/HR-Policy-Development-768x512.webp",
      to: "/services/Staff-Outsourcing",
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
              initial={{ opacity: 1, y: 50 }}
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
                <p className="card-text w-full h-14">{service.text}</p>{" "}
                <Link
                  to={service.to}
                  className="card-button w-36 h-12 flex items-center justify-center text-center "
                  // whileHover={{ scale: 1.05 }}
                >
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

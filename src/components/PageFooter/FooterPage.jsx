import React from "react";
import { motion } from "framer-motion";
import "./FooterPage.css";
import logo from "../../assets/images/Logo/Mdglobal_main.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterPage = () => {
  const ImportantPages = [
    { heading: "Contractural Hiring", path: "/services/Contractual-Staffing-Services" },
    { heading: "Permanent Staffing", path: "/services/Permanent-Staffing-solution" },
    { heading: "Payroll Services", path: "/services/PayrollService" },
    { heading: "Manpower Services", path: "/services/ManpowerSupplyServicesInDubai" },
    { heading: "Outsource Business", path: "/services/Staff-Outsourcing" },
    { heading: "Digital Marketing Service", path: "/services/DigitalMarketingServices" },
  ];

  const QuickLinks = [
    { heading: "Blog", path: "https://mdglobalhr.com/blog/" },
    { heading: "About Us", path: "/about" },
    { heading: "Career", path: "/career" },
    { heading: "Contact Us", path: "/contact-us" },
    { heading: "Privacy Policy", path: "/privacy-Policy" },
  ];

  const OurVerticals = [
    { heading: "BFSI", path: "/" },
    { heading: "Oil & Gas", path: "/" },
    { heading: "FMCG", path: "/" },
    { heading: "Healthcare", path: "/" },
    { heading: "Hospitality", path: "/" },
    { heading: "Automobile", path: "/" },
    { heading: "Information Technology", path: "/" },
  ];

  const address = [
    {
      place: "India",
      OfficeAddress: [
        "PLOT NO 9, GALI NO. 11, ADARSH NAGAR, Ballabgarh, Faridabad-121004",
      ],
      Email: "hrindia@mdglobalhr.com",
      PhoneNumber: "(+91) 82850 23400, 92123 62488",
      socials: [
        {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/mdglobalhrconsultingindia/",
        },
        {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/md_globalhrindia/",
        },
        {
          icon: <FaLinkedinIn />,
          url: "https://www.linkedin.com/company/md-global-hr-consulting-india",
        },
      ],
    },
    {
      place: "UAE Dubai",
      OfficeAddress: [
        "One Stop Business centre, 3floor office no. 28 inside Al ghurair corporate office near union metro station",
      ],
      Email: "hr@mdglobalhr.com",
      PhoneNumber: "(+971) 52 498 4322,(+971) 50 4099390 ",
      socials: [
        {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/officialmdglobalhr/",
        },
        {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/official_mdglobal/",
        },
        {
          icon: <FaLinkedinIn />,
          url: "https://www.linkedin.com/company/md-global-human-resource-consultingllc",
        },
      ],
    },
  ];

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#FFD700",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    initial: { scale: 1, color: "#e4e4e4" },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <footer className="footer-container">
      <motion.div
        className="footer-content"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Footer Grid */}
        <div className="footer-grid">
          <div className="footer-section">
            <motion.img
              src={logo}
              alt="MD Global HR"
              className="footer-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <p className="logoP">
              MD Global Human Resource Consulting LLC is a leading recruitment
              agency offering end-to-end recruitment services across India and
              the UAE.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">IMPORTANT PAGES</h3>
            <ul className="footer-list">
              {ImportantPages.map((item, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link to={item.path} className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-list">
              {QuickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link to={item.path} className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">OUR VERTICALS</h3>
            <ul className="footer-list">
              {OurVerticals.map((item, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address Cards */}
        <div className="footer-address-section">
          {address.map((loc, index) => (
            <motion.div
              key={index}
              className="footer-address"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + 0.2 * index, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <h4 className="footer-subheading">{loc.place}</h4>

              <div className="footer-address-text">
                <span className="footer-label">
                  <span className="footer-icon-address h-2 w-10 flex items-center justify-center rounded-full mr-2">
                    <FaMapMarkerAlt className="text-white" />
                  </span>
                  {loc.OfficeAddress.map((addr, i) => (
                    <div key={i}>{addr}</div>
                  ))}
                </span>
              </div>

              <div className="footer-address-text">
                <Link to={`mailto:${loc.Email}`} className="footer-email flex">
                  <span className="footer-icon-address h-2 w-8 flex items-center justify-center rounded-full">
                    <FaEnvelope className="text-white" />
                  </span>
                  <p className="text-[16px]">{loc.Email}</p>
                </Link>
              </div>

              <p className="footer-address-text">
                <span className="footer-label">
                  <span className="footer-icon-address h-2 w-10 flex items-center justify-center rounded-full">
                    <FaPhoneAlt className="text-white" />
                  </span>
                  {loc.PhoneNumber}
                </span>
              </p>

              {/* Social Media Icons */}
              <div className="footer-social-icons">
                {loc.socials?.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-wrapper"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          className="footer-copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          © 2025 MD Global HR — All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default FooterPage;

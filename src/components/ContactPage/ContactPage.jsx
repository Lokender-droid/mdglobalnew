import React from 'react';
import './ContactPage.css'; // custom styles
import indiaFlag from './../../assets/flages/india-flag.png';
import uaeFlag from './../../assets/flages/UAE_flag.png'; 
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-grid">
        {/* UAE Office */}
        <div className="contact-card">
          <div className="card-header">
            <img src={uaeFlag} alt="UAE Flag" className="flag" />
            <h2>UAE Office</h2>
          </div>

          <Section title="Middle East">
            <Office
              city="Dubai"
              address="One Stop Business centre, 3floor office no. 28 inside Al ghurair corporate office near union metro station"
              email=" pooja@mdglobalhr.com"
              phone="(+971) 50 409 9390"
            />
          </Section>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0968924371305!2d55.31500807408366!3d25.26732582885911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79ab98d683662a1%3A0x405ce9d639ef6d6c!2sOne%20Stop%20Business%20Center!5e0!3m2!1sen!2sin!4v1748585476031!5m2!1sen!2sin"
              loading="lazy"
              title="UAE Office Location"
            ></iframe>
          </div>

          <SocialIcons />
        </div>

        {/* India Office */}
        <div className="contact-card">
          <div className="card-header">
            <img src={indiaFlag} alt="India Flag" className="flag" />
            <h2>India Offices</h2>
          </div>

          <Section title="Delhi NCR">
            <Office
              city="Gurugram"
              address="Office Add- 1008SVHB3 Tower Metro Street Sector- 83, Gurugram."
              email="It@mdglobalhr.com"
              phone="+91 9289007800"
            />
            <Office
              city="Ballabhgarh"
              address="PLOT NO 9, GALI NO. 11, ADARSH NAGAR, Ballabgarh, Faridabad- 121004"
              email="hrindia@mdglobalhr.com"
              phone="+91 9319090180"
            />
            <Office
              city="Delhi"
              address="Connaught Place, New Delhi"
              email="delhi@example.com"
              phone="+91-xxx-xxxxxxx"
            />
          </Section>

          <Section title="North India">
            <Office
              city="Uttarakhand"
              address="Rajpur Road, Dehradun, Uttarakhand"
              email="uttarakhand@example.com"
              phone="+91-xxx-xxxxxxx"
            />
          </Section>

          <Section title="West India">
            <Office
              city="Ahmedabad/Gujarat"
              address="E/42
              4 Sidhraj ZSquare, Beside The Landmark Mall, Kudas, Gandhinagar"
              email="gujarat@example.com"
              phone="+91-xxx-xxxxxxx"
            />
          </Section>

          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="section">
    <h3 className="section-title">{title}</h3>
    <div>{children}</div>
  </div>
);

const Office = ({ city, address, email, phone }) => (
  <div className="office-box">
    <h4>{city} Office</h4>
    <ContactDetail icon={<HiOutlineLocationMarker />} text={address} />
    <ContactDetail icon={<HiOutlineMail />} text={email} />
    <ContactDetail icon={<HiOutlinePhone />} text={phone} />
  </div>
);

const ContactDetail = ({ icon, text }) => (
  <div className="contact-detail">
    <span className="icon">{icon}</span>
    <p>{text}</p>
  </div>
);

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebook />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FaTwitter />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>
  </div>
);

export default ContactPage;

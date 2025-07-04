import React from 'react';
import { motion } from 'framer-motion';
import ITRecruitmentForm from '../ITRecruitmentAgenciesInDubai/ITRecruitmentForm';
import './ManpowerSupplyServicesInDubai.css';
import img from './../../../assets/images/About/Banner.jpg';

const ManpowerSupplyServicesInDubai = () => {
  const sectionFade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cards = [
    {
      title: 'Extensive Talent Network',
      text: 'Access a large pool of skilled professionals across sectors from IT to hospitality.',
    },
    {
      title: 'Quick Recruitment Process',
      text: 'Streamlined hiring procedures save your time and effort.',
    },
    {
      title: 'Legal Compliance',
      text: 'We handle all legal and visa formalities for a stress-free experience.',
    },
    {
      title: 'Tailored Staffing Solutions',
      text: 'Get the right talent for temporary or permanent positions, customized to your needs.',
    },
  ];

  const benefits = [
    {
      title: 'Lower Hiring Costs',
      text: 'Reduce spending on advertising, interviews, and training.',
    },
    {
      title: 'Pre-Vetted Candidates',
      text: 'We deliver ready-to-deploy professionals who are screened and trained.',
    },
    {
      title: 'Operational Efficiency',
      text: 'Focus on your core business while we manage your manpower needs.',
    },
    {
      title: 'Flexible Workforce',
      text: 'Scale up or down with ease as per your project demands.',
    },
  ];

  return (
    <div className="Manpower-service-page">
      <section
        className="Manpower-service-hero"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="Manpower-service-overlay" />
        <motion.div
          className="Manpower-service-hero-text"
          initial="hidden"
          animate="visible"
          variants={sectionFade}
        >
          <h1>Manpower Services </h1>
          
        </motion.div>
      </section>

      <section className="Manpower-service-content">
        <motion.div
          className="Manpower-service-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <div className="Manpower-service-text-image">
            <div className="Manpower-service-text">
              <h2>Customized Manpower Supply for Business Growth</h2>
              <p>
                Whether you are scaling up for a new project or need long-term staffing, our team at MD Global HR Consulting provides reliable manpower solutions in Dubai across industries.
              </p>
              <p>
                We simplify your hiring process so you can focus on what matters most: running your business efficiently.
              </p>
            </div>
            <img
              src="https://mdglobalhr.com/wp-content/uploads/2025/04/Manpower-Supply-Services-in-Dubai-400x266.webp"
              alt="Manpower Services"
            />
          </div>
        </motion.div>
      </section>

      <section className="Manpower-service-cards">
        <div className="Manpower-service-container">
          <h2 className="Manpower-service-title">Why Choose MD Global?</h2>
          <div className="Manpower-service-card-grid">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="Manpower-service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionFade}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="Manpower-service-cards gray">
        <div className="Manpower-service-container">
          <h2 className="Manpower-service-title">Key Benefits</h2>
          <div className="Manpower-service-card-grid">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                className="Manpower-service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionFade}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="Manpower-service-cta">
        <div className="Manpower-service-container text-center">
          <h2>Looking for Reliable Manpower in Dubai?</h2>
          <p>Connect with MD Global HR Consulting today to explore flexible and effective staffing solutions tailored for your success.</p>
        </div>
      </section>

      <section className="Manpower-service-form">
        <ITRecruitmentForm />
      </section>
    </div>
  );
};

export default ManpowerSupplyServicesInDubai;
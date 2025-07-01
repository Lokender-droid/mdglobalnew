import React from 'react';
import bgImage from "./../../assets/images/background-images/home-we_serve.jpg";

import {
  RiBuilding2Line,
  RiShoppingCart2Line,
  RiHeartPulseLine,
  RiGasStationLine,
  RiHomeGearLine,
  RiCarLine,
  RiBankLine,
  RiComputerLine,
} from 'react-icons/ri';

import { motion } from 'framer-motion';
import './HomePageAbout.css';

const verticals = [
  { name: 'Manufacturing', icon: <RiBuilding2Line /> },
  { name: 'FMCG', icon: <RiShoppingCart2Line /> },
  { name: 'Healthcare', icon: <RiHeartPulseLine /> },
  { name: 'Oil & Gas', icon: <RiGasStationLine /> },
  { name: 'Facility Management', icon: <RiHomeGearLine /> },
  { name: 'Automobile', icon: <RiCarLine /> },
  { name: 'BFSI', icon: <RiBankLine /> },
  { name: 'Digital & IT', icon: <RiComputerLine /> },
];

const HomePageAbout = () => {
  return (
    <section
      className="about-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="about-overlay" />
      <div className="about-container">
        <h2 className="about-heading">Industries We Serve</h2>
        <p className="about-subheading">
          With expertise spanning diverse sectors, we stay ahead of the curve in an evolving job market.
          Our industry-focused approach ensures tailored talent solutions that meet dynamic workforce demands with precision and agility.
        </p>

        <div className="verticals-grid">
          {verticals.map((item, index) => (
            <motion.div
              key={index}
              className="vertical-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1 }}
            >
              <div className="vertical-icon">{item.icon}</div>
              <h3 className="vertical-name">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;

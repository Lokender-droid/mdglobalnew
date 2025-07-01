import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
// import bgImage from "./../../assets/images/MainBanner.jpeg";
// import bgImage from "./../../assets/images/MainBanner.jpeg";
import bgImage from "./../../assets/images/banner_change.jpeg";
import Service from "./MainBody/Service";
import MainServices from "./MainServices";
import HomePageAbout from "./HomePageAbout";
import Testimonials from "./Testimonials";
import InfinitySlider from "../Slider/InfinitySlider";
import OurUniqueness from "../AboutPage/OurUniqueness";

// import WhyCards from "./WhyCards";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-20 overflow-hidden mb-16">
        {/* Background Image */}
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-[90vh] object-cover z-[-5]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75 z-[-1]"></div>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-4 md:px-0">
          {/* Animated Subtitle */}

          {/* Animated Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.8)] mb-6 leading-tight animate__animated animate__fadeIn animate__delay-1s"
          >
            Where Talent Meets Opportunity
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-2xl text-white mb-8 animate__animated animate__fadeIn animate__delay-2s"
          >
            Empowering businesses. Transforming careers.
          </motion.p>
        </div>
      </section>

      {/* Center-Aligned Text Section */}
      <section
        id="recruitment-agency-section"
        className="flex items-center justify-center text-center px-4 md:px-20 py-5 mb-16"
      >
        <div className="max-w-10xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="heading-title animate__animated animate__fadeIn animate__delay-3s"
          >
            Redefining Leadership Hiring Across India & the GCC
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="about-paragraph justify-center"
          >
            In today’s competitive business landscape, companies across India
            and the GCC are on the lookout for transformative leaders. MD
            Global, a premier HR consultancy in India, specialises in Executive
            Search and CXO hiring for top-tier positions. We have tapped into
            the evolving talent ecosystem, helping organisations connect with
            visionary professionals across industries. As one of the most
            trusted recruitment agencies in the GCC and a leader in placement
            services in India, we create meaningful candidate experiences. From
            executive recruitment to leadership consulting, MD Global is your
            strategic partner in building high-impact teams that shape the
            future.
          </motion.p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Service />
        </motion.div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <OurUniqueness />
        </motion.div>
      </section>
      {/* <section className="w-full">
        <OurUniqueness />
      </section> */}

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <MainServices />
        </motion.div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <HomePageAbout />
        </motion.div>
      </section>

      <section>
        <InfinitySlider></InfinitySlider>
        <Testimonials />
      </section>
    </>
  );
};

export default HomePage;

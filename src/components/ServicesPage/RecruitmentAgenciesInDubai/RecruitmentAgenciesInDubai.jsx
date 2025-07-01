import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import './RecruitmentAgenciesInDubai.css';
import INDUSTRIES from './INDUSTRIES';
import RecruitmentAgenciesInDubaiInfo from './RecruitmentAgenciesInDubaiInfo';
import RecruitmentBenefitsForm from './RecruitmentBenefitsForm';
import RecruitmentAgencyInfo from './RecruitmentAgencyInfo';
import FAQSRAD from './FAQSRAD';
import img from './../../../assets/images/About/Banner.jpg';

const RecruitmentAgenciesInDubai = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, when: 'beforeChildren' },
    },
  };

  const articleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <Fragment>
      <header>
        <motion.section
          className="rad-banner relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="rad-banner-overlay absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="rad-banner-heading text-3xl sm:text-4xl font-extrabold tracking-tight relative z-10 mt-2 text-center px-4"
            variants={headerVariants}
          >
            Top Recruitment Agencies in Dubai | Find the Best Recruitment Agency in Dubai
          </motion.h1>
          <motion.div
            className="rad-banner-underline w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="rad-main px-4 sm:px-6 py-6 max-w-6xl mx-auto">
        <motion.article
          className="rad-intro-article text-gray-800"
          initial="hidden"
          animate="visible"
          variants={articleVariants}
        >
          <span className="rad-intro-title text-lg sm:text-xl font-semibold text-gray-800 block mb-2">
            Best Recruitment Agencies in Dubai:
          </span>
          <p className="rad-intro-paragraph mt-2 text-base sm:text-lg leading-relaxed">
            Though there are numerous recruitment agencies in Dubai, UAE, MD Global HR Consultancy
            has established itself as a notable recruitment agency in Dubai. Our professional
            recruiters and recruitment consultants in Dubai have extensive expertise in recruiting
            White Collar and Blue Collar positions.
          </p>
          <p className="rad-intro-paragraph mt-4 text-base sm:text-lg leading-relaxed">
            Dubai, a city known for its vibrant business landscape, is a hub for numerous industries.
            With a vast pool of talent and a competitive job market, finding the right employment
            opportunity can feel like searching for a needle in a haystack. This is where recruitment
            agencies play a pivotal role.
          </p>
        </motion.article>

        <motion.article
          className="rad-highlight-article bg-white mt-8 p-4 sm:p-6 rounded-xl shadow-md text-gray-900"
          initial="hidden"
          animate="visible"
          variants={articleVariants}
        >
          <h2 className="rad-highlight-heading text-xl sm:text-2xl font-bold mb-4 text-gray-800">
            Best Recruitment Agencies in Dubai
          </h2>
          <p className="rad-highlight-paragraph mb-4 text-base sm:text-lg leading-relaxed">
            Recruitment agencies act as a bridge between job seekers and employers, offering invaluable
            assistance in connecting the right talent with the right companies. They possess a deep
            understanding of the local job market, boast extensive networks, and employ expert recruiters
            with industry-specific knowledge.
          </p>
          <h3 className="rad-highlight-subheading text-lg sm:text-xl font-semibold mb-3 text-gray-800">
            MD Global Human Resource Consulting LLC
          </h3>
          <p className="rad-highlight-details mt-4 text-base sm:text-lg leading-relaxed">
            MD Global Human Resource Consulting LLC is Dubai’s fastest growing Recruitment and Job
            Consultancy Services provider. We bring together top people and prestigious organizations
            to support success and progress in today’s competitive business world.
          </p>
        </motion.article>

        <section className="rad-bottom-section mt-10 space-y-10">
          <INDUSTRIES />
          <RecruitmentAgenciesInDubaiInfo />
          <RecruitmentBenefitsForm />
          <RecruitmentAgencyInfo />
          <FAQSRAD />
        </section>
      </main>
    </Fragment>
  );
};

export default RecruitmentAgenciesInDubai;

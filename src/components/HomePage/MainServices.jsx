import React from "react";
import "./MainServices.css";
import { motion } from "framer-motion";
import execImg from "../../assets/images/executive search4.jpeg";
import emiratiImg from "../../assets/images/Emiratisation2.webp";
import staffingImg from "../../assets/images/Contractual staffing1.jpeg";

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceSections = () => {
  return (
    <section className="homepage-service-container py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <motion.div
        className="homepage-service-content w-full max-w-6xl p-6 sm:p-8 lg:p-10 rounded-3xl bg-gray-50 homepage-service-shadow space-y-12"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading & Paragraph Section */}
        <motion.div
          id="homepage-service-intro"
          className="homepage-service-text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="homepage-service-title-main text-3xl sm:text-4xl font-bold text-blue-800">
            Services We Offer
          </h2>
          <p className="homepage-service-description text-gray-600 text-base sm:text-lg leading-relaxed">
            At MD Global, we know that hiring the right talent, especially at
            the leadership level, can be challenging, costly, and
            time-sensitive. As a trusted HR consultancy in India and one of the
            top recruitment agencies in the GCC, we make it easier.
          </p>
          <p className="homepage-service-description2 text-gray-600 text-base sm:text-lg leading-relaxed">
            Our services are designed to be efficient, flexible, and
            budget-friendly. Whether you're looking for Executive Search, CXO
            hiring, or reliable placement services, we deliver tailored
            solutions that save your time and money.
          </p>
        </motion.div>

        {/* Section 1: Contractual Hiring – C2C & C2H Models*/}
        <motion.div
          className="homepage-service-section flex flex-col lg:flex-row items-center gap-2 lg:gap-2"
          id="homepage-service-executive"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="homepage-service-image-wrapper w-full lg:w-1/2 ">
            <motion.img
              src={execImg}
              alt="Executive Search"
              className="homepage-service-image "
            />
          </div>
          <div className="homepage-service-content-wrapper w-full lg:w-1/2 space-y-4 px-4 sm:px-6">
            <motion.h2
              className="homepage-service-title text-2xl sm:text-3xl"
              variants={fadeVariant}
            >
              Contractual Hiring – C2C & C2H Models
            </motion.h2>
            {/* <motion.h3
              className="homepage-service-subtitle text-lg sm:text-xl"
              variants={fadeVariant}
            >
              Leadership skills that your organisation deserve
            </motion.h3> */}
            <motion.p className="homepage-service-text" variants={fadeVariant}>
              In today’s agile business world, not every role demands a permanent seat, but every role demands the right talent. That’s where MD Global’s contractual hiring solutions come into play.
            </motion.p>
            <motion.p className="homepage-service-text" variants={fadeVariant}>
              Whether you need quick support for a project or want to test the waters before onboarding permanently, our C2C (Corp-to-Corp) and C2H (Contract-to-Hire) models give you the flexibility to scale on demand, without the long-term risk.
            </motion.p>
            <motion.p className="homepage-service-text" variants={fadeVariant}>
              We work closely with startups, enterprises, and global firms offering HR outsourcing and contract staffing solutions that are both reliable and cost-efficient. Our recruiters ensure every candidate, from IT consultants to domain specialists, is ready to hit the ground running.

            </motion.p>
          
          </div>
        </motion.div>

        {/* Section 2: Permanent Staffing Solutions */}
        <motion.div
          className="homepage-service-section flex flex-col lg:flex-row-reverse items-center gap-2 lg:gap-2"
          id="homepage-service-emiratisation"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="homepage-service-image-wrapper w-full lg:w-1/2">
            <motion.img
              src={emiratiImg}
              alt="Emiratisation"
              className="homepage-service-image"
            />
          </div>
          <div className="homepage-service-content-wrapper w-full lg:w-1/2 space-y-4 px-4 sm:px-6">
            <motion.h2
              className="homepage-service-title text-2xl sm:text-3xl"
              variants={fadeVariant}
            >
              Permanent Staffing Solutions
            </motion.h2>
            {/* <motion.h3
              className="homepage-service-subtitle text-lg sm:text-xl"
              variants={fadeVariant}
            >
              Empowering the UAE Workforce by Connecting the Right Talent with
              organisations.
            </motion.h3> */}
            <motion.p
              className="homepage-service-text text-gray-600"
              variants={fadeVariant}
            >
              At MD Global, we believe great businesses are built on great teams. Our permanent staffing solutions are designed to help companies in India and the GCC find long-term, reliable talent that fits both role and culture. While your HR team focuses on engagement and growth, we take care of sourcing skilled professionals through a structured, strategic approach.
            </motion.p>

            <motion.p
              className="homepage-service-text text-gray-600"
              variants={fadeVariant}
            >
              As a trusted name in permanent recruitment services, we combine industry insight with access to a vast talent pool to deliver high-quality candidates. Our advanced Applicant Tracking System (ATS) ensures a smooth, transparent hiring process from first contact to final offer, while providing detailed MIS reports for smart decision-making.
            </motion.p>
            
          </div>
        </motion.div>

        {/* Section 3: Payroll Services */}
        <motion.div
          className="homepage-service-section flex flex-col lg:flex-row items-center gap-2 lg:gap-2"
          id="homepage-service-staffing"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="homepage-service-image-wrapper w-full lg:w-1/2 ">
            <motion.img
              src={staffingImg}
              alt="Contractual Staffing"
              className="homepage-service-image"
            />
          </div>
          <div className="homepage-service-content-wrapper w-full lg:w-1/2 space-y-4 px-4 sm:px-6">
            <motion.h2
              className="homepage-service-title text-2xl sm:text-3xl"
              variants={fadeVariant}
            >
              Payroll Services
            </motion.h2>
            {/* <motion.h3
              className="homepage-service-subtitle text-lg sm:text-xl"
              variants={fadeVariant}
            >
              Scalable and Cost-Effective Workforce Solutions
            </motion.h3> */}

            <motion.p
              className="homepage-service-text text-gray-600"
              variants={fadeVariant}
            >
              MD Global offers reliable and efficient payroll services in India and the GCC, tailored to simplify your monthly processing needs. From salary disbursement and TDS to PF, ESI, and statutory compliance, we manage it all with accuracy and care.
            </motion.p>
            <motion.p
              className="homepage-service-text text-gray-600"
              variants={fadeVariant}
            >
              What makes us the best? Our dedicated payroll experts, secure cloud-based systems, and deep compliance knowledge ensure zero delays, zero errors, and complete transparency.
            </motion.p>
            <motion.p
              className="homepage-service-text text-gray-600"
              variants={fadeVariant}
            >
              With MD Global’s payroll outsourcing solutions, you save time, cut costs, and stay legally compliant while we handle the numbers behind your people.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSections;

import React from "react";
import "./ExecutiveSearchServices.css";
import { motion } from "framer-motion";
import img from "./../../../assets/images/About/Banner.jpg";

const ExecutiveSearchServices = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, when: "beforeChildren" },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.4 },
    },
  };

  const OurProcess = [
    {
      heading: "Discovery & Strategic Alignment",
      text: "We start by truly getting to know you. We dive deep into your company’s goals, structure, values, and challenges to build a clear picture of the kind of leader you need, not just by qualifications, but by mindset, vision, and cultural fit.",
    },
    {
      heading: "Market Intelligence & Talent Mapping",
      text: "Next, we explore the market. Using a mix of industry insights, headhunting expertise, and our trusted network, we identify top talent—whether they’re actively looking or not. We tailor the search to your unique needs.",
    },
    {
      heading: "Confidential Outreach & Engagement",
      text: "We approach shortlisted leaders discreetly and professionally, protecting your brand and theirs. Even those not actively job-hunting are often open to the right opportunity, when it’s presented the right way.",
    },
    {
      heading: "Evaluation & Assessment",
      text: "We go beyond résumés. Each candidate is carefully assessed through structured interviews, leadership evaluations, and, if needed, psychometric tools. We focus on emotional intelligence, strategic vision, innovation, and team-building ability.",
    },
    {
      heading: "Cultural Fit & Strategic Value",
      text: "A great leader must align with their organisation’s DNA. We dig deep, running background checks, conducting references, and evaluating how each candidate fits within your company’s values and future direction.",
    },
    {
      heading: "Shortlisting & Interview Coordination",
      text: "Only the best make the shortlist. We present you with curated profiles backed by insights and context. We also coordinate interviews efficiently, ensuring a smooth and stress-free process for both sides.",
    },
    {
      heading: "Offer Management &Onboarding Support",
      text: "Once you’ve found the right match, we guide the process through offer discussions, onboarding, and even beyond. We stay in touch post-placement to make sure the integration is smooth and the hire becomes a long-term success.",
    },
  ];

  const ChooseExecutiveSearch = [
    {
      heading: "Global Reach, Local Expertise:",
      text: `With offices in India and the UAE, we manage cross-border hiring with cultural fluency, legal compliance, and regional market knowledge.`,
    },
    {
      heading: "Industry-Specific Knowledge:",
      text: `Our consultants specialize in various industries, enabling us to speak your language and understand the specific skillsets and leadership qualities required in your domain.`,
    },
    {
      heading: "Strong Leadership Network:",
      text: `Over the years, we've built a robust network of top-tier professionals across healthcare, IT, engineering, oil & gas, logistics, retail, construction, finance, and more. Many of our placements come through referrals and exclusive talent pools.`,
    },
    {
      heading: "\tConfidentiality & Integrity:",
      text: `We maintain the highest level of discretion throughout the process, respecting the sensitivities involved in senior-level hiring.`,
    },
    {
      heading: "Speed with Precision:",
      text: `Executive hiring is urgent yet strategic. We adhere to clear timelines while ensuring that no step is compromised. Every candidate we recommend is thoroughly vetted for leadership potential and business impact. `,
    },
  ];

  const industries = [
    {
      name: "Healthcare & Life Sciences",
      icon: "ri-heart-pulse-line",
      color: "#bd8706",
    },
    {
      name: "Information Technology (IT) & Digital",
      icon: "ri-computer-line",
      color: "#bd8706",
    },
    {
      name: "Manufacturing & Engineering",
      icon: "ri-tools-line",
      color: "#bd8706",
    },
    {
      name: "Real Estate & Construction",
      icon: "ri-building-line",
      color: "#bd8706",
    },
    {
      name: "Banking & Financial Services",
      icon: "ri-bank-line",
      color: "#bd8706",
    },
    {
      name: "Retail, FMCG & Consumer Goods",
      icon: "ri-shopping-cart-line",
      color: "#bd8706",
    },
    {
      name: "Energy, Oil & Gas",
      icon: "ri-gas-station-line",
      color: "#bd8706",
    },
    { name: "Hospitality & Travel", icon: "ri-hotel-line", color: "#bd8706" },
    {
      name: "Logistics & Supply Chain",
      icon: "ri-truck-line",
      color: "#bd8706",
    },
    { name: "Education & EdTech", icon: "ri-book-open-line", color: "#bd8706" },
  ];

  const roles = [
    "Chief Executive Officer (CEO)",
    "Chief Operating Officer (COO)",
    "Chief Financial Officer (CFO)",
    "Chief Technology Officer (CTO)",
    "Chief Marketing Officer (CMO)",
    "Managing Director / General Manager",
    "Vice Presidents / Regional Directors",
    "Business Unit Heads",
    "Board Members & Advisors",
    "Senior Functional Heads (Sales, HR, Product, etc.)",
  ];

  return (
    <>
      <header>
        <motion.section
          className="relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Executive Search
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="ExecutiveSearchServicesMainMP px-4 w-full mx-auto space-y-12 py-8">
        {/* Intro */}
        <section className="ExecutiveSearchServicesSection space-y-8">
          <article className="ExecutiveSearchServicesArticle space-y-4">
            {/* <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Empowering Organisations with Visionary Leadership
            </h2> */}
            <p className="ExecutiveSearchServicesParagraph">
              In an economy that demands flexibility and speed, contractual staffing has emerged as a critical workforce strategy for modern businesses. At MD Global HR Consulting, a recognised Top 5 HR consultancy in India, we offer agile, scalable, and compliant contractual staffing solutions that help companies fill temporary roles, scale project teams, and reduce long-term hiring risks.

            </p>
            <p className="ExecutiveSearchServicesParagraph">
              With over 17+ years in business, MD Global has become a trusted staffing firm for startups, SMEs, and multinational companies across India and the GCC. Our service models—C2C (Corp-to-Corp) and C2H (Contract-to-Hire)—are ideal for companies looking to build efficient, short-term teams without compromising on quality or compliance.

            </p>
            
          </article>

          <article className="ExecutiveSearchServicesArticle space-y-4">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Our Executive Search Philosophy
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              At MD Global, we understand that organisational leaders are more
              than decision-makers; they are the face of the company. They
              represent your brand, build client trust, and leave a lasting
              impression in the marketplace.
            </p>
            <p className="ExecutiveSearchServicesParagraph">
              Strong leadership doesn't just lead teams; it shapes reputations
              and drives business relationships. That’s why we focus on finding
              leaders who reflect your values, carry your vision, and strengthen
              your credibility in front of clients and stakeholders.
            </p>
            <p className="ExecutiveSearchServicesParagraph">
              Our role is to act as a true extension of your organisation, using
              our expertise to deliver leadership talent that creates long-term
              impact and measurable value.
            </p>
          </article>
        </section>

        {/* Process */}
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Our Process: Precision with Purpose
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              At MD Global, we believe that hiring the right leader is a
              strategic partnership. That’s why our Executive Search process is
              thoughtfully designed to ensure every recommendation is precise,
              aligned, and impactful.
            </p>
            <ul className="ExecutiveSearchServicesList space-y-4 mt-4">
              {OurProcess.map((val, index) => (
                <li
                  key={index}
                  className="ExecutiveSearchServicesListItem bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <h3 className="ExecutiveSearchServicesSubheading font-semibold text-lg">
                    {index + 1}. {val.heading}
                  </h3>
                  <p className="ExecutiveSearchServicesParagraph mt-1 text-gray-700">
                    {val.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Why Choose Us */}
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Why Choose MD Global for Executive Search?
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              We’re not just about filling a role; we filter through countless
              CVs to identify individuals who truly align with your business
              needs, values, and long-term goals. At MD Global, we bring more
              than just recruitment services. We offer strategic insight,
              industry-specific expertise, and deep understanding of leadership
              impact. As a trusted HR consultancy, we value your time, goals,
              and business agenda. Our approach is consultative and
              client-focused, designed to align with your unique expectations
              and challenges.
            </p>
            <ul className="ExecutiveSearchServicesList space-y-4 mt-4">
              {ChooseExecutiveSearch.map((val, index) => (
                <li
                  key={index}
                  className="ExecutiveSearchServicesListItem bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <h3 className="ExecutiveSearchServicesSubheading font-semibold text-lg">
                    {index + 1}. {val.heading}
                  </h3>
                  <p className="ExecutiveSearchServicesParagraph mt-1 text-gray-700">
                    {val.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Roles */}
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Types of Roles We Cover
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              We specialize in hiring for executive and strategic roles across
              verticals:
            </p>
            <div className="roles-container">
              <ul className="roles-list left-list">
                {roles.slice(0, 5).map((role, index) => (
                  <li key={index} className="ExecutiveSearchServicesListItem">
                    {role}
                  </li>
                ))}
              </ul>
              <ul className="roles-list right-list">
                {roles.slice(5).map((role, index) => (
                  <li key={index} className="ExecutiveSearchServicesListItem">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        {/* Industries */}
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-center text-2xl md:text-3xl font-bold">
              Industries We Serve
            </h2>
            <p className="ExecutiveSearchServicesParagraph text-center">
              Our executive search services span a wide range of industries:
            </p>
            <div className="industries-section-grid">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="industries-section-card flex flex-col"
                >
                  <i className={`${industry.icon} industries-section-icon`}></i>
                  <h2 className="industries-section-card-title">
                    {industry.name}
                  </h2>
                </div>
              ))}
            </div>
          </article>

          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              A True Leadership Partner
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              At MD Global HR Consultantcy, we don't just fill leadership
              roles—we help shape the future...
            </p>
            <p className="ExecutiveSearchServicesParagraph">
              Whether you're a startup scaling operations, an enterprise
              undergoing transformation...
            </p>
            <article className="ExecutiveSearchServicesParagraph">
              Let us help you hire not just a leader—but a game changer. Contact
              MD Global HR Consultancy today and take the first step toward
              future-ready leadership.
            </article>
          </article>
        </section>
      </main>
    </>
  );
};

export default ExecutiveSearchServices;

import { motion } from "framer-motion";
import "./PermanentStaffingSolutions.css";
import img from "./../../../assets/images/About/Banner.jpg";
import img2 from "./../../../assets/Permanent Staffing/PermanentStaffing.jpeg";
import { FaUserTie, FaUsersCog, FaUserFriends } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import {
  FaSearch,
  FaDatabase,
  FaCheckDouble,
  FaCalendarCheck,
  FaFileSignature,
  FaHandshake,
} from "react-icons/fa";

import {
  FaLaptopCode,
  FaShoppingCart,
  FaUniversity,
  FaBoxOpen,
  FaHeartbeat,
  FaIndustry,
  FaPlane,
  FaBullhorn,
  FaGraduationCap,
  FaBuilding,
  FaBolt,
  FaGavel,
} from "react-icons/fa";

import {
  FaUsers,
  FaMapMarkedAlt,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaFileAlt,
  FaUserPlus,
  FaSyncAlt,
} from "react-icons/fa";

const PermanentStaffingSolutions = () => {
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

  const processSteps = [
    {
      icon: <FaUsers />,
      title: "Workforce Planning",
      desc: "We understand your entry-level hiring targets, skill sets required, and timelines.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Institutional Mapping",
      desc: "Based on your criteria, we shortlist colleges and courses aligned to your needs.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Pre-Placement Engagement",
      desc: "Virtual/in-person sessions, webinars, employer branding decks, and Q&A rounds to connect with students.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Assessment & Interviews",
      desc: "Design and execution of tests, coding challenges, case studies, and panel interviews.",
    },
    {
      icon: <FaFileAlt />,
      title: "Selection & Offer Rollout",
      desc: "Managing documentation, pre-offer counselling, and rolling out offer letters in coordination with college placement cells.",
    },
    {
      icon: <FaUserPlus />,
      title: "Onboarding & Induction",
      desc: "We help organise orientation programs, buddy systems, and onboarding kits for a smooth start.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Post-Hiring Follow-up",
      desc: "Regular feedback from hired students, colleges, and your HR team to ensure a high joining ratio and engagement.",
    },
  ];

  const industries = [
    { icon: <FaLaptopCode />, title: "Information Technology (IT) & Digital" },
    { icon: <FaShoppingCart />, title: "Retail & E-commerce" },
    {
      icon: <FaUniversity />,
      title: "BFSI (Banking, Financial Services, Insurance)",
    },
    { icon: <FaBoxOpen />, title: "FMCG & Consumer Durables" },
    { icon: <FaHeartbeat />, title: "Healthcare & Life Sciences" },
    { icon: <FaIndustry />, title: "Manufacturing & Engineering" },
    { icon: <FaPlane />, title: "Hospitality & Aviation" },
    { icon: <FaBullhorn />, title: "Telecom, Media & Advertising" },
    { icon: <FaGraduationCap />, title: "Education & EdTech" },
    { icon: <FaBuilding />, title: "Real Estate & Infrastructure" },
    { icon: <FaBolt />, title: "Energy & Utilities" },
    { icon: <FaGavel />, title: "Public Sector & Government Projects" },
  ];

  const steps = [
    {
      icon: <FaSearch />,
      title: "Talent Requirement Analysis",
      desc: "We understand your roles, business goals, team dynamics, and industry needs.",
    },
    {
      icon: <FaDatabase />,
      title: "Sourcing Strategy",
      desc: "From headhunting to database mining, campus outreach to digital sourcing—we leave no talent pool untapped.",
    },
    {
      icon: <FaCheckDouble />,
      title: "Screening & Shortlisting",
      desc: "Multi-level vetting based on technical skills, behavioural fit, and leadership potential.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Interview Coordination & Feedback",
      desc: "Seamless scheduling, communication, and coordination with hiring managers.",
    },
    {
      icon: <FaFileSignature />,
      title: "Offer Management & Onboarding",
      desc: "Transparent negotiations, documentation, and engagement until the candidate joins.",
    },
    {
      icon: <FaHandshake />,
      title: "Post-Placement Engagement",
      desc: "We stay involved to ensure successful integration and retention.",
    },
  ];

  const expertise = [
    {
      icon: <FaUserTie />,
      title: "Executive Search",
      desc: `Our Executive Search services are crafted for leadership roles that define direction and drive results. We discreetly recruit C-suite executives such as CEOs, CFOs, CHROs, COOs, and other board-level professionals. These strategic hires go beyond qualifications; we focus on leadership style, cultural compatibility, and long-term vision. Through global leadership networks, succession planning frameworks, and behaviour-based evaluations, we help you onboard top-tier talent that transforms your business from the top down.`,
    },
    {
      icon: <FaUsersCog />,
      title: "Senior & Middle Management Hiring",
      desc: `We specialise in hiring experienced professionals who manage operations, lead teams, and deliver on business objectives. Our Senior & Middle Management recruitment covers roles such as department heads, engineering leads, sales and marketing managers, regional heads, and more. These individuals are not only technically sound but are also equipped to manage change, improve productivity, and contribute to organisational growth.`,
    },
    {
      icon: <FaUserFriends />,
      title: "Leadership Hiring",
      desc: `Our Leadership Hiring division places transformational leaders across functions and industries. We recruit decision-makers for roles such as General Managers, Strategy Heads, Regional Directors, and Division Chiefs. These are professionals who drive change, inspire teams, and foster innovation. With deep industry knowledge and customised search strategies, we ensure alignment between your long-term goals and the vision of your incoming leadership.`,
    },
    {
      icon: <FaGraduationCap />,
      title: "Campus Placement",
      desc: `Future leaders are nurtured from day one, and our Campus Hiring Programs ensure you don’t miss the opportunity to attract them. We partner with top-tier engineering colleges, B-schools, and universities across India to help companies hire high-potential freshers. Our team manages everything from employer branding, assessment design, and pre-placement talks to onboarding. We help you build a strong early talent pipeline that’s ready to adapt, grow, and lead in the years to come.`,
    },
  ];

  const ConsultingDeliversPermanent = [
    {
      heading: "Understanding Your Needs",
      text: `We start by thoroughly understanding your business, including its goals, culture, and staffing needs. Our team works closely with you to define the skills, qualifications, and personality traits that are crucial for the positions you're looking to fill.`,
    },
    {
      heading: "Talent Search and Screening",
      text: `We have an extensive database of qualified candidates, and we also leverage industry networks and advanced recruitment tools to identify top talent. Once potential candidates are sourced, we conduct an in-depth screening process. This includes interviews, reference checks, and skill assessments to ensure that the candidate is not only a match for the job but also a cultural fit for your organization.`,
    },
    {
      heading: "Personalized Candidate Presentation",
      text: `After screening, we present you with a shortlist of highly qualified candidates who meet your specific requirements. Each candidate profile includes detailed insights into their professional background, experience, and how they align with the position.`,
    },
    {
      heading: "Interview and Selection",
      text: `We assist in coordinating the interview process and provide support throughout the decision-making phase. We help you assess each candidate’s potential and make informed decisions, offering advice on compensation, benefits, and market trends to ensure competitive offers.`,
    },
    {
      heading: "Onboarding Support",
      text: `Our role doesn’t end once a candidate is hired. We assist with the onboarding process, ensuring that your new team member integrates smoothly into your organization. This includes follow-up support to address any concerns or challenges that may arise in the initial stages of employment.`,
    },
  ];

  const ConsultingDifference = [
    {
      heading: "Industry Expertise",
      text: "We work across a wide range of industries, including IT, healthcare, manufacturing, finance, and more. This breadth of experience allows us to provide you with the best possible candidates who understand the unique challenges and opportunities in your sector.",
    },
    {
      heading: "Quality Over Quantity",
      text: "We believe in quality over quantity. Instead of bombarding you with resumes, we focus on providing a select group of top-tier candidates who are well-suited for your organization. This saves you time and ensures that you only meet with individuals who meet your exact specifications.",
    },
    {
      heading: "Long-Term Commitment",
      text: "We are committed to long-term success, both for your company and the candidates we place. We take pride in building strong, lasting relationships with both clients and job seekers, ensuring that everyone benefits from our services.",
    },
    {
      heading: "Comprehensive Market Knowledge",
      text: "We stay on top of the latest trends in the job market, allowing us to provide valuable insights on salary benchmarks, hiring practices, and the overall employment landscape. This helps you stay competitive in attracting and retaining top talent.",
    },
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
            className="text-3xl font-semibold tracking-tight relative z-10 mt-2 text-center px-4"
            variants={headerVariants}
          >
            Permanent Staffing Solutions
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full z-10"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="PermanentStaffingSolutionsMain px-4 py-10 max-w-7xl mx-auto space-y-16">
        <section className="space-y-6 text-center md:text-left">
          <h2 className="PermanentStaffingSolutionsHeading">
            Are you looking for Expert Permanent Staffing Solutions?
          </h2>
          <p className="ChoosePermanentPMP">
            Hiring the right people isn’t just about filling roles—it’s about
            building a future-ready organisation. At MD Global HR Consulting,
            our Permanent Staffing Solutions are designed to help businesses
            attract, engage, and retain professionals who make a lasting impact.
          </p>
          <p className="ChoosePermanentPMP">
            With 17+ years of experience and recognition as a Top 5 HR
            consultancy in India, we specialise in executive hiring, leadership
            recruitment, senior-level placements, and campus hiring across India
            and the GCC. Whether you're scaling up a team, planning for
            succession, or hiring fresh talent, we provide end-to-end
            recruitment services tailored to your vision.
          </p>
        </section>

        {/* Our Permanent Hiring Expertise */}

        <section className="hiring-section">
          <div className="hiring-container">
            <h3 className="hiring-heading">
              Our Permanent Hiring Expertise: Thoughtful. Thorough. Targeted.
            </h3>

            <div className="hiring-grid">
              {expertise.map((item, index) => (
                <div className="hiring-card" key={index}>
                  <div className="hiring-icon">{item.icon}</div>
                  <div className="hiring-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our End to End Process */}

        <section className="process-section">
          <div className="process-container">
            <h3 className="process-heading">Our End-to-End Process</h3>
            <div className="process-grid">
              {steps.map((step, index) => (
                <div className="process-card" key={index}>
                  <div className="process-icon">{step.icon}</div>
                  <div className="process-text">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}

        <section className="industries-section">
          <div className="industries-container">
            <h3 className="industries-heading">Industries We Serve</h3>
            <p className="industries-subtext">
              We provide permanent recruitment for roles across:
            </p>
            <div className="industries-grid">
              {industries.map((industry, index) => (
                <div className="industry-card" key={index}>
                  <div className="industry-icon">{industry.icon}</div>
                  <p className="industry-title">{industry.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}

        <section className="campus-process-section">
          <div className="campus-process-container">
            <h3 className="campus-process-heading">Our Process</h3>
            <div className="campus-process-grid">
              {processSteps.map((step, index) => (
                <div className="campus-process-card" key={index}>
                  <div className="campus-process-icon">{step.icon}</div>
                  <div className="campus-process-text">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto space-y-6 px-4">
          <h2 className="PermanentStaffingSolutionsHeading text-center text-2xl">
            How MD Global HR Consulting Delivers Permanent Staffing Solutions
          </h2>
          <p className="ChoosePermanentPMP">
            Our process for permanent staffing is meticulously designed to meet
            the specific needs of our clients. We combine our years of
            experience with a deep understanding of industry trends to create a
            customized hiring process that ensures you get the right fit for
            your company. Here’s a breakdown of how we approach permanent
            staffing:
          </p>
          <ul className="text-gray-700">
            {ConsultingDeliversPermanent.map((val, index) => (
              <li key={index} className="DeliversPermanentMP">
                <strong>
                  {index + 1}. {val.heading}:
                </strong>
                <p>{val.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-7xl mx-auto space-y-6 px-4">
          <h2 className="PermanentStaffingSolutionsHeading text-center text-3xl font-medium">
            The MD Global HR Consulting Difference
          </h2>
          <p className="ChoosePermanentPMP">
            When it comes to permanent staffing, MD Global HR Consulting stands
            out for several reasons:
          </p>
          <ul className="text-gray-700">
            {ConsultingDifference.map((val, index) => (
              <li key={index} className="DeliversPermanentMP">
                <strong>
                  {index + 1}. {val.heading}:
                </strong>
                <p>{val.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default PermanentStaffingSolutions;

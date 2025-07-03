import { motion } from "framer-motion";
import React, { useState } from "react";
import "./ContractualStaffingServices.css";
import img from "./../../../assets/images/About/Banner.jpg";
import { FiClock, FiUserCheck, FiShield, FiBarChart2 } from "react-icons/fi";
import {
  FaUserTie,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";

const ContractualStaffingServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };
  const points = [
    {
      icon: <FaUserTie />,
      title: "20,000+ Candidates",
      desc: "Placed across permanent and contract roles.",
    },
    {
      icon: <FaUsers />,
      title: "250+ Happy Clients",
      desc: "From across India and the GCC.",
    },
    {
      icon: <FaChartLine />,
      title: "20%+ Productivity Boost",
      desc: "Achieved through optimized workforce planning.",
    },
    {
      icon: <FaHandshake />,
      title: "30% HR Cost Reduction",
      desc: "Improved engagement and reduced attrition.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Brand Partnerships",
      desc: "Trusted by GE, PepsiCo, Pfizer, Philips, and more.",
    },
  ];
  const benefits = [
    {
      icon: <FiClock />,
      title: "Faster Time-to-Hire",
      desc: "Tap into our pre-vetted talent pool and reduce hiring time by up to 60%.",
      colorClass: "blue",
    },
    {
      icon: <FiUserCheck />,
      title: "Lower HR Overheads",
      desc: "Eliminate onboarding, benefits, and offboarding costs through our HR outsourcing for startups and enterprises.",
      colorClass: "green",
    },
    {
      icon: <FiShield />,
      title: "Compliance & Documentation",
      desc: "We manage end-to-end compliance, including labour laws, payroll tax, EPF, ESI, and insurance coverage.",
      colorClass: "purple",
    },
    {
      icon: <FiBarChart2 />,
      title: "Real-Time MIS & Support",
      desc: "Transparent reporting, attendance tracking, and performance reviews, backed by data analysis and SLA-driven delivery.",
      colorClass: "orange",
    },
  ];

  const ChooseContractStaffing = [
    {
      heading: "C2C (Corp-to-Corp)",
      text: "We deploy trained professionals on MD Global's payroll for short- to mid-term roles at your company, ideal for urgent project needs.",
    },
    {
      heading: "C2H (Contract-to-Hire)",
      text: "Offers flexibility to evaluate talent during the contract period before making full-time hiring decisions, minimising hiring risk.",
    },
  ];

  const industries = [
    {
      title: "IT and Technology",
      desc: "The tech industry, with its constant innovation, thrives on contractual staffing. IT companies frequently hire contractors for short-term projects like software development or cyber security.",
    },
    {
      title: "Healthcare",
      desc: "The healthcare industry often hires contract nurses, technicians, and administrative staff to deal with workforce shortages, especially during busy periods like flu season.",
    },
    {
      title: "Manufacturing",
      desc: "Manufacturing companies frequently rely on contract workers during peak production times, such as around the holidays or during major product launches.",
    },
    {
      title: "Creative Industries",
      desc: "From graphic designers to content writers, the creative industries heavily rely on freelancers and contract employees to meet project-based demands.",
    },
  ];

  const FutureofContractStaffing = [
    {
      heading: "Global Trends in Staffing",
      text: "The global workforce is shifting towards more flexible employment arrangements. As businesses adapt to changing economic conditions, the demand for contractual staffing is only set to grow.",
    },
    {
      heading: "The Role of Technology in Contractual Staffing",
      text: "Technology is making it easier for businesses to manage contractual workers. With tools for project management, remote collaboration, and performance tracking, companies can seamlessly integrate contractors into their operations.",
    },
    {
      heading: "Evolving Workplace Culture and Flexible Work",
      text: `As the concept of work evolves, so does the attitude toward employment. Flexible work arrangements, including contractual staffing, are becoming the norm, offering benefits for both companies and employees.

Conclusion:

Contractual staffing is more than just a trend—it’s a strategic approach to workforce management. By leveraging our contractual staffing services, businesses can maintain operational efficiency, reduce costs, and adapt to market changes swiftly. Whether you're looking to hire for a short-term project or need seasonal staff, our services offer the perfect solution.`,
    },
  ];

  const FAQS = [
    {
      heading: "What is difference between permanent and contractual staffing?",
      text: "Permanent staffing involves long-term employment, while contractual staffing is for a specific period or project.",
    },
    {
      heading:
        "How can a company ensure the legal aspects of contractual staffing are met?",
      text: "By adhering to labor laws, drafting clear contracts, and consulting with legal professionals, companies can ensure compliance.",
    },
    {
      heading: "What are the best practices for managing contractual workers?",
      text: "Clear communication, setting expectations, regular performance monitoring, and creating a positive work environment are key.",
    },
    {
      heading: "Which industries use contractual staffing the most?",
      text: "Industries such as IT, healthcare, manufacturing, and creative services heavily rely on contractual staffing.",
    },
    {
      heading: "How is technology shaping the future of contractual staffing?",
      text: "Technology is making it easier to manage contractual staff through tools like project management software and remote work platforms.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <header>
        <motion.section
          className="CS_Section relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
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
          <div className="CS_Overlay absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="CS_Heading text-3xl text-center font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Contractual Staffing Services
          </motion.h1>
          <motion.div
            className="CS_Divider w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="CS_Main px-4 py-12 w-full mx-auto space-y-16">
        <section className="CS_IntroSection space-y-6 w-full text-gray-700">
          <h1 className="CS_SectionTitle text-2xl py-8 font-semibold text-gray-800 text-center">
            Contract Staffing Services: The Smart Solution for Flexible
            Workforce Needs
          </h1>
          <article className="CS_IntroArticle space-y-4 text-justify">
            <p className="cs-discription">
              In an economy that demands flexibility and speed, contractual
              staffing has emerged as a critical workforce strategy for modern
              businesses. At MD Global HR Consulting, a recognised Top 5 HR
              consultancy in India, we offer agile, scalable, and compliant
              contractual staffing solutions that help companies fill temporary
              roles, scale project teams, and reduce long-term hiring risks..
            </p>
            <p className="cs-discription">
              With over 17+ years in business, MD Global has become a trusted
              staffing firm for startups, SMEs, and multinational companies
              across India and the GCC. Our service models,
              <strong> C2C (Corp-to-Corp) and C2H (Contract-to-Hire)</strong>,
              are ideal for companies looking to build efficient, short-term
              teams without compromising on quality or compliance.
            </p>
          </article>

          <article className="CS_WhyChooseArticle mt-10">
            <h3 className="CS_SectionHeading text-2xl text-center font-semibold mb-4">
              Why To Choose Contract Staffing Services?
            </h3>
            <div className="CS_Section-Sub-Discription text-justify">
              Our approach is built on flexibility, industry expertise, and
              measurable outcomes. Whether you're looking to fill positions in
              IT, non-IT, manufacturing, e-commerce, or digital, we offer
              reliable staffing solutions to keep your operations running
              smoothly.
            </div>
            <div className="CS_SectionDicription">
              We serve a wide array of sectors with tailored support for each:
            </div>
            <ul className="CS_WhyChooseList space-y-4">
              {ChooseContractStaffing.map((val, index) => (
                <li
                  key={index}
                  className="CS_WhyChooseItem bg-gray-50 p-10 rounded-md shadow-sm"
                >
                  <p>
                    <strong>
                      {index + 1}. {val.heading}:
                    </strong>{" "}
                    {val.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Our Contract Staffing Services */}

        <section className="CS_ServicesSection w-full flex justify-center px-4 py-8">
          <div className="w-full max-w-7xl">
            <h3 className="CS_SectionHeading text-2xl md:text-3xl text-black text-center font-semibold mb-6">
              Our Contract Staffing Services
            </h3>

            <div className="CS_ServicesContainer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Section */}
              <div className="CS_ServicesText text-gray-700 space-y-4">
                <p className="CS_ServicesParagraph">
                  We specialize in offering contractual staffing services that
                  meet the unique requirements of your business. Our team of
                  experienced recruiters understands the complexities of
                  different industries and can provide you with qualified
                  professionals who match your project’s needs.
                </p>
                <p className="CS_ServicesParagraph">
                  Whether you need short-term assistance or longer project-based
                  engagements, we’ve got you covered.
                </p>
                <p className="CS_ServicesParagraph">
                  By partnering with us, you can enjoy the benefits of:
                </p>
                <ul className="CS_ServicesParagraph list-disc list-inside">
                  <li>Access to a diverse talent pool</li>
                  <li>
                    Quick staffing solutions to meet urgent project deadlines
                  </li>
                  <li>
                    Cost-effective hiring without the long-term commitments
                  </li>
                </ul>
                <p className="CS_ServicesParagraph">
                  We are dedicated to helping your business thrive by providing
                  the right talent, at the right time, and on the right terms.
                  Our solutions ensure you stay focused on your core business
                  operations while we handle the staffing needs.
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full">
                <img
                  src="https://mdglobalhr.com/wp-content/uploads/2024/10/2147650887-1.jpg"
                  alt="Contract Staffing"
                  className="CS_ServicesImage w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

              {/* Key Benefits of Our Contractual Staffing */}

        <section className="benefits-section">
          <div className="benefits-container">
            <h3 className="benefits-heading">
              Key Benefits of Our Contractual Staffing
            </h3>
            <div className="benefits-grid">
              {benefits.map((item, index) => (
                <div className="benefit-card" key={index}>
                  <div className={`benefit-icon ${item.colorClass}`}>
                    {item.icon}
                  </div>
                  <div className="benefit-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Key Benifits of contractual staffing */}

        <section className="roi-section">
          <div className="roi-container">
            <h3 className="roi-heading">
              Proven ROI: Why Clients Trust MD Global
            </h3>

            <div className="roi-grid">
              {points.map((item, index) => (
                <div className="roi-card" key={index}>
                  <div className="roi-icon">{item.icon}</div>
                  <div className="roi-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="roi-footer-text">
              As a results-driven staffing agency, MD Global is committed to
              delivering outcomes, not just resumes.
            </p>
          </div>
        </section>




        {/* FAQ's on Contract Staffing Services */}

        <section className="CS_FAQSection w-full">
          <h2 className="CS_SectionHeading text-center text-1xl font-medium text-gray-600">
            FAQ's on Contract Staffing Services
          </h2>
          <div className="CS_FAQContainer px-4 md:px-8 lg:px-16 py-10 text-gray-800">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`CS_FAQItem border rounded-xl p-4 mb-4 cursor-pointer bg-white shadow-sm ${
                  openIndex === index ? "border-black" : "border-gray-300"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="CS_FAQQuestion flex justify-between items-center text-gray-800 font-medium">
                  <span>{`Q ${index + 1}. ${faq.heading}`}</span>
                  <span className="text-lg ">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="CS_FAQAnswer mt-3 text-gray-700">
                    {faq.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ContractualStaffingServices;

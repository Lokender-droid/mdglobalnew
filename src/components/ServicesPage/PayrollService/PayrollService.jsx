import React from "react";
import "./PayrollService.css";
import { motion } from "framer-motion";
import img from "./../../../assets/images/About/Banner.jpg";
import {
  FaMoneyCheckAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaBalanceScale,
  FaMoneyBillWave,
  FaCogs,
  FaLayerGroup,
  FaIndustry,
  FaChartLine,
  FaClock,
  FaSmile,
  FaPlug,
  FaFileAlt,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, when: "beforeChildren" },
  },
};

const keywords = [
  "Payroll services in India",
  "HR outsourcing companies",
  "HR placement agency",
  "Recruitment agency in India",
  "Human capital management services",
  "Staff recruitment agency",
  "HR consultancy firms",
  "Payroll management system",
  "Corporate staffing services",
  "Employee onboarding solutions",
  "Global HR consultancy",
  "Payroll processing for IT companies",
  "Best payroll providers for SMEs",
  "Temp staffing & payroll compliance",
];

const highlights = [
  {
    icon: <FaClock />,
    title: "30%+ Time Saved",
    desc: "HR teams save more than 30% of their time on manual payroll tasks.",
  },
  {
    icon: <FaFileAlt />,
    title: "Zero Penalties",
    desc: "Fewer errors and zero penalties on compliance filings.",
  },
  {
    icon: <FaSmile />,
    title: "Employee Satisfaction",
    desc: "Improved employee satisfaction with timely payouts and clear documentation.",
  },
  {
    icon: <FaPlug />,
    title: "System Integration",
    desc: "Seamless integration with HRMS, recruitment, and performance tools.",
  },
];

const headerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const industries = [
  "Information Technology (IT) & Tech Services",
  "BFSI (Banking, Financial Services & Insurance)",
  "FMCG & Consumer Goods",
  "Retail & E-commerce",
  "Healthcare & Pharmaceuticals",
  "Education & EdTech",
  "Manufacturing & Engineering",
  "Telecom, Logistics, Aviation, and more",
];

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Accuracy & Confidentiality",
    desc: "We ensure error-free salary disbursal and secure data management.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Compliance-First Approach",
    desc: "Stay 100% compliant with ever-changing tax laws and labour regulations.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Cost-Effective Solutions",
    desc: "Reduce your HR cost by up to 40% with streamlined processing.",
  },
  {
    icon: <FaCogs />,
    title: "Technology-Driven",
    desc: "Integrated systems for payroll, employee onboarding, and attendance.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable Services",
    desc: "Ideal for businesses from 10 to 10,000+ employees across IT, Non-IT, retail, FMCG, healthcare, e-commerce, BFSI, and manufacturing.",
  },
];
const offerings = [
  {
    title: "Salary Computation & Disbursement",
    desc: "End-to-end processing of employee salaries, bonuses, and deductions.",
  },
  {
    title: "Statutory Compliance Management",
    desc: "PF, ESI, PT, TDS, and labour law compliance as per government norms.",
  },
  {
    title: "Employee Self-Service Portals",
    desc: "Digital access for payslips, tax declarations, investment proofs, and leave records.",
  },
  {
    title: "Reimbursements & Incentive Tracking",
    desc: "Automated calculations for reimbursements, incentives, and expense claims.",
  },
  {
    title: "Full & Final Settlements",
    desc: "Seamless processing of exit formalities and legal dues.",
  },
  {
    title: "Payroll Reports & MIS",
    desc: "Monthly, quarterly, and annual reports for management and audit purposes.",
  },
];

const PayrollService = () => {
  return (
    <>
      {/* Banner Section */}
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
            Payroll Services
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full z-10"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      {/* Payroll Content Section */}
      <main className="payroll_service-main px-4 w-full mx-auto py-12">
        <section className="payroll_service-wrapper max-w-7xl mx-auto   items-center">
          {/* Left Side - Icon and Title */}
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Why Choose Our Payroll Services
              </h2>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-5 text-gray-700 text-base leading-relaxed">
            <p className="PayrollService-Discription text-justify">
              Managing payroll is more than just calculating salaries—it’s about{" "}
              <strong>accuracy, compliance, and trust</strong>. At
              <strong> MD Global HR Consulting</strong>, we offer comprehensive
              payroll services that allow organisations to focus on growth while
              we take care of their people operations.
            </p>

            <p className="PayrollService-Discription text-justify py-5">
              As a trusted HR outsourcing partner with{" "}
              <strong>17+ years of expertise</strong>, we streamline your
              payroll cycle from start to finish, ensuring your employees are
              paid correctly and on time, every time.
            </p>

            <p className=" className='PayrollService-Discription text-justify py-5 text-gray-900 font-semibold">
              Whether you're a startup, SME, or a large enterprise, our payroll
              management services are tailored to suit your business size,
              industry, and complexity.
            </p>
          </div>
        </section>

        {/* What we offer in payroll service */}
        <section className="payroll_services_offer-section">
          <div className="payroll_services_offer-container">
            <h2 className="payroll_services_offer-heading">
              What We Offer in Our Payroll Services
            </h2>
            <div className="payroll_services_offer-divider"></div>
            <p className="payroll_services_offer-subtext">
              Our payroll solutions are designed to reduce administrative
              overhead and eliminate compliance risks. Here's what’s included:
            </p>

            <div className="payroll_services_offer-grid">
              {offerings.map((item, index) => (
                <div key={index} className="payroll_services_offer-card">
                  <FaCheckCircle className="payroll_services_offer-icon" />
                  <div>
                    <h4 className="payroll_services_offer-title">
                      {item.title}
                    </h4>
                    <p className="payroll_services_offer-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="payroll_services_offer-highlight">
              We also offer custom payroll dashboards integrated with HRMS tools
              for real-time visibility and control.
            </p>
          </div>
        </section>

        {/* why choose md global for payroll outsourcing */}

        <section className="why_choose_payroll-section">
          <div className="why_choose_payroll-container">
            <h2 className="why_choose_payroll-heading">
              Why Choose MD Global for Payroll Outsourcing?
            </h2>
            <p className="why_choose_payroll-subtext">
              As a leading staffing agency and HR consultancy, we understand
              that payroll is a core part of the employee experience. Our
              payroll outsourcing services are trusted by India’s top
              recruitment firms, corporate staffing services, and global HR
              consultancy firms.
            </p>

            <div className="why_choose_payroll-grid">
              {features.map((item, index) => (
                <div key={index} className="why_choose_payroll-card">
                  <div className="why_choose_payroll-icon">{item.icon}</div>
                  <div>
                    <h4 className="why_choose_payroll-title">{item.title}</h4>
                    <p className="why_choose_payroll-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries we support  */}

        <section className="industries_support-section">
          <div className="industries_support-container">
            <div className="industries_support-header">
              <h2 className="industries_support-title">
                Industries We Support
              </h2>
              <div className="industries_support-divider"></div>
              <p className="industries_support-description">
                We serve clients across a wide range of sectors:
              </p>
            </div>

            <div className="industries_support-grid">
              {industries.map((industry, index) => (
                <div key={index} className="industries_support-tag">
                  {industry}
                </div>
              ))}
            </div>

            <p className="industries_support-footer">
              Whether you're expanding your team, running short-term projects,
              or outsourcing non-core functions,{" "}
              <strong>MD Global’s payroll experts</strong> ensure you stay
              compliant and efficient.
            </p>
          </div>
        </section>

        {/* Measurable Business Value */}

        <section className="business_value_section">
          <div className="business_value_container">
            <div className="business_value_header">
              <h2 className="business_value_title">
                Measurable Business Value
              </h2>
              <div className="business_value_divider"></div>
              <p className="business_value_intro">
                Clients who have partnered with MD Global for payroll have
                reported:
              </p>
            </div>

            <div className="business_value_grid">
              {highlights.map((item, index) => (
                <div key={index} className="business_value_card">
                  <div className="business_value_card_icon">{item.icon}</div>
                  <h4 className="business_value_card_title">{item.title}</h4>
                  <p className="business_value_card_desc">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="business_value_footer">
              We believe in creating end-to-end human capital management
              solutions that support not just business operations but your
              entire workforce experience.
            </p>
          </div>
        </section>

        {/* Keywords */}

        <section className="seo_keywords_section">
          <div className="seo_keywords_container">
            <div className="seo_keywords_header">
              <h2 className="seo_keywords_title">
                Related SEO Keywords Included
              </h2>
              <div className="seo_keywords_divider"></div>
            </div>

            <div className="seo_keywords_grid">
              {keywords.map((keyword, index) => (
                <span key={index} className="seo_keywords_tag">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="simplify_payroll_section">
          <div className="simplify_payroll_container">
            <h2 className="simplify_payroll_heading">
              Let’s Simplify Your Payroll Process
            </h2>
            <p className="simplify_payroll_text">
              Tired of complex spreadsheets, missed deadlines, or compliance
              headaches? Leave it to us. With MD Global’s Payroll Services, you
              gain a reliable partner who values accuracy, efficiency, and
              compliance as much as you do.
            </p>
            <p className="simplify_payroll_cta">
              👉 Contact <strong>MD Global HR Consulting</strong> today for a
              customised payroll outsourcing plan that fits your business goals.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default PayrollService;

import React from "react";
import { motion } from "framer-motion";
import "./DigitalMarketingServices.css";
import img from "./../../../assets/images/About/Banner.jpg";
import {
  FaGlobeAsia,
  FaSearch,
  FaFacebookF,
  FaBullhorn,
  FaPenNib,
  FaGlobe,
  FaEnvelopeOpenText,
  FaVideo,
} from "react-icons/fa";

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

const partners = [
  "Recruitment & Staffing Agencies",
  "Information Technology (IT) & SaaS",
  "Retail & E-commerce",
  "Healthcare & Wellness",
  "Real Estate & Construction",
  "Education & EdTech",
  "BFSI & FinTech",
];

const services = [
  {
    icon: <FaSearch />,
    title: "Search Engine Optimisation (SEO)",
    desc: `Be found where it matters on Google. Our SEO services cover technical SEO, on-page optimisation, keyword research, content optimisation, and link building to help your website rank for the right queries. Whether you’re in IT, e-commerce, recruitment, education, or healthcare, we help boost your visibility and traffic organically.`,
    keywords:
      "SEO services in India, top SEO company, keyword ranking agency, digital marketing for HR companies",
  },
  {
    icon: <FaFacebookF />,
    title: "Social Media Marketing (SMM)",
    desc: `Today’s consumers check social platforms before they check websites. We help you build your community and drive brand engagement on platforms like Instagram, Facebook, LinkedIn, Twitter, and YouTube through targeted content, creatives, reels, carousels, and interactive posts.`,
    keywords:
      "social media marketing agency, Instagram growth service, LinkedIn branding for companies, content strategy",
  },
  {
    icon: <FaBullhorn />,
    title: "Performance Marketing (Paid Ads)",
    desc: `Turn your ad spend into measurable ROI. Our paid marketing team runs high-converting campaigns across Google Ads, Meta Ads, LinkedIn Ads, and YouTube Ads. We focus on lead generation, e-commerce sales, and retargeting campaigns that drive results.`,
    keywords:
      "PPC management services, Google Ads company in India, lead generation agency, top performance marketing firm",
  },
  {
    icon: <FaPenNib />,
    title: "Content Marketing & Branding",
    desc: `Content that informs, inspires, and converts. From website content, landing pages, SEO blogs, and thought-leadership articles to email campaigns and brochures, we craft messages that build trust and position your brand as an industry leader.`,
    keywords:
      "content marketing services, content writing company, B2B content agency, blog writing service in India",
  },
  {
    icon: <FaGlobe />,
    title: "Website Development & UX Design",
    desc: `Your website is your digital storefront. We make sure it’s optimised for speed, mobile responsiveness, and conversions. Whether you need a corporate site, a recruitment portal, or landing pages for campaigns, we handle everything from design to deployment.`,
    keywords:
      "website development company, UX design for businesses, responsive websites, digital agency in India",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Email Marketing & Marketing Automation",
    desc: `Nurture leads, onboard clients, and re-engage users with personalised and automated email journeys. Our email services include design, copy, A/B testing, and analytics—fully integrated with your CRM.`,
    keywords:
      "email marketing for HR firms, Mailchimp automation services, CRM integration agency, customer retention campaigns",
  },
  {
    icon: <FaVideo />,
    title: "Influencer & Video Marketing",
    desc: `From short-form Reels and YouTube campaigns to influencer collaborations, we help you tap into audiences who trust creators. Great for e-commerce, lifestyle, education, and FMCG brands looking to increase visibility and virality.`,
    keywords:
      "influencer marketing India, video marketing agency, YouTube promotions, Instagram collaborations",
  },
];

const DigitalMarketingServices = () => {
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
            Digital Marketing Services
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full z-10"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      {/* Main Body */}

      <main className="DM_service-main w-full px-4 py-12">
        <div className="DM_page-container max-w-7xl mx-auto space-y-12">
          <section className="DM_service-wrapper items-center space-y-6">
            {/* <div className="flex flex-col items-start justify-center space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Why Choose Our Digital Marketing Services
                </h2>
              </div>
            </div> */}

            <div className="space-y-5 text-gray-700 text-base leading-relaxed">
              <p className="DM_service-description text-justify">
                In an era where millions scroll in mere minutes, your brand has
                only seconds to stand out. Whether you're a growing startup, a
                large enterprise, or a recruitment agency, your online presence
                is crucial to reach, engage, and convert your audience. That’s
                where
                <strong> Sunglow</strong> steps in as your trusted digital
                marketing agency and the official digital arm of{" "}
                <strong>MD Global HR Consulting</strong>.
              </p>

              <p className="DM_service-description text-justify py-5">
                At <strong>Sunglow</strong>, we blend strategy, creativity, and
                data to elevate your brand across digital platforms. As a
                full-service digital marketing company, we go beyond likes and
                shares; we focus on visibility, engagement, and real business
                growth. From search engine optimisation to social media, paid
                ads to content creation, our services are tailored to suit every
                industry, every goal, and every budget.
              </p>
            </div>
          </section>

          {/* Who we are */}

          <section className="DM_about-section">
            <div className="DM_about-container">
              <div className="DM_about-content">
                <h2 className="DM_about-title">Who We Are</h2>
                <div className="DM_about-divider"></div>
                <p className="DM_about-description">
                  <strong>Sunglow</strong> is more than just a marketing agency;
                  we’re a performance partner. As part of{" "}
                  <strong>MD Global</strong>, a company with over{" "}
                  <strong>17+ years</strong> in HR, recruitment, and
                  outsourcing, Sunglow brings a unique edge to digital
                  transformation for businesses across India, the GCC, and
                  Canada.
                </p>
                <p className="DM_about-description">
                  Our team of SEO experts, ad strategists, designers, content
                  creators, and automation specialists work together to position
                  your brand exactly where your customers are — online and ready
                  to engage.
                </p>
              </div>
            </div>
          </section>

          {/*Our Core Digital Marketing Services */}

          <section className="core_services-section">
            <div className="core_services-container">
              <h2 className="core_services-title">
                Our Core Digital Marketing Services
              </h2>
              <p className="core_services-subtext">
                We offer a comprehensive suite of services designed to
                strengthen your digital footprint and bring in high-quality
                leads:
              </p>
              <div className="core_services-grid">
                {services.map((service, index) => (
                  <div key={index} className="core_services-card">
                    <div className="core_services-icon">{service.icon}</div>
                    <h4 className="core_services-card-title">
                      {service.title}
                    </h4>
                    <p className="core_services-desc">{service.desc}</p>
                    <p className="core_services-keywords">
                      🔍 <span>{service.keywords}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* who we work with */}

          <section className="work_with-section">
            <div className="work_with-container">
              <h2 className="work_with-title">Who We Work With</h2>
              <p className="work_with-description">
                Sunglow serves clients from across sectors:
              </p>
              <div className="work_with-grid">
                {partners.map((partner, index) => (
                  <div key={index} className="work_with-item">
                    {partner}
                  </div>
                ))}
              </div>
              <p className="work_with-footer">
                As part of <strong>MD Global</strong>, we also specialise in
                digital marketing for HR services, helping recruitment agencies,
                placement firms, and staffing companies build digital trust and
                attract talent through employer branding.
              </p>
            </div>
          </section>

                {/* Build your brand */}

                <section className="build_brand-section">
      <div className="build_brand-container">
        <h2 className="build_brand-title">Let’s Build Your Digital Brand</h2>

        <p className="build_brand-description">
          Whether you're launching a startup or scaling an enterprise,{" "}
          <strong>Sunglow by MD Global</strong> is here to drive your digital
          success. We combine marketing strategy, execution, and analytics to
          help your brand thrive in today’s hyper-competitive space.
        </p>

        <p className="build_brand-cta">
          👉 Contact us today for a free digital consultation or website audit.
        </p>
      </div>
    </section>

        </div>
      </main>
    </>
  );
};

export default DigitalMarketingServices;

import React, { useState } from "react";
import "./OurUniqueness.css";

const fallbackSVG = (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
      fill="#1571fa"
    />
  </svg>
);

const OurUniqueness = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const uniqueness = [
  {
    heading: "20,000+ Candidates Successfully Placed",
    description:
      "From fresh graduates to CXOs, our expert teams have delivered top talent across permanent, temporary, and contractual roles in India and the GCC, tailored to client needs across industries.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#bd8706">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
  },
  {
    heading: "Part of a 200+ Crore Group of Companies",
    description:
      "Backed by strong financials and global reach, we provide scalable, future-ready HR and talent solutions to clients ranging from startups to Fortune 500 companies.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#bd8706">
        <path d="M4 22h16V10H4v12zm2-10h12v8H6v-8zM20 4h-3.17l-1.41-1.41C15.21 2.21 14.7 2 14.17 2H9.83c-.53 0-1.04.21-1.42.59L7 4H4c-1.1 0-2 .9-2 2v2h20V6c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
  },
  {
    heading: "15,000+ Skilled Professionals Actively Deployed",
    description:
      "Across sectors like IT, BFSI, Manufacturing, Healthcare, Retail, and E-commerce, our deployed workforce delivers real-time value and operational excellence on the ground.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#bd8706">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C16.36 14.15 18 15.23 18 16.5V20h4v-3.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    heading: "700,000+ Resumes in Our AI-Powered Database",
    description:
      "Our robust talent pool, powered by intelligent search algorithms, allows us to identify the right candidates quickly, accurately, and at scale, reducing your hiring time significantly.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#bd8706">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.54 3.02 8.41 7.24 9.66l.76.25.76-.25C18.98 20.41 22 16.54 22 12c0-5.52-4.48-10-10-10zm-1 15h2v2h-2v-2zm1-13c3.86 0 7 3.14 7 7 0 2.96-1.91 5.46-4.58 6.44l-.42.14v-1.07c1.72-.72 3-2.44 3-4.51 0-2.76-2.24-5-5-5S7 9.24 7 12c0 2.07 1.28 3.79 3 4.51v1.07l-.42-.14C7.91 17.46 6 14.96 6 12c0-3.86 3.14-7 7-7z"/>
      </svg>
    ),
  },
  {
    heading: "Measurable ROI & Business Impact",
    description:
      "We’ve helped clients boost workforce productivity by 20%+ by aligning the right talent with business goals, streamlining hiring cycles, and reducing time-to-fill and onboarding bottlenecks.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#bd8706">
        <path d="M3 17h2v-4h2v4h2v-6h2v6h2v-8h2v8h2V9h2v8h2V7h2v12H3z"/>
      </svg>
    ),
  },
  {
    heading: "Certified & Trustworthy",
    description:
      "We are ISO 9001:2015 certified and committed to honest, transparent, and ethical hiring. We follow all labour laws in India and the UAE to ensure safe and legal recruitment.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#bd8706">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 15l-4-4h2.5V8h3v4H16l-4 4z"/>
      </svg>
    ),
  },
];


  return (
    <section className="md-global-uniqueness">
      <div className="glass-card-container">
        <div className="main-containerchoose">
          <h1 className="main-title">Why Choose Us?</h1>
          <p className="discription-whychoose text-center py-10 m-5">
            With 17+ years in business, MD Global has emerged as a Top 5 HR consultancy in India & GCC, trusted by leading companies across industries. We offer result-driven recruitment, staffing, and HR solutions that fuel business growth and operational excellence.
          </p>
          <div className="card-grid">
            {uniqueness.map((item, index) => (
              <div
                key={index}
                className="feature-card"
                onClick={() =>
                  setExpandedCard(expandedCard === index ? null : index)
                }
              >
                <div className="icon-container">{item.svg || fallbackSVG}</div>
                <h2 className="feature-title">{item.heading}</h2>
                <p className="feature-text">
                  {expandedCard === index ? item.details : item.description}
                </p>
                {expandedCard === index && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(null);
                    }}
                    className="dismiss-btn"
                  >
                    Close
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurUniqueness;

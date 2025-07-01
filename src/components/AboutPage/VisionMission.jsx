import React from "react";
import "./VisionMission.css";
// import meetingImage from "./../../assets/meetingRoom.jpg";
import meetingImage5 from "./../../assets/meetingRoom5.jpg";
import meetingImage4 from "./../../assets/meetingRoom4.jpg";
import meetingImage3 from "./../../assets/meetingRoom2.jpg";
import meetingImage2 from "./../../assets/ourMission.jpeg";

const VisionMission = () => {
  return (
    <>
      <section id="vision-section">
        <div className="vision-container">
          <div className="vision-image-wrapper">
            <img
              src={meetingImage5}
              alt="Team Meeting"
              className="vision-image"
            />
          </div>
          <div className="vision-content">
            <h4 className="vision-subtitle">Our Vision</h4>
            <h2 className="vision-title">
              To connect great people with great opportunities across borders, industries, and dreams.
            </h2>
            <p className="vision-text">
              We see a world where finding the right job or the right talent is no longer a struggle—it’s a smooth, empowering experience. Whether it’s a young graduate stepping into their first role or a global brand searching for their next C-suite leader, we want MD Global to be the bridge that brings them together. Our vision is to shape the future of work by helping people discover careers they love and helping businesses grow with people who truly belong. We aim to make hiring more human, more meaningful, and more impactful.
            </p>
            {/* <p className="vision-text">
              Whether you're scaling a startup or strengthening a large
              enterprise, we bring speed, transparency, and quality. Our
              convergent model blends consulting expertise with agile execution,
              ensuring you get leadership that performs and talent that lasts.
              We’re proud to serve clients across IT, healthcare, finance,
              retail, logistics, and more.
            </p> */}
            {/* <p className="vision-text">
              MD Global is driven by transparency, compliance, and a focus on
              long-term client success, offering flexible, responsive staffing
              solutions tailored to each organization’s needs.
            </p> */}
          </div>
        </div>
      </section>

      <section id="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h4 className="mission-subtitle">Our Mission</h4>
            <h2 className="mission-title">To make hiring simpler, smarter, and more personal.</h2>
            <p className="mission-text">
              At MD Global, we’re on a mission to take the stress and guesswork out of recruitment. We blend technology with a personal touch to offer flexible, reliable, and scalable HR solutions. From executive search and contractual staffing to payroll and offshore outsourcing—we do it all with passion, purpose, and professionalism. We serve startups, SMEs, and multinational companies across India and the GCC with one goal: to match the right talent with the right roles at the right time. Every placement we make, every solution we offer, is designed to help companies thrive and individuals grow.
            </p>
            {/* <p className="mission-text">We are committed to:</p>
            <ul className="mission-list">
              <li>Delivering quality talent across industries</li>
              <li>Supporting growth from entry-level to leadership roles</li>
              <li>
                Being a certified, experienced, and reliable recruitment partner
                across India and the UAE
              </li>
            </ul>
            <p className="mission-text">
              With a people-centric approach and strong industry knowledge, MD
              Global HR Consulting continues to be the bridge between top talent
              and leading employers, ensuring sustainable success for both.
            </p> */}
          </div>
          <div className="mission-image-wrapper">
            <img
              src={meetingImage4}
              alt="Team Meeting"
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* Our Ambitions  */}
      <section id="vision-section">
        <div className="vision-container">
          <div className="vision-image-wrapper">
            <img
              src={meetingImage3}
              alt="Team Meeting2"
              className="vision-image"
            />
          </div>
          <div className="vision-content">
            <h4 className="vision-subtitle">Our Ambition</h4>
            <h2 className="vision-title">
              To be the most trusted HR and talent partner, not just in India and the GCC, but across the globe.

            </h2>
            <p className="vision-text">
              Our ambition is big, but our values keep us grounded. We want to be the name that employers think of when they need strategic hiring support, and the team that professionals trust when looking for their next career move. We aim to expand into new markets, serve more industries, and continue evolving with the future of work. Whether it's through our digital arm, Sunglow, or our legacy HR consulting services, we aspire to build a global ecosystem of talent, innovation, and opportunity. We’re not just chasing numbers, we’re building relationships that last.
            </p>
            
          </div>
        </div>
      </section>

    </>
  );
};

export default VisionMission;

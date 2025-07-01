import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Anjali Mehra',
      role: 'Developer, CodeZap',
      quote:
        'MD Global has consistently delivered exceptional candidates for both technical and leadership roles. Their understanding of our hiring needs and culture is unmatched. We’ve hired over 50 professionals through them and couldn’t be more satisfied.',
    },
    {
      name: 'Rajeev Sinha',
      role: 'Developer, CodeZap',
      quote:
        "Our manpower needs are high-volume and urgent. MD Global’s turnaround time is fantastic; they always come through with trained and compliant staff. Truly a dependable staffing partner.",
    },
    {
      name: 'Swati Bansal',
      role: 'Developer, CodeZap',
      quote:
        'Sunglow’s digital marketing campaigns helped us double our sales in under 3 months. From SEO to social media ads, their creative and strategic approach gave us exactly what we needed to grow online.',
    },
    {
      name: 'Naveen Kumar',
      role: 'Developer, CodeZap',
      quote:
        'Payroll management used to be a monthly challenge until we outsourced it to MD Global. They streamlined the entire process, ensured compliance, and made life easier for both HR and Finance teams.',
    },
    {
      name: 'Aarti Sharma',
      role: 'Developer, CodeZap',
      quote:
        'MD Global’s executive search team helped us hire two senior leaders who have already made a massive impact on our business. Their discreet approach and in-depth market research impressed us.',
    },
    {
      name: 'Pranav Joshi',
      role: 'Developer, CodeZap',
      quote:
        'We hired Sunglow for website redesign and lead generation. Their team was proactive, creative, and delivered a 150% increase in qualified leads within the first quarter. We highly recommend them.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section-unique">
      <div className="content-container-unique">
        <motion.h2
          className="testimonial-title-unique"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="testimonial-item-unique"
            >
              <div className="flex flex-col items-center space-y-4">
                <p className="testimonial-text-unique">
                  "{testimonialsData[currentIndex].quote}"
                </p>
                <div className="star-rating-unique">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.381-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <h4 className="testimonial-author-unique">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  {/* <p className="testimonial-position-unique">
                    {testimonialsData[currentIndex].role}
                  </p> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

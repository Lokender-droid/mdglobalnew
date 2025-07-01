import React, { useState } from 'react';
import './RequestACallBack.css';
import img from './../../../assets/images/About/Banner.jpg';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const RequestACallBack = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    contactNumber: '',
    personName: '',
    designation: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!phoneRegex.test(formData.contactNumber)) {
      alert('Please enter a valid contact number.');
      return;
    }

    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const detailedMessage = `
      Company Name: ${formData.companyName}
      Email: ${formData.email}
      Contact Number: ${formData.contactNumber}
      Name: ${formData.personName}
      Designation: ${formData.designation}
      Message: ${formData.message}
      Subscribed to tips: ${formData.subscribe ? 'Yes' : 'No'}
      Submission Time: ${currentTime}
    `;

    emailjs.send(
      'service_ffpl4pg',    //  EmailJS service ID
      'template_vn00aub',   // Template ID
      {
        name: formData.personName,      // Maps to {{name}} in template
        time: currentTime,              // Maps to {{time}} in template
        message: detailedMessage,       // Maps to {{message}} in template
        email: formData.email,          // Maps to {{email}} in template for Reply To
      },
      '4JyPcTbUvMHd-7QUQ'   //  EmailJS public key
    )
    .then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        alert('Thank you! We will get back to you shortly.');
        setFormData({
          companyName: '',
          email: '',
          contactNumber: '',
          personName: '',
          designation: '',
          message: '',
          subscribe: false,
        });
      },
      (error) => {
        console.error('Failed to send email:', error.text);
        alert(`There was a problem: ${error.text}. Please try again.`);
      }
    );
  };

  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <>
      <header>
        <motion.section
          className="relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
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
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Request a Call Back
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main>
        <form
          onSubmit={handleSubmit}
          className="form-container bg-white rounded-lg shadow-md max-w-xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Request a Call Back
          </h2>

          <div className="form-group mb-4">
            <label className="block mb-1 font-medium">
              Company Name <span className="required-star text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="input-company-name w-full p-2 border rounded"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group mb-4">
            <label className="block mb-1 font-medium">
              Email <span className="required-star text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-email w-full p-2 border rounded"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group mb-4">
            <label className="block mb-1 font-medium">
              Contact Number <span className="required-star text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="input-contact-number w-full p-2 border rounded"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group mb-4">
            <label className="block mb-1 font-medium">
              Your Name <span className="required-star text-red-500">*</span>
            </label>
            <input
              type="text"
              name="personName"
              value={formData.personName}
              onChange={handleChange}
              className="input-person-name w-full p-2 border rounded"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group mb-4">
            <label className="block mb-1 font-medium">
              Designation <span className="required-star text-red-500">*</span>
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="input-designation w-full p-2 border rounded"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group mb-4">
            <label className="block mb-1 font-medium">
              Message <span className="required-star text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea-message w-full p-2 border rounded"
              rows="4"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group flex items-center mb-4">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="checkbox-subscribe mr-2"
            />
            <label className="text-sm">
              Yes, I want to receive recruitment tips and insights.
            </label>
          </div>

          <button
            type="submit"
            className="submit-button bg-blue-600 w-40 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default RequestACallBack;
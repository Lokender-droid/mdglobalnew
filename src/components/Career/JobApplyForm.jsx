import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./jobapplyform.css";

const JobApplyForm = ({ job, onClose }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cover_letter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileInput = formRef.current.querySelector('input[name="resume"]');
    const resumeFile = fileInput?.files[0];

    if (!resumeFile) {
      alert("Please upload your resume as a PDF.");
      return;
    }

    // Create a hidden input to include the resume filename
    const existingHiddenInput = formRef.current.querySelector('input[name="resume_filename"]');
    if (existingHiddenInput) {
      existingHiddenInput.value = resumeFile.name;
    } else {
      const fileNameField = document.createElement("input");
      fileNameField.type = "hidden";
      fileNameField.name = "resume_filename";
      fileNameField.value = resumeFile.name;
      formRef.current.appendChild(fileNameField);
    }

    // Optional: log form values for debugging
    console.log("Form values:", formData);
    console.log("Job title:", job.title);
    console.log("Resume filename:", resumeFile.name);

    emailjs
      .sendForm(
        "service_3l61nbd",        // EmailJS Service ID
        "template_z2z8pt5",       //  EmailJS Template ID
        formRef.current,
        "4JyPcTbUvMHd-7QUQ"       // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Application submitted successfully!");
          onClose();
        },
        (err) => {
          console.error("FAILED TO SUBMIT:", err?.text || err);
          alert("Failed to submit application. Please check the configuration.");
        }
      );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Apply for {job.title}</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Hidden input for Job Title */}
          <input type="hidden" name="job_title" value={job.title} />

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Resume (PDF Only)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              required
            />
          </div>

          <div className="form-group">
            <label>Cover Letter</label>
            <textarea
              name="cover_letter"
              value={formData.cover_letter}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;

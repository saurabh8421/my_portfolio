import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoLogoInstagram } from "react-icons/io5";
import { BsFacebook,BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS credentials
    const serviceID = "service_uc0bsue"; // Replace with your EmailJS service ID
    const templateID = "template_ov9oqro"; // Replace with your EmailJS template ID
    const userID = "YRq1-cajLPfKcdaod"; // Replace with your EmailJS user ID

    emailjs.send(serviceID, templateID, formData, userID)
      .then(
        (result) => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <footer className="bg-sky-200 dark:bg-zinc-950 dark:text-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-start">

        {/* Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            ></textarea>
            <button
              type="submit"
              className="py-3 px-6 bg-sky-400 text-white rounded-full shadow-lg hover:shadow-sky-400 hover:scale-105 transform transition duration-300 font-semibold"
            >
              Send Message
            </button>
            {successMessage && <p className="mt-4 text-sky-400">{successMessage}</p>}
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Contact Information</h2>
          <p className="text-md md:text-lg leading-normal mb-4">
            <strong>Email:</strong> saurabhkumars272@gmail.com
          </p>
          <p className="text-md md:text-lg leading-normal mb-4">
            <strong>Phone:</strong> +916398368421
          </p>
          <p className="text-md md:text-lg leading-normal mb-4">
            <strong>Address:</strong> Delhi-NCR, India
          </p>

          {/* Social Media Links */}
          <div className="flex justify-start gap-8 mt-6">
            <a href="https://www.instagram.com/saurabh_saini_261/" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram size={30} className="text-sky-400 hover:text-white transition duration-300" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook size={30} className="text-sky-400 hover:text-white transition duration-300" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <BsGithub size={30} className="text-sky-400 hover:text-white transition duration-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <RiTwitterXFill size={30} className="text-sky-400 hover:text-white transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center mt-10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Saurabh Kumar | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

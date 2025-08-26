import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-[7vw] lg:px-[12vw] bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000]">
      <div className="text-center">
        {/* Name / Logo */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-700  mb-4">
          🎨 Gaurav Kumar Guleria
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="bg-yellow-200 text-purple-700 font-bold px-4 py-2 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000] hover:scale-110 transform transition-transform duration-300 my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          {/* {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-purple-700 border-4 border-black rounded-full p-3 bg-yellow-200 shadow-[4px_4px_0px_#000] hover:scale-125 transform transition-transform duration-300"
            >
              {item.icon}
            </a>
          ))} */}
        </div>

        {/* Copyright Text */}
        <p className="text-gray-800 font-bold ">
          © 2025 Gaurav Kumar Guleria. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

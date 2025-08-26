import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 shadow-[4px_4px_0px_#000] border-b-4 border-black"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-extrabold cursor-pointer select-none">
          <span className="text-cyan-600">&lt;</span>
          <span className="text-purple-700">G</span>
          <span className="text-cyan-600">/</span>
          <span className="text-purple-700">K</span>
          <span className="text-cyan-600">/</span>
          <span className="text-purple-700">G</span>
          <span className="text-cyan-600">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-purple-700 font-bold">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer px-4 py-2 rounded-xl border-4 border-black shadow-[3px_3px_0px_#000] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] ${
                activeSection === item.id
                  ? "bg-yellow-200 text-pink-600"
                  : "bg-white text-purple-700"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/gauravkumarguleria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-pink-600 transition-transform transform hover:-translate-y-1"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-kumar-guleria-0bbb472b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-pink-600 transition-transform transform hover:-translate-y-1"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-pink-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-pink-600 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-yellow-100 rounded-2xl border-4 border-black shadow-[6px_6px_0px_#000] md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer px-6 py-2 rounded-xl border-4 border-black shadow-[3px_3px_0px_#000] transition-transform duration-200 hover:-translate-y-1 ${
                  activeSection === item.id
                    ? "bg-pink-300 text-purple-700"
                    : "bg-white text-purple-700"
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/gauravkumarguleria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-pink-600 transform hover:-translate-y-1 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-kumar-guleria-0bbb472b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-pink-600 transform hover:-translate-y-1 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

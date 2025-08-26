import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[7vw] lg:px-[12vw] font-sans bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000]"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-purple-700 drop-shadow-[3px_3px_0px_#000] inline-block bg-yellow-200 px-6 py-2 rounded-2xl border-4 border-black shadow-[5px_5px_0px_#000]">
          💼 EXPERIENCE
        </h2>
        <p className="text-gray-800 mt-6 text-lg sm:text-xl font-medium max-w-2xl mx-auto bg-white px-6 py-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000]">
          A collection of my work experience and the roles I have taken in
          various organizations 🚀
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line (cartoon-style dashed line) */}
        <div className="absolute sm:left-1/2 left-4 transform -translate-x-1/2 w-2 h-full border-l-4 border-black border-dashed"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-4 transform -translate-x-1/2 bg-yellow-200 border-4 border-black w-16 h-16 sm:w-20 sm:h-20 rounded-full flex justify-center items-center shadow-[5px_5px_0px_#000] z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border-2 border-black"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border-4 border-black bg-pink-100 shadow-[6px_6px_0px_#000] transition-transform duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } mt-20 sm:mt-0`}
            >
              {/* Company Info */}
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="w-16 h-16 bg-white rounded-xl border-4 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>

                {/* Role + Company */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-extrabold text-purple-700 drop-shadow-[2px_2px_0px_#000]">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-lg text-gray-800 font-bold">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    📅 {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-gray-700 bg-white px-4 py-3 rounded-xl border-4 border-black shadow-[3px_3px_0px_#000]">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-6">
                <h5 className="font-extrabold text-purple-800 mb-2">
                  ⚡ Skills:
                </h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-yellow-200 text-black px-4 py-2 text-sm rounded-xl border-4 border-black mr-2 mb-2 shadow-[2px_2px_0px_#000] hover:bg-yellow-300 transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Click Here Link */}
                <p className="mt-4 text-center">
                  <a
                    href="https://drive.google.com/file/d/1cS94m-irTwWyX-MRFh-hUS7V8WT86L1g/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 font-bold underline hover:text-purple-700"
                  >
                    👉 Click here
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

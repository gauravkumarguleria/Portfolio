import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[12vw] font-sans bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-purple-700 drop-shadow-[3px_3px_0px_#000] inline-block bg-yellow-200 px-6 py-2 rounded-2xl border-4 border-black shadow-[5px_5px_0px_#000]">
          🎓 EDUCATION
        </h2>
        <p className="text-gray-800 mt-6 text-lg sm:text-xl font-medium max-w-2xl mx-auto bg-white px-6 py-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000]">
          My education has been a journey of learning and development. Here are
          the details of my academic background 📚
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-black h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-yellow-200 border-4 border-black w-16 h-16 rounded-full flex justify-center items-center z-10 shadow-[4px_4px_0px_#000]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full border-2 border-black shadow-[2px_2px_0px_#000]"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-[2rem] border-4 border-black bg-pink-100 shadow-[6px_6px_0px_#000] transform transition-transform duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8`}
            >
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-yellow-200 rounded-xl overflow-hidden border-4 border-black shadow-[3px_3px_0px_#000]">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-purple-700 drop-shadow-[2px_2px_0px_#000]">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-lg text-gray-800 font-bold">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 mt-2 font-bold">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-800 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-800">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

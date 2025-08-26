// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-6 sm:px-10 md:px-[7vw] lg:px-[12vw] xl:px-[18vw] font-sans bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000]"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-pink-600 drop-shadow-[3px_3px_0px_#000] inline-block bg-yellow-200 px-6 py-2 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000]">
        🎯 SKILLS
      </h2>
      <p className="text-gray-700 mt-6 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto bg-white px-6 py-4 rounded-2xl border-4 border-black shadow-[5px_5px_0px_#000]">
        A collection of my technical skills and expertise honed through various
        projects and experiences 🚀
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-center gap-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-pink-200 px-6 sm:px-8 md:px-10 py-10 w-full sm:w-[48%] lg:w-[45%] xl:w-[40%] rounded-[1.5rem] border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] transition-transform duration-300 hover:-translate-y-2"
        >
          {/* Category Title */}
          <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-purple-700 mb-8 text-center drop-shadow-[2px_2px_0px_#000]">
            {category.title} ⚡
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-yellow-100 border-4 border-black rounded-2xl py-4 px-3 sm:py-5 sm:px-4 hover:bg-yellow-200 hover:scale-105 transition-all shadow-[4px_4px_0px_#000]"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 mb-2 drop-shadow-[2px_2px_0px_#000]"
                  />
                  <span className="text-[clamp(0.85rem,1vw,1rem)] font-bold text-purple-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

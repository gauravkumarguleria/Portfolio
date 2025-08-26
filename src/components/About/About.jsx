import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[7vw] md:px-[10vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 rounded-[2rem] border-4 border-black shadow-[6px_6px_0px_#000]"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          {/* Greeting */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-800 mb-3 leading-tight drop-shadow-[3px_3px_0px_#000]">
            👋 Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-pink-600 mb-6 leading-tight drop-shadow-[3px_3px_0px_#000]">
            Gaurav Kumar Guleria
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-purple-700 leading-tight bg-yellow-200 px-4 py-2 rounded-xl border-4 border-black shadow-[4px_4px_0px_#000] inline-block">
            <span className="text-black">I am a </span>
            <ReactTypingEffect
              text={[
                "Full stack Developer",
                "Java Developer",
                "UI/UX Designer",
                "Coder",
                "Problem Solver",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-pink-600 font-extrabold">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-lg md:text-xl text-gray-700 mb-10 mt-8 leading-relaxed bg-white px-6 py-4 rounded-2xl border-4 border-black shadow-[5px_5px_0px_#000]">
            🎨 A detail-oriented software developer and MCA candidate
            specializing in Full Stack Web Development and AI integration. 🚀
            Experienced in building and deploying scalable web apps, from
            backend performance to modern full-stack tools like Next.js. 💡
            Passionate about creating efficient, intelligent solutions that
            solve real-world problems.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ynM40xSzfsBUqPgrTR_jJqA77B6wahpd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-extrabold bg-pink-400 text-black px-10 py-4 rounded-full border-4 border-black shadow-[5px_5px_0px_#000] transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#000]"
          >
            📄 DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-black rounded-full bg-yellow-200 shadow-[8px_8px_0px_#000] p-2"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Gaurav Kumar Guleria"
              className="w-full h-full rounded-full object-cover border-4 border-black"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

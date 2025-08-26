import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[7vw] lg:px-[12vw] font-sans bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-purple-700 drop-shadow-[3px_3px_0px_#000] inline-block bg-yellow-200 px-6 py-2 rounded-2xl border-4 border-black shadow-[5px_5px_0px_#000]">
          💻 PROJECTS
        </h2>
        <p className="text-gray-800 mt-6 text-lg sm:text-xl font-medium max-w-2xl mx-auto bg-white px-6 py-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000]">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies 🚀
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border-4 border-black bg-pink-100 rounded-2xl shadow-[6px_6px_0px_#000] overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000]"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl border-4 border-black shadow-[4px_4px_0px_#000]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-purple-700 drop-shadow-[2px_2px_0px_#000] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 pt-4 line-clamp-3 bg-white px-3 py-2 rounded-xl border-4 border-black shadow-[3px_3px_0px_#000]">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-yellow-200 text-purple-700 font-bold text-xs rounded-full px-3 py-1 mr-2 mb-2 border-2 border-black shadow-[2px_2px_0px_#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-purple-700 font-bold text-sm mb-4 pt-4 line-clamp-3">
                <a
                  href={project.webapp}
                  target="_blank"
                  className="hover:text-pink-600 underline"
                  rel="noopener noreferrer"
                >
                  👉 Click here
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (Optional Cartoon Popup) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-yellow-200 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000] lg:w-2/3 w-full max-w-3xl overflow-hidden relative animate-[pop_0.3s_ease-in-out]">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-purple-700 font-extrabold text-3xl hover:text-pink-600"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col items-center px-6 pb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-w-md h-64 object-cover rounded-xl border-4 border-black shadow-[4px_4px_0px_#000]"
              />
              <h3 className="text-3xl font-extrabold text-purple-700 mt-4 drop-shadow-[2px_2px_0px_#000]">
                {selectedProject.title}
              </h3>
              <p className="text-gray-800 mt-2 text-center bg-white px-4 py-2 rounded-xl border-4 border-black shadow-[3px_3px_0px_#000]">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap justify-center mt-4 gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-yellow-200 text-purple-700 font-bold text-xs rounded-full px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 hover:bg-pink-600 text-white px-6 py-2 rounded-xl border-4 border-black shadow-[3px_3px_0px_#000] font-bold"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-purple-700 text-white px-6 py-2 rounded-xl border-4 border-black shadow-[3px_3px_0px_#000] font-bold"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;

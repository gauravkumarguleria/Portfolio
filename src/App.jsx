import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="bg-blue-300 relative overflow-hidden">
      {/* Cartoon Blobs */}
      <BlurBlob
        position={{ top: "10%", left: "15%" }}
        size={{ width: "25%", height: "35%" }}
      />
      <BlurBlob
        position={{ top: "10%", left: "75%" }}
        size={{ width: "20%", height: "30%" }}
      />
      <BlurBlob
        position={{ top: "10%", left: "50%" }}
        size={{ width: "40%", height: "50%" }}
      />

      {/* Subtle grid background with cartoon vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main Content */}
      <div className="relative pt-20">
        {/* Navbar with cartoon hover colors */}
        <Navbar />

        {/* Sections with enhanced cartoon-style backgrounds */}
        <div className="relative z-10">
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </div>

        {/* Footer with playful gradient */}
        <div className="relative z-10">
          <Footer />
        </div>
      </div>

      {/* Extra cartoon accent: bouncing blur shapes */}
      <BlurBlob
        position={{ top: "10%", left: "80%" }}
        size={{ width: "15%", height: "25%" }}
      />
      <BlurBlob
        position={{ top: "85%", left: "10%" }}
        size={{ width: "18%", height: "28%" }}
      />
    </div>
  );
};

export default App;

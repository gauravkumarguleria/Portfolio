// Skills Section Logo's
import aicareer from "./assets/work_logo/ai-career.png";
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Backend Developer",
    company: "Bluestocks Fintech",
    date: "Feb 2025 - March 2025",
    desc: "Contributed to backend development for the IPO module, focusing on performance and scalability. Improved database structure using normalization and indexing to enhance query speed. Built and tested RESTful APIs to handle IPO transaction workflows efficiently. Collaborated with the team to streamline financial data processing and ensure data accuracy.",
    skills: ["JavaScript", "Node JS", "PostgreSQL"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "National Institute of Technology, Kurukshetra",
    date: "Jul 2023 - Present",
    grade: "8.73 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from NIT Kurukshetra, Haryana. During my time at NIT KKR, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at NIT KKR has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "CSKHPK Palampur, Himachal Pradesh",
    date: "Aug 2019 - July 2022",
    grade: "9.39 CGPA",
    desc: "I completed my Bachelor's degree in from CSKHPKV,Himachal Pradesh. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at CSKHPKV allowed me to work on grow not just analytically but professionally.",
    degree: "Bachelor of Science - BSC",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Kendriya Vidyalaya Palampur, Himachal Pradesh",
    date: "Apr 2018 - March 2019",
    grade: "94.6%",
    desc: "I completed my class 12 education from Kendriya Vidyalaya Palampur, Himachal Pradesh, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Informatics Practices and secured straight 100/100 in Informatics Practices(IP).",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Sensai - AI Career Coach",
    description:
      "A full-stack AI-powered web application designed to guide users in their career journey. Built with Next.js for a fast and scalable frontend, Tailwind CSS and Shadcn UI for a clean, modern interface, and Prisma as the ORM for efficient database management. The application integrates Gemini AI to provide personalized career advice, interview preparation tips, resume improvements, and skill-building recommendations..",
    image: aicareer,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "NEXT JS",
      "Tailwind CSS",
      "Prisma",
      "Shadcn UI",
    ],
    github: "https://github.com/gauravkumarguleria/sensai-2",
    webapp: "https://sensai-2.vercel.app/",
  },
];

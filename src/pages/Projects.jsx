import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiFastapi, SiTensorflow, SiMongodb } from "react-icons/si";
import Background from "../components/ui/Background";
import Navbar from "../components/Navbar";


const projectsData = [
  {
    title: "Facial Derma AI",
    description: "AI system for facial skin disease detection using CNN and FastAPI.",
    tech: ["React", "FastAPI", "TensorFlow"],
    features: ["Skin disease classification using CNN", "Real-time prediction API", "User-friendly interface"],
    images: [],
    demoLink: "https://facialdermaai.vercel.app/",
    repoLink: "https://github.com/Asad-Zaidi/FacialDerma_AI",
  },
  {
    title: "Service Hub",
    description: "Full-stack e-commerce platform with admin dashboard and SEO optimization.",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["E-commerce platform", "Admin dashboard", "SEO optimized"],
    images: [],
    demoLink: "https://eserviceshub.vercel.app/",
    repoLink: "https://github.com/Asad-Zaidi/EDM-Website",
  },
  {
    title: "Authentication System",
    description: "MERN authentication system with OTP verification and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["JWT authentication", "OTP verification", "Role-based access control"],
    images: [],
    demoLink: "#",
    repoLink: "#",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Navbar />
      <div className="relative z-10 px-4 md:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex flex-wrap gap-6 justify-center">

          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-white text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <TechIcon key={i} name={tech} />
                  ))}
                </div>
              </div>

              {/* Project Link/Button */}
              <button
                onClick={() => {
                  navigate(`/projects/${project.title}`, { state: project });
                }}
                className="mt-4 inline-block text-sm px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
              >
                View Project
              </button>
            </div>
          ))}

        </div>
      </div>
    </Background>

  );
};

// Tech Icon Component
const TechIcon = ({ name }) => {
  let Icon = null;
  let color = "text-gray-300";

  switch (name) {
    case "React":
      Icon = FaReact;
      color = "text-blue-400";
      break;
    case "Node.js":
      Icon = FaNodeJs;
      color = "text-green-500";
      break;
    case "FastAPI":
      Icon = SiFastapi;
      color = "text-teal-400";
      break;
    case "TensorFlow":
      Icon = SiTensorflow;
      color = "text-orange-500";
      break;
    case "MongoDB":
      Icon = SiMongodb;
      color = "text-green-600";
      break;
    default:
      return <span className="px-2 py-1 bg-white/10 rounded-full text-sm">{name}</span>;
  }

  return (
    <div className={`flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-sm ${color}`}>
      <Icon className="text-lg" />
      <span>{name}</span>
    </div>
  );
};

export default Projects;

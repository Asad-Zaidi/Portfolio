import React from "react";
import { useLocation } from "react-router-dom";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiFastapi, SiTensorflow, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
    // Example project if none passed
    const location = useLocation();
    const project = location.state; // gets the project object from Projects.jsx

    if (!project) {
        return <div className="text-white p-6">Project not found</div>;
    }

    // Provide safe defaults so optional fields don't throw
    const projectWithDefaults = {
        tech: [],
        features: [],
        images: [],
        ...project,
    };

    const { tech, features, images, demoLink, repoLink } = projectWithDefaults;




    return (
        <div className="min-h-screen w-full bg-[#0f172a] text-white p-6 md:p-12 relative">
            {/* Back Button */}
            <Link
                to="/projects"
                className="inline-block mb-6 px-4 py-2 border border-white/30 rounded-lg text-sm hover:bg-white/10 transition"
            >
                &larr; Back to Projects
            </Link>

            {/* Main Card */}
            <div className="w-full md:max-w-5xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col gap-6">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-gray-300">{project.description}</p>

                {/* Tech Stack */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {tech.map((item, idx) => (
                            <TechIcon key={idx} name={item} />
                        ))}
                    </div>
                </div>

                {/* Features / Functionality */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Features / Functionality</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {features.length > 0 ? (
                            features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))
                        ) : (
                            <li className="text-gray-400">Details coming soon</li>
                        )}
                    </ul>
                </div>

                {/* Screenshots / Images */}
                {images.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
                        <div className="flex flex-wrap gap-4">
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Screenshot ${idx + 1}`}
                                    className="rounded-lg border border-white/20 max-w-[300px] object-cover"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
                        >
                            Live Demo
                        </a>
                    )}
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition"
                        >
                            GitHub Repo
                        </a>
                    )}
                </div>
            </div>
        </div>
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
        case "Docker":
            Icon = FaDocker;
            color = "text-blue-600";
            break;
        default:
            return (
                <span className="px-2 py-1 bg-white/10 rounded-full text-sm">{name}</span>
            );
    }

    return (
        <div
            className={`flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-sm ${color}`}
        >
            <Icon className="text-lg" />
            <span>{name}</span>
        </div>
    );
};

export default ProjectDetail;

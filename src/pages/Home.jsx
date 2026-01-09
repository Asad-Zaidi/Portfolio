import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/ui/Background";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Store",
      description: "Full-stack MERN e-commerce application with comprehensive product catalog, order management, customer reviews, integrated blog, and powerful admin dashboard for content management. Fully SEO optimized and designed for selling digital subscriptions.",
      tech: ["React", "Node.js", "MongoDB"],
      features: [
        "Complete product catalog with categories and filters",
        "User authentication and authorization",
        "Shopping cart and secure checkout",
        "Order tracking and management",
        "Customer reviews and ratings",
        "Integrated blog system",
        "Admin dashboard for content management",
        "SEO optimization",
        "Digital subscription sales support"
      ],
      images: [],
      demoLink: "",
      repoLink: ""
    },
    {
      id: 2,
      title: "Facial Derma AI - Skin Disease Detection",
      description: "Comprehensive multi-platform skin disease diagnosis system using machine learning. Analyzes facial images to predict skin conditions, suggest treatments, and connect users with dermatologists. Features PDF report generation, expert verification, and admin management.",
      tech: ["React", "React Native", "FastAPI", "TensorFlow", "MongoDB"],
      features: [
        "Real-time facial image analysis using ML models",
        "Skin condition prediction and classification",
        "Personalized treatment suggestions",
        "PDF report generation for patients",
        "User authentication system",
        "Dermatologist verification and ratings",
        "Find nearby dermatologists feature",
        "Expert consultation booking",
        "Admin panel for system management",
        "Multi-platform support (Web & Mobile)"
      ],
      images: [],
      demoLink: "",
      repoLink: ""
    },
    {
      id: 3,
      title: "Hand Gesture Recognition",
      description: "Real-time hand gesture recognition system for American Sign Language (ASL). Captures video from webcam to detect hands, count fingers, and classify ASL gestures. Supports image uploads for offline predictions with on-screen result display.",
      tech: ["React", "Python", "TensorFlow"],
      features: [
        "Real-time hand detection and tracking",
        "Finger counting and pose estimation",
        "ASL gesture classification and recognition",
        "Webcam video stream processing",
        "Image upload for offline predictions",
        "On-screen result display",
        "High accuracy gesture recognition",
        "Low-latency processing",
        "User-friendly interface"
      ],
      images: [],
      demoLink: "",
      repoLink: ""
    }
  ];

  // Skills data with experience levels
  const skills = [
    { name: "MERN Stack", level: 90 },
    { name: "Python", level: 75 },
    { name: "C/C++", level: 70 },
    { name: "Microsoft Office", level: 85 },
  ];

  return (
    <>
      <Background>
        <Navbar />
        <div className="relative z-10 min-h-screen px-4 md:px-6 lg:px-8 py-4 md:py-6">
          {/* Main Container Grid */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4 lg:gap-6 h-full">

            {/* Left Container - 30% width (3/10 on md+) - Full Height */}
            <div className="md:col-span-3 h-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-6 hover:bg-white/8 transition-all duration-300 shadow-2xl h-full flex flex-col">

                {/* Profile Photo */}
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/200"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Basic Info */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Asad Zaidi</h2>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-semibold">Age:</span> 23
                  </p>
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold">City:</span> Lahore, Pakistan
                  </p>
                </div>

                {/* Experience Section */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-4">Experience Level</h3>

                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-white/70 text-xs">{skill.level}%</span>
                        </div>
                        {/* Horizontal Bar Chart */}
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden border border-white/10">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Container - 70% width (7/10 on md+) */}
            <div className="md:col-span-7 flex flex-col gap-4 lg:gap-6 h-full">

              {/* Top Right Container - 25% height */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex-none basis-[30%] min-h-[30vh] flex flex-col gap-4 overflow-hidden">
                <div className="flex-row items-start gap-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">Introduction</p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Asad Zaidi</h2>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    MERN Stack developer crafting performant, secure, and human-centered digital products. I merge solid engineering with thoughtful UI/UX to ship experiences that feel fast, resilient, and polished.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-white/80">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">MERN</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">React Native</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Python</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">AI/ML</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">DevOps</span>
                </div>
              </div>

              {/* Bottom Right Container - remaining height */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex-[3] basis-[70%] min-h-[55vh] overflow-auto">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-white">Projects</h2>
                </div>

                <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-cyan-500/10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg md:text-xl font-semibold text-white">E-Commerce Store</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-600/50 hover:text-emerald-100 transition-all duration-300">MERN</span>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Full-stack e-commerce with catalog, orders, reviews, blog, and admin dashboard. SEO-optimized and tailored for digital subscription sales (Netflix, Office 365, Adobe, etc.).
                    </p>
                    <div className="mt-auto pt-4">
                      <button onClick={() => navigate('/projectdetail', { state: projects[0] })} className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50">
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-cyan-500/10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg md:text-xl font-semibold text-white">Facial Derma AI</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/15 text-blue-100 border border-blue-400/30 hover:bg-blue-600/50 hover:text-blue-100 transition-all duration-300">AI/ML</span>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Multi-platform skin diagnosis (React, React Native, Python) using ML to analyze facial images, predict conditions, suggest treatments, and generate PDFs with dermatologist verification and admin controls.
                    </p>
                    <div className="mt-auto pt-4">
                      <button onClick={() => navigate('/projectdetail', { state: projects[1] })} className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-cyan-500/10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg md:text-xl font-semibold text-white">Hand Gesture Recognition</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/15 text-purple-100 border border-purple-400/30 hover:bg-purple-600/50 hover:text-purple-100 transition-all duration-300">CV</span>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Real-time ASL hand gesture recognition via webcam: detects hands, counts fingers, and classifies gestures. Supports image upload for predictions and displays results for accessible interaction.
                    </p>
                    <div className="mt-auto pt-4">
                      <button onClick={() => navigate('/projectdetail', { state: projects[2] })} className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};

export default Home;

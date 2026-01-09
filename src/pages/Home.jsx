import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen w-full relative text-white overflow-hidden">

      {/* ✅ Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#0f172a",
          backgroundImage: `
            radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
            radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
            radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
          backgroundPosition: "0 0, 10px 10px, 30px 30px",
        }}
      />

      {/* ✅ Foreground Content */}
      <div className="relative z-10">

        {/* Page Wrapper */}
        <div className="h-[calc(100vh-3.75rem)] px-4 md:px-6 py-4">

          {/* Main Layout */}
          <div
            className="
              flex flex-wrap
              h-full
              gap-4
              overflow-y-auto md:overflow-hidden
            "
          >

            {/* Profile Card */}
            <div className="
              w-full md:w-[calc(50%-0.5rem)]
              h-auto md:h-[calc(50%-0.5rem)]
              rounded-2xl
              bg-white/10
              backdrop-blur-sm
              border border-white/10
              p-6
              flex flex-col justify-between
            ">
              <div>
                <h1 className="text-3xl font-bold">Asad Jamil</h1>
                <p className="text-gray-300 mt-2">
                  Software Engineer specializing in AI-powered web applications,
                  facial skin disease detection systems, and scalable full-stack solutions.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-300">
                <span className="px-3 py-1 bg-white/10 rounded-full">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">FastAPI</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">TensorFlow</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">Node.js</span>
              </div>
            </div>

            {/* Projects Card */}
            <div className="
              w-full md:w-[calc(50%-0.5rem)]
              h-auto md:h-[calc(50%-0.5rem)]
              rounded-2xl
              bg-white/10
              backdrop-blur-sm
              border border-white/10
              p-6
            ">
              <h2 className="text-xl font-semibold mb-3">Projects</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Facial Derma AI (FastAPI + Keras)</li>
                <li>• Service Hub E-commerce Platform</li>
                <li>• Authentication System (OTP)</li>
                <li>• Portfolio Platform (React + Tailwind)</li>
              </ul>
            </div>

            {/* Skills Card */}
            {/* Skills Card */}
<div className="
  w-full md:w-[calc(50%-0.5rem)]
  h-auto md:h-[calc(50%-0.5rem)]
  rounded-2xl
  bg-white/10
  backdrop-blur-sm
  border border-white/10
  p-6
">
  <h2 className="text-xl font-semibold mb-3">Skills</h2>
  <div className="flex flex-wrap gap-4 text-gray-300">
    
    {/* JavaScript */}
    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
      <span className="text-yellow-400 text-lg">JS</span>
      <span className="text-sm">JavaScript</span>
    </div>

    {/* React */}
    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
      <FaReact className="text-blue-400 text-lg" />
      <span className="text-sm">React</span>
    </div>

    {/* Node.js */}
    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
      <FaNodeJs className="text-green-500 text-lg" />
      <span className="text-sm">Node.js</span>
    </div>


    {/* MongoDB */}
    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
      <SiMongodb className="text-green-600 text-lg" />
      <span className="text-sm">MongoDB</span>
    </div>



  </div>
</div>


            {/* Experience Card */}
            <div className="
              w-full md:w-[calc(50%-0.5rem)]
              h-auto md:h-[calc(50%-0.5rem)]
              rounded-2xl
              bg-white/10
              backdrop-blur-sm
              border border-white/10
              p-6
            ">
              <h2 className="text-xl font-semibold mb-3">Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                Developed AI-based healthcare systems, secure authentication platforms,
                and production-ready MERN applications with REST and ML integration.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

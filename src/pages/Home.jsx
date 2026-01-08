import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaPython, FaGithub } from "react-icons/fa";
import { SiFastapi, SiTensorflow, SiMongodb, SiPostgresql, SiKeras, SiGit } from "react-icons/si";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  // Initialize particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black text-white">

      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
          },
          particles: {
            color: { value: ["#8B5CF6", "#3B82F6", "#EC4899"] },
            links: { enable: true, color: "#ffffff", opacity: 0.1, distance: 120 },
            collisions: { enable: false },
            move: { enable: true, speed: 1, direction: "none", random: true, outModes: "bounce" },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">

        {/* Hero Section */}
        <motion.section
          className="text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Asad Jamil
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
            Software Engineer | AI & Full-Stack Developer
          </h2>
          <p className="text-gray-400 max-w-xl mt-4 text-lg">
            Building intelligent web applications using React, FastAPI, and Deep Learning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-7 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
              View Projects
            </button>
            <button className="px-7 py-3 rounded-lg border border-gray-600 text-white font-medium hover:border-white transition">
              Download Resume
            </button>
            <button className="px-7 py-3 rounded-lg border border-blue-500 text-blue-400 font-medium hover:bg-blue-500 hover:text-white transition">
              Contact Me
            </button>
          </div>
        </motion.section>

        {/* Tech Stack Snapshot with Floating Glow */}
        <motion.section
          className="flex flex-wrap justify-center gap-8 text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[FaReact, FaNodeJs, SiFastapi, FaPython, SiTensorflow, SiKeras, SiMongodb, SiPostgresql, FaDocker, SiGit, FaGithub].map((Icon, idx) => (
            <motion.div
              key={idx}
              className="text-gray-300 hover:text-white transition transform hover:scale-125"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2 }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {[
            { title: "Facial Derma AI", desc: "AI-powered system for detecting facial skin diseases and providing treatment suggestions." },
            { title: "Service Hub (EDM)", desc: "Modern e-commerce and digital marketing platform built with React and Node.js." },
            { title: "Authentication System", desc: "MERN-based authentication system with OTP verification and role-based login." },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition transform"
              whileHover={{ scale: 1.08 }}
            >
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm">{project.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          className="flex flex-wrap justify-center gap-12 text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {[
            { value: "10+", label: "Projects Completed" },
            { value: "2+", label: "Years of Experience" },
            { value: "10+", label: "Technologies Used" },
          ].map((stat, idx) => (
            <div key={idx}>
              <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.section>

      </div>
    </div>
  );
};

export default Home;

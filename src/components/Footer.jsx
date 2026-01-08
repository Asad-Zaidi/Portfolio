import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 fixed bottom-0 left-0 w-full">
            <div className="w-full px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Asad</h2>
                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                        Software Engineer specializing in AI-powered applications,
                        full-stack systems, and scalable web solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="hover:text-white transition">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-white transition">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Connect
                    </h3>

                    <div className="flex gap-5 text-2xl">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:your@email.com"
                            className="hover:text-white transition"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-2 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Asad Jamil. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

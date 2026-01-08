import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `relative pb-1 transition-all duration-300
        ${isActive
            ? "text-white font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
            : "text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
        }`;

    return (
        <nav className="bg-black backdrop-blur-md border-b border-white/10 shadow-lg px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50">
         {/* Logo */}
            <Link
                to="/"
                className="text-2xl font-bold text-white tracking-wide"
            >
                Asad
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 items-center">
                <NavLink to="/" end className={navLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={navLinkClass}>
                    About
                </NavLink>
                <NavLink to="/skills" className={navLinkClass}>
                    Skills
                </NavLink>
                <NavLink to="/projects" className={navLinkClass}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={navLinkClass}>
                    Contact
                </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-2xl text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full backdrop-blur-md bg-black/80 border-t border-white/10 shadow-xl md:hidden flex flex-col items-center gap-6 py-8">
                    <NavLink
                        to="/"
                        end
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/skills"
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        Skills
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

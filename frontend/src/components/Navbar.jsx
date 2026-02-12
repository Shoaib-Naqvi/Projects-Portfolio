import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, X, Code, Cpu } from "lucide-react";
import OrnateLogo from "./OrnateLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={20} /> },
    { path: "/ai-projects", label: "AI Projects", icon: <Cpu size={20} /> },
    { path: "/web-projects", label: "Web & App", icon: <Code size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <div className="p-1.5 bg-purple-600/10 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(111,32,255,0.1)]">
            <OrnateLogo size={32} showText={true} />
          </div>
        </motion.div>

        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 group ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </span>
              <span className="relative z-10 font-medium text-sm">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-20 left-6 right-6 bg-[#0b011d]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-3xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                    location.pathname === link.path
                      ? "bg-purple-600/20 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    className={
                      location.pathname === link.path ? "text-purple-400" : ""
                    }
                  >
                    {link.icon}
                  </span>
                  <span className="font-semibold">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

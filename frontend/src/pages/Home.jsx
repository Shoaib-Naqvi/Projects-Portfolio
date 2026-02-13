import { motion } from "framer-motion";
import { ChevronRight, Globe } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { Link } from "react-router-dom";
import OrnateLogo from "../components/OrnateLogo";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center space-y-12">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-block p-6 md:p-8 bg-purple-600/5 border border-purple-500/10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_0_50px_rgba(111,32,255,0.15)] backdrop-blur-md"
        >
          <div className="md:hidden">
            <OrnateLogo size={60} showText={true} />
          </div>
          <div className="hidden md:block">
            <OrnateLogo size={80} showText={true} />
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1]"
          >
            DESIGNING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#ff4444]">
              FUTURE OF WEB
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-2xl max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0"
          >
            Welcome to my portfolio. I specialize in building high-performance
            AI-integrated applications and premium web experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/ai-projects">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-[#ff4444] text-white rounded-2xl font-bold flex items-center space-x-3 hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/40">
              <span>Explore AI Projects</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link to="/web-projects">
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center space-x-3 hover:bg-white/10 transition-all backdrop-blur-md">
              <Globe size={20} className="text-purple-400" />
              <span>Web & App Development</span>
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-12 flex justify-center space-x-8 text-gray-500"
        >
          <a
            href="#"
            className="hover:text-white transition-colors flex items-center space-x-2"
          >
            <GithubIcon size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <div className="w-1 h-1 bg-gray-800 rounded-full my-auto"></div>
          <a
            href="#"
            className="hover:text-white transition-colors flex items-center space-x-2"
          >
            <Globe size={20} />
            <span className="text-sm font-medium">Portfolio</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

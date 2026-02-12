import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { footerData } from "../data/footerData";
import OrnateLogo from "./OrnateLogo";
import { InstagramIcon, LinkedinIcon, GithubIcon, XIcon } from "./Icons";

const iconMap = {
  linkedin: <LinkedinIcon size={20} />,
  instagram: <InstagramIcon size={20} />,
  X: <XIcon size={20} />,
  github: <GithubIcon size={20} />,
};

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#030712]/80 backdrop-blur-xl border-t border-white/5 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={itemVariants}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-1.5 bg-purple-600/10 rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                <OrnateLogo size={32} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent italic tracking-tighter">
                {footerData.logo}
              </span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              {footerData.tagline}
            </p>
          </motion.div>

          {footerData.columns.map((column, idx) => (
            <motion.div key={idx} className="space-y-6" variants={itemVariants}>
              <h4 className="text-white font-semibold text-lg">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden text-blue-400 mr-0 group-hover:mr-2">
                        →
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg">Work with Me</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${footerData.contact.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <span>{footerData.contact.email}</span>
              </a>
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Phone size={16} className="text-purple-400" />
                </div>
                <span>{footerData.contact.phone}</span>
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              {footerData.socials.map((social, sIdx) => (
                <motion.a
                  key={sIdx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/10 shadow-lg"
                  aria-label={social.name}
                >
                  {iconMap[social.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>{footerData.copyright}</p>
          <div className="flex space-x-8">
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

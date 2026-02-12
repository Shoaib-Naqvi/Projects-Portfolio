import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const TechnologyList = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-8">
      <h4 className="font-bold text-2xl text-white mb-6">Technologies</h4>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {technologies.map((tech, index) => (
          <motion.li
            key={index}
            variants={item}
            className="flex items-start text-gray-200 text-lg group"
          >
            <span className="mr-3 mt-1.5 p-1 bg-purple-500/10 rounded-md group-hover:bg-purple-500/30 transition-colors">
              <Zap
                size={14}
                className="text-purple-400 group-hover:scale-125 transition-transform"
              />
            </span>
            {tech}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TechnologyList;

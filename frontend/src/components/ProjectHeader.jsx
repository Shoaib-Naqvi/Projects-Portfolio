import { motion } from "framer-motion";

const ProjectHeader = ({ title = "DESCRIPTION", subtitle = "PROJECT" }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 mb-12 overflow-hidden">
      <div
        className="relative bg-[#0b011d] rounded-[2.5rem] p-12 md:p-20 overflow-hidden border border-white/5 shadow-2xl"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255, 68, 68, 0.15), transparent 40%), radial-gradient(circle at center, rgba(30, 0, 100, 0.2), transparent 70%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex flex-col items-start space-y-2">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#ff4444] text-xl md:text-2xl font-black tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {subtitle}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute bottom-12 right-12 md:bottom-20 md:right-20"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 2V10"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24 38V46"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M46 24L38 24"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M10 24L2 24"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M39.5563 8.44365L33.9 14.1"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M14.1 33.9L8.44365 39.5563"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M39.5563 39.5563L33.9 33.9"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M14.1 14.1L8.44365 8.44365"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="24" cy="24" r="6" fill="#ff4444" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHeader;

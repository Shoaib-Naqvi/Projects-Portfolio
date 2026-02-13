import { motion } from "framer-motion";

const OrnateLogo = ({ size = 24, className = "", showText = false }) => {
  const logoCompleteDelay = 1.8;

  return (
    <div
      className={`flex items-center ${showText ? "space-x-3" : ""} ${className}`}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10Z"
          stroke="#6F20FF"
          strokeWidth="4"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.5, ease: "easeInOut" },
            },
          }}
        />

        <motion.path
          d="M50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75C63.8071 75 75 63.8071 75 50C75 42.5 71.5 36 66 31.5"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { delay: 0.5, duration: 1.2, ease: "easeOut" },
            },
          }}
        />

        <motion.path
          d="M50 40L53 50L50 60L47 50L50 40Z"
          fill="#6F20FF"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { delay: 1.2, duration: 0.5, type: "spring" },
            },
          }}
        />

        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </motion.svg>

      {showText && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: logoCompleteDelay,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-lg md:text-xl font-bold tracking-tighter text-white"
          style={{ fontSize: `clamp(14px, ${size * 0.75}px, 28px)` }}
        >
          PORTFOLIO
        </motion.span>
      )}
    </div>
  );
};

export default OrnateLogo;

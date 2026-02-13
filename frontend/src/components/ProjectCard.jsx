import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Search, ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import TechnologyList from "./TechnologyList";
import ToolsList from "./ToolsList";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(project.imageUrl)
    ? project.imageUrl
    : [project.imageUrl];
  const hasMultipleImages = images.length > 1;
  useEffect(() => {
    if (hasMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleImages, images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <StyledCardWrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full py-12 md:py-24 border-b border-white/5 last:border-0 parent"
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-0 right-0 md:top-4 text-white text-5xl md:text-6xl font-black tracking-tighter select-none"
        >
          {project.displayNumber}
        </motion.div>

        <div className="card-inner grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="space-y-8 md:space-y-12 content-side">
            <div className="space-y-6 md:space-y-8">
              {project.logoUrl && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mb-6 md:mb-10"
                >
                  <img
                    src={project.logoUrl}
                    alt="Logo"
                    className={`${
                      project.title.includes("Alexander-telemedicine") ||
                      project.title.includes("Globali")
                        ? "max-w-[220px] md:max-w-[280px] h-16 md:h-24"
                        : "max-w-[120px] md:max-w-[160px] h-10 md:h-14"
                    } object-contain object-left opacity-90 drop-shadow-2xl`}
                  />
                </motion.div>
              )}

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight"
              >
                {project.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
              >
                {project.shortDescription}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 md:space-y-6"
            >
              <h4 className="text-xl md:text-2xl font-bold text-white flex items-center space-x-3">
                <span className="w-8 h-px bg-purple-500"></span>
                <span>Problem & Solution</span>
              </h4>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                {project.problem}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4 group"
            >
              <div className="p-3 md:p-4 bg-purple-600/10 border border-purple-500/20 rounded-2xl group-hover:bg-purple-600/30 group-hover:border-purple-500/50 transition-all duration-500">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 text-lg md:text-xl font-semibold hover:text-white transition-colors tracking-wide underline-offset-8 flex items-center space-x-2"
              >
                <span>Live Preview</span>
                <ExternalLink
                  size={18}
                  className="md:size-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </motion.div>

            <TechnologyList technologies={project.technologies} />
          </div>

          <div className="space-y-10 md:space-y-16 visual-side">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative group visual-container"
            >
              <div className="logo-circles">
                <span className="circle circle1" />
                <span className="circle circle2" />
                <span className="circle circle3" />
                <span className="circle circle4" />
              </div>

              <div className="glass-pane" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] main-image"
              >
                <img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  className="w-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700"
                  style={{
                    filter: "saturate(0.6) brightness(0.9)",
                    WebkitFilter: "saturate(0.6) brightness(0.9)",
                  }}
                />

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "bg-purple-500 w-6"
                              : "bg-white/50 hover:bg-white/70"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>

            <ToolsList tools={project.tools} />
          </div>
        </div>
      </motion.div>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.div`
  .parent {
    perspective: 1500px;
  }

  .card-inner {
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .parent:hover .card-inner {
    /* Subtle 3D tilt for the whole horizontal section on desktop */
    @media (min-width: 1024px) {
      transform: rotate3d(1, -0.1, 0, 5deg);
    }
  }

  .visual-container {
    transform-style: preserve-3d;
  }

  .logo-circles {
    position: absolute;
    inset: -20px;
    transform-style: preserve-3d;
    pointer-events: none;
    z-index: 0;
  }

  .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.1) 0%,
      transparent 70%
    );
    border: 1px solid rgba(139, 92, 246, 0.05);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .circle1 {
    width: 120%;
    transform: translate3d(-50%, -50%, -40px);
    transition-delay: 0.1s;
  }
  .circle2 {
    width: 100%;
    transform: translate3d(-50%, -50%, -20px);
    transition-delay: 0.2s;
  }
  .circle3 {
    width: 80%;
    transform: translate3d(-50%, -50%, 0px);
    transition-delay: 0.3s;
  }
  .circle4 {
    width: 60%;
    transform: translate3d(-50%, -50%, 20px);
    transition-delay: 0.4s;
  }

  .parent:hover .circle1 {
    transform: translate3d(-50%, -50%, -60px) scale(1.1);
  }
  .parent:hover .circle2 {
    transform: translate3d(-50%, -50%, -30px) scale(1.05);
  }
  .parent:hover .circle3 {
    transform: translate3d(-50%, -50%, 20px);
  }
  .parent:hover .circle4 {
    transform: translate3d(-50%, -50%, 50px);
  }

  .glass-pane {
    position: absolute;
    inset: -10px;
    border-radius: 2rem;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 100%
    );
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: translate3d(0, 0, 60px);
    pointer-events: none;
    z-index: 10;
    opacity: 0;
    transition: all 0.6s ease;
  }

  .parent:hover .glass-pane {
    opacity: 0; /* Disabled - was opacity: 1 */
    transform: translate3d(0, 0, 80px);
  }

  .main-image {
    transform: translate3d(0, 0, 30px);
    transition: transform 0.6s ease;
    z-index: 5;
  }

  .parent:hover .main-image {
    transform: translate3d(0, 0, 100px);
  }

  .content-side {
    transform: translate3d(0, 0, 50px);
  }
`;

export default ProjectCard;

import { useEffect, useState } from "react";
import projectService from "../services/projectService";
import ProjectCard from "../components/ProjectCard";

const WebProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getWebProjects();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load Web & App projects.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="text-2xl font-medium animate-pulse">
          Loading Web & App Portfolio...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <div className="text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default WebProjects;

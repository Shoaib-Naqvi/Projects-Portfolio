import { aiProjects, webProjects } from "../data/projectsData.js";

const projectService = {
  getAIProjects: async () => {
    return [...aiProjects].sort((a, b) => a.orderIndex - b.orderIndex);
  },

  getWebProjects: async () => {
    return [...webProjects].sort((a, b) => a.orderIndex - b.orderIndex);
  },
};

export default projectService;

// src/services/ProjectService.ts

import { Project } from '../models/Project';
import { fetchWithToken } from '../utils/api';

export const ProjectService = {
  // getProjects method would be here, but it's not included in the provided snippets

  createProject: async (project: Project): Promise<Project> => {
    return fetchWithToken('/projects', 'POST', project);
  },

  updateProject: async (project: Project): Promise<Project> => {
    return fetchWithToken(`/projects/${project.id}`, 'PUT', project);
  },

  deleteProject: async (projectId: string): Promise<void> => {
    return fetchWithToken(`/projects/${projectId}`, 'DELETE');
  },
};
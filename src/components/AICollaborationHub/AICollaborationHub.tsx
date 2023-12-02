import React, { useState, useEffect } from 'react';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/ProjectService';
import styles from './AICollaborationHub.module.css';

interface ProjectFormProps {
  onSubmit: (project: Project) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ id: '', name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Project name" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Project description" required />
      <button type="submit">Create Project</button>
    </form>
  );
};

const AICollaborationHub: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await ProjectService.getProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  const createProject = async (project: Project) => {
    try {
      const newProject = await ProjectService.createProject(project);
      setProjects([...projects, newProject]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateProject = async (project: Project) => {
    try {
      const updatedProject = await ProjectService.updateProject(project);
      setProjects(projects.map(p => p.id === project.id ? updatedProject : p));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteProject = async (projectId: string) => {
    try {
      await ProjectService.deleteProject(projectId);
      setProjects(projects.filter(p => p.id !== projectId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.aiCollaborationHub}>
      <h1>AI Collaboration Hub</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <button onClick={() => deleteProject(project.id)}>Delete</button>
          <button onClick={() => updateProject(project)}>Edit</button>
        </div>
      ))}
      <ProjectForm onSubmit={createProject} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default AICollaborationHub;
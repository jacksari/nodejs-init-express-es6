import Project from '../models/project.model';

// const slug = require('slug');

const createProject = async (project) => await Project.create({
  name: project.name,
  description: project.description,
});

const getProjects = async () => await Project.find();

const getProject = async (id) => await Project.findById(id);

export default {
  createProject,
  getProject,
  getProjects,
};

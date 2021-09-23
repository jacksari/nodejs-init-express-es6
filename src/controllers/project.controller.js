import { request, response } from 'express';
import ErrorHandler from '../middlewares/error';
import serviceProject from '../services/project.service';

export const createProject = async (req = request, res = response) => {
  try {
    const project = await serviceProject.createProject(req.body);
    res.status(200).json({
      project,
      ok: true,
    });
  } catch (error) {
    ErrorHandler(req, res, 500, 'Error al crear proyecto');
  }
};

export const getProjects = async (req = request, res = response) => {
  try {
    const projects = await serviceProject.getProjects();
    res.status(200).json({
      projects,
      ok: true,
    });
  } catch (error) {
    ErrorHandler(req, res, 500, 'Error al listar proyectos');
  }
};

export const getProject = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const project = await serviceProject.getProject(id);
    res.status(200).json({
      project,
      ok: true,
    });
  } catch (error) {
    ErrorHandler(req, res, 500, 'Error al listar proyecto');
  }
};

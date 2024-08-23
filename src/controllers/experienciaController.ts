import { Request, Response } from 'express';
import Experiencia from '../models/experienciaModel';

export const agregarExperiencia = async (req: Request, res: Response) => {
  const { numeroId, experiencias } = req.body;

  if (!numeroId) {
    return res.status(400).json({ message: 'numeroId es requerido' });
  }

  try {
    // Limpia las experiencias existentes para el usuario
    await Experiencia.deleteMany({ numeroId });

    // Guarda las nuevas experiencias con conversiones necesarias
    const nuevasExperiencias = experiencias.map((exp: any) => {
      return {
        ...exp,
        numeroId,
        fechaInicio: exp.fechaInicio === 'No aplica' ? null : exp.fechaInicio,
        fechaFin: exp.fechaFin === 'No aplica' ? null : exp.fechaFin
      };
    });

    await Experiencia.insertMany(nuevasExperiencias);

    res.status(200).json({ message: 'Experiencias guardadas correctamente' });
  } catch (error) {
    console.error('Error al agregar experiencias:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


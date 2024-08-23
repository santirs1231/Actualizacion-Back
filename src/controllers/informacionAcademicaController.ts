import { Request, Response } from 'express';
import InformacionAcademica from '../models/informacioAcademicaModel';

export const agregarInformacionAcademica = async (req: Request, res: Response) => {
  const { numeroId, estudios } = req.body;

  if (!numeroId) {
    return res.status(400).json({ message: 'numeroId es requerido' });
  }

  try {
    // Limpia las entradas existentes para el usuario
    await InformacionAcademica.deleteMany({ numeroId });

    // Guarda las nuevas entradas con conversiones necesarias
    const nuevasInformacionesAcademicas = estudios.map((estudio: any) => {
      return {
        ...estudio,
        numeroId,
        tipoEstudio: estudio.tipoEstudio || 'No aplica', // Valor por defecto si es necesario
        titulo: estudio.titulo || 'No aplica' // Valor por defecto si es necesario
      };
    });

    await InformacionAcademica.insertMany(nuevasInformacionesAcademicas);

    res.status(200).json({ message: 'Información académica guardada correctamente' });
  } catch (error) {
    console.error('Error al agregar información académica:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
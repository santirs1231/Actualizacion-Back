import { Request, Response } from 'express';
import Hijo from '../models/hijosModel';

export const agregarHijos = async (req: Request, res: Response) => {
  const { numeroId, hijos } = req.body;

  if (!numeroId) {
    return res.status(400).json({ message: 'numeroId es requerido' });
  }

  try {
    // Limpia los hijos existentes para el usuario
    await Hijo.deleteMany({ numeroId });

    // Guarda los nuevos hijos
    const nuevosHijos = hijos.map((hijo: any) => ({ ...hijo, numeroId }));
    await Hijo.insertMany(nuevosHijos);

    res.status(200).json({ message: 'Hijos guardados correctamente' });
  } catch (error) {
    console.error('Error al agregar hijos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
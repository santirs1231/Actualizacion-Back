import { Request, Response } from 'express';
import Mascota from '../models/mascotasModel';

export const agregarMascotas = async (req: Request, res: Response) => {
    const { numeroId, mascotas } = req.body;
  
    if (!numeroId) {
      return res.status(400).json({ message: 'numeroId es requerido' });
    }
  
    try {
      // Elimina los registros anteriores de mascotas
      await Mascota.deleteMany({ numeroId });
  
      // Agrega los nuevos registros
      const nuevasMascotas = mascotas.map((mascota: any) => ({
        numeroId,
        ...mascota
      }));
  
      await Mascota.insertMany(nuevasMascotas);
      res.status(201).json({ message: 'Mascotas guardadas correctamente' });
    } catch (error) {
      console.error('Error al agregar mascotas:', error);
      res.status(500).json({ message: 'Error interno del servidor', error });
    }
  };

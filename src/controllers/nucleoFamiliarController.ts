import { Request, Response } from 'express';
import NucleoFamiliar from '../models/nucleoFamiliarModel';
/* import NucleoFamiliar from '../models/nucleoFamiliarModel'; */
/* import NucleoFamiliar from '../models/nucleoFamiliarModel'; */

export const agregarNucleoFamiliar = async (req: Request, res: Response) => {
  const { numeroId, nucleoFamiliar } = req.body;

  if (!numeroId) {
    return res.status(400).json({ message: 'numeroId es requerido' });
  }

  try {
    // Elimina los registros anteriores del núcleo familiar
    await NucleoFamiliar.deleteMany({ numeroId });

    // Agrega los nuevos registros
    const nuevoNucleoFamiliar = nucleoFamiliar.map((integrante: any) => ({
      numeroId,
      ...integrante
    }));

    await NucleoFamiliar.insertMany(nuevoNucleoFamiliar);
    res.status(201).json({ message: 'Núcleo familiar guardado correctamente' });
  } catch (error) {
    console.error('Error al agregar núcleo familiar:', error);
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};



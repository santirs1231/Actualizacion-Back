import { Request, Response } from 'express';
import Contacto from '../models/contactosModel';

export const agregarContactos = async (req: Request, res: Response) => {
  const { numeroId, nombreContacto1, numeroContacto1, parentesco1, nombreContacto2, numeroContacto2, parentesco2 } = req.body;

  if (!numeroId || !nombreContacto1 || !numeroContacto1 || !parentesco1 || !nombreContacto2 || !numeroContacto2 || !parentesco2) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    // Crear nuevo documento
    const nuevoContacto = new Contacto({
      numeroId,
      nombreContacto1,
      numeroContacto1,
      parentesco1,
      nombreContacto2,
      numeroContacto2,
      parentesco2
    });

    // Guardar en la base de datos
    await nuevoContacto.save();
    res.status(201).json({ message: 'Contactos agregados correctamente' });
  } catch (error) {
    console.error('Error al agregar contactos:', error);
    res.status(500).json({ message: 'Error al agregar contactos', error });
  }
};



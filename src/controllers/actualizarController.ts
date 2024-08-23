import { Request, Response } from 'express';
import Usuario from '../models/actualizarModel';

export const actualizarUsuario = async (req: Request, res: Response) => {
  const usuarioData = req.body;
  console.log('Datos recibidos en el backend:', usuarioData);

  // Validar numeroId
  if (!usuarioData.numeroId || usuarioData.numeroId.trim() === '') {
    return res.status(400).json({ message: 'El campo numeroId es obligatorio' });
  }

  try {
    let usuario = await Usuario.findOne({ numeroId: usuarioData.numeroId });

    if (usuario) {
      // Si el usuario existe, actualiza sus datos
      await Usuario.updateOne({ numeroId: usuarioData.numeroId }, usuarioData, { runValidators: true });
      res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } else {
      // Si el usuario no existe, crea un nuevo registro
      usuario = new Usuario(usuarioData);
      await usuario.save();
      res.status(201).json({ message: 'Usuario creado correctamente' });
    }
  } catch (error) {
    console.error('Error al actualizar/crear usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
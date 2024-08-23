import { Request, Response } from 'express';
import EticaEmpresarial from '../models/eticaEmpresarialModel';


export const agregarEticaEmpresarial = async (req: Request, res: Response) => {
  try {
    const { numeroId, empleados, proveedores, clientesMayoristas, autorizacion } = req.body;

    if (!numeroId) {
      return res.status(400).json({ message: 'numeroId es requerido' });
    }

    const nuevaEticaEmpresarial = new EticaEmpresarial({
      numeroId,
      empleados,
      proveedores,
      clientesMayoristas,
      autorizacion
    });

    const eticaEmpresarialGuardada = await nuevaEticaEmpresarial.save();
    res.status(201).json(eticaEmpresarialGuardada);
  } catch (error) {
    console.error('Error al actualizar/crear ética empresarial:', error);
    res.status(500).json({ message: 'Error al actualizar/crear ética empresarial', error });
  }
};


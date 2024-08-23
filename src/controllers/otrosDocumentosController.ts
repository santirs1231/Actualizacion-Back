import { Request, Response } from 'express';
import OtroDocumento from '../models/otrosDocumentosModel';

export const agregarOtrosDocumentos = async (req: Request, res: Response) => {
  try {
    const { numeroId, libreta, numeroLibreta, fechaExpedicion, categoriaLicencia, numeroLicencia, fechaVencimiento } = req.body;
    if (!numeroId) {
      return res.status(400).json({ message: 'numeroId es requerido' });
    }

    // Verifica si ya existe un documento para el numeroId
    let documentoExistente = await OtroDocumento.findOne({ numeroId });

    if (documentoExistente) {
      // Si el documento existe, actualízalo
      await OtroDocumento.updateOne({ numeroId }, {
        libreta,
        numeroLibreta,
        fechaExpedicion,
        categoriaLicencia,
        numeroLicencia,
        fechaVencimiento
      });
      res.status(200).json({ message: 'Otros documentos actualizados correctamente' });
    } else {
      // Si el documento no existe, crea uno nuevo
      const nuevoDocumento = new OtroDocumento({
        numeroId,
        libreta,
        numeroLibreta,
        fechaExpedicion,
        categoriaLicencia,
        numeroLicencia,
        fechaVencimiento
      });

      await nuevoDocumento.save();
      res.status(201).json({ message: 'Otros documentos guardados correctamente' });
    }
  } catch (error) {
    console.error('Error al actualizar/crear otros documentos:', error);
    res.status(500).json({ message: 'Error al actualizar/crear otros documentos', error });
  }
};

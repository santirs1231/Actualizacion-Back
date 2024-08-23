import { Router } from 'express';
import { agregarMascotas } from '../controllers/mascotasController';

const router = Router();

// Ruta para agregar mascotas
router.post('/', agregarMascotas);

export default router;

import { Router } from 'express';
import { agregarNucleoFamiliar } from '../controllers/nucleoFamiliarController';

const router = Router();

// Ruta para agregar núcleo familiar
router.post('/', agregarNucleoFamiliar);

export default router;



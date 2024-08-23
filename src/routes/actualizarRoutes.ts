import { Router } from 'express';
import { actualizarUsuario } from '../controllers/actualizarController';

const router = Router();

router.post('/', actualizarUsuario);

export default router;


import { Router } from 'express';
import { agregarEticaEmpresarial } from '../controllers/eticaEmpresarialController';

const router = Router();

router.post('/', agregarEticaEmpresarial);

export default router;

import { Router } from 'express';
import { agregarOtrosDocumentos } from '../controllers/otrosDocumentosController';

const router = Router();

router.post('/', agregarOtrosDocumentos);

export default router;


// routes/informacionAcademicaRoutes.ts
import { Router } from 'express';
import { agregarInformacionAcademica } from '../controllers/informacionAcademicaController';

const router = Router();

router.post('/', agregarInformacionAcademica);

export default router;


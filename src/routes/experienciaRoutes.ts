import { Router } from "express";
import { agregarExperiencia } from "../controllers/experienciaController";

const router = Router();

router.post('/', agregarExperiencia); // Ruta para agregar una nueva experiencia


export default router;
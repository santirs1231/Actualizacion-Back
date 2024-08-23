import { Router } from "express";
import { agregarHijos } from "../controllers/hijosController";

const router = Router();

router.post('/', agregarHijos);

export default router;
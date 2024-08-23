import { Router } from "express";
import { agregarContactos } from "../controllers/contactosController";

const router = Router();

router.post('/', agregarContactos); // Ruta para agregar nuevos contactos

export default router;


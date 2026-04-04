import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crudController";

const router: ExpressRouter = Router();
const ctrl = createCrudController("users");

/**
 * @route   GET /api/users
 * @desc    Obtener todos los usuarios
 * @returns { data: User[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/users/:id
 * @desc    Obtener un usuario por ID
 * @returns { data: User }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/users
 * @desc    Crear un nuevo usuario
 * @body    { email, full_name, avatar_url?, role }
 * @returns { data: User }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/users/:id
 * @desc    Actualizar un usuario existente
 * @body    Campos parciales de User
 * @returns { data: User }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/users/:id
 * @desc    Eliminar un usuario
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

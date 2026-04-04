import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crudController";

const router: ExpressRouter = Router();
const ctrl = createCrudController("expense_categories");

/**
 * @route   GET /api/expense_categories
 * @desc    Obtener todas las categorías de gastos
 * @returns { data: ExpenseCategory[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/expense_categories/:id
 * @desc    Obtener una categoría de gasto por ID
 * @returns { data: ExpenseCategory }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/expense_categories
 * @desc    Crear una nueva categoría de gasto
 * @body    { name, color, user_id }
 * @returns { data: ExpenseCategory }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/expense_categories/:id
 * @desc    Actualizar una categoría de gasto existente
 * @body    Campos parciales de ExpenseCategory
 * @returns { data: ExpenseCategory }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/expense_categories/:id
 * @desc    Eliminar una categoría de gasto
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

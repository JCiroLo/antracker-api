import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crudController";

const router: ExpressRouter = Router();
const ctrl = createCrudController("expense_categories");

/**
 * @route   GET /api/income_categories
 * @desc    Obtener todas las categorías de ingresos
 * @returns { data: ExpenseCategory[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/income_categories/:id
 * @desc    Obtener una categoría de ingreso por ID
 * @returns { data: ExpenseCategory }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/income_categories
 * @desc    Crear una nueva categoría de ingreso
 * @body    { name, color, user_id }
 * @returns { data: ExpenseCategory }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/income_categories/:id
 * @desc    Actualizar una categoría de ingreso existente
 * @body    Campos parciales de ExpenseCategory
 * @returns { data: ExpenseCategory }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/income_categories/:id
 * @desc    Eliminar una categoría de ingreso
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

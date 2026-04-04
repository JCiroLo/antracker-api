import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crudController";

const router: ExpressRouter = Router()
const ctrl = createCrudController("expense_templates");

/**
 * @route   GET /api/expense_templates
 * @desc    Obtener todas las plantillas de gastos
 * @returns { data: ExpenseTemplate[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/expense_templates/:id
 * @desc    Obtener una plantilla de gasto por ID
 * @returns { data: ExpenseTemplate }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/expense_templates
 * @desc    Crear una nueva plantilla de gasto
 * @body    { name, category, amount, description?, is_recurring }
 * @returns { data: ExpenseTemplate }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/expense_templates/:id
 * @desc    Actualizar una plantilla de gasto existente
 * @body    Campos parciales de ExpenseTemplate
 * @returns { data: ExpenseTemplate }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/expense_templates/:id
 * @desc    Eliminar una plantilla de gasto
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

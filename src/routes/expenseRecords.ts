import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crudController";

const router: ExpressRouter = Router();
const ctrl = createCrudController("expense_records");

/**
 * @route   GET /api/expense_records
 * @desc    Obtener todos los registros de gastos
 * @returns { data: ExpenseRecord[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/expense_records/:id
 * @desc    Obtener un registro de gasto por ID
 * @returns { data: ExpenseRecord }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/expense_records
 * @desc    Crear un nuevo registro de gasto
 * @body    { template_id?, user_id, name, category, amount, description?, date }
 * @returns { data: ExpenseRecord }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/expense_records/:id
 * @desc    Actualizar un registro de gasto existente
 * @body    Campos parciales de ExpenseRecord
 * @returns { data: ExpenseRecord }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/expense_records/:id
 * @desc    Eliminar un registro de gasto
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

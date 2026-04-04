import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crudController";

const router: ExpressRouter = Router();
const ctrl = createCrudController("income_records");

/**
 * @route   GET /api/income_records
 * @desc    Obtener todos los registros de ingresos
 * @returns { data: IncomeRecord[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/income_records/:id
 * @desc    Obtener un registro de ingreso por ID
 * @returns { data: IncomeRecord }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/income_records
 * @desc    Crear un nuevo registro de ingreso
 * @body    { template_id?, user_id, name, source, amount, description?, date }
 * @returns { data: IncomeRecord }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/income_records/:id
 * @desc    Actualizar un registro de ingreso existente
 * @body    Campos parciales de IncomeRecord
 * @returns { data: IncomeRecord }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/income_records/:id
 * @desc    Eliminar un registro de ingreso
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

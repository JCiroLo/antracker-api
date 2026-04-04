import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crudController";

const router: ExpressRouter = Router();
const ctrl = createCrudController("income_templates");

/**
 * @route   GET /api/income_templates
 * @desc    Obtener todas las plantillas de ingresos
 * @returns { data: IncomeTemplate[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/income_templates/:id
 * @desc    Obtener una plantilla de ingreso por ID
 * @returns { data: IncomeTemplate }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/income_templates
 * @desc    Crear una nueva plantilla de ingreso
 * @body    { name, source, amount, description?, is_recurring }
 * @returns { data: IncomeTemplate }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/income_templates/:id
 * @desc    Actualizar una plantilla de ingreso existente
 * @body    Campos parciales de IncomeTemplate
 * @returns { data: IncomeTemplate }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/income_templates/:id
 * @desc    Eliminar una plantilla de ingreso
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

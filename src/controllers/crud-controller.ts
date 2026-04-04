import { Request, Response } from 'express'
import supabase from '../utils/supabase'
import { ApiResponse } from '../types/index'

/**
 * Fábrica de controladores CRUD genéricos.
 * Recibe el nombre de la tabla de Supabase y devuelve
 * los cinco handlers listos para usarse en el router.
 */
export function createCrudController(table: string) {

  // GET /api/:resource — devuelve todos los registros
  const getAll = async (_req: Request, res: Response): Promise<void> => {
    const { data, error } = await supabase.from(table).select('*')

    if (error) {
      const response: ApiResponse<null> = { error: error.message }
      res.status(500).json(response)
      return
    }

    const response: ApiResponse<typeof data> = { data }
    res.status(200).json(response)
  }

  // GET /api/:resource/:id — devuelve un registro por ID
  const getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      const response: ApiResponse<null> = { error: error.message }
      res.status(404).json(response)
      return
    }

    const response: ApiResponse<typeof data> = { data }
    res.status(200).json(response)
  }

  // POST /api/:resource — crea un nuevo registro
  const create = async (req: Request, res: Response): Promise<void> => {
    const body = req.body

    const { data, error } = await supabase
      .from(table)
      .insert(body)
      .select()
      .single()

    if (error) {
      const response: ApiResponse<null> = { error: error.message }
      res.status(400).json(response)
      return
    }

    const response: ApiResponse<typeof data> = { data }
    res.status(201).json(response)
  }

  // PUT /api/:resource/:id — actualiza un registro existente
  const update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const body = req.body

    const { data, error } = await supabase
      .from(table)
      .update(body)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      const response: ApiResponse<null> = { error: error.message }
      res.status(400).json(response)
      return
    }

    const response: ApiResponse<typeof data> = { data }
    res.status(200).json(response)
  }

  // DELETE /api/:resource/:id — elimina un registro
  const remove = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id)

    if (error) {
      const response: ApiResponse<null> = { error: error.message }
      res.status(400).json(response)
      return
    }

    const response: ApiResponse<null> = { message: `Registro ${id} eliminado correctamente` }
    res.status(200).json(response)
  }

  return { getAll, getById, create, update, remove }
}
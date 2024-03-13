import Persona from '#models/persona'
import { DataResponse } from '#services/data_response'
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonasController {
  
  async index({response}: HttpContext) {
    try {
      const data = await Persona.query()
      return DataResponse('Personas obtenidas', data)
    } catch (error) {
      return response.badRequest(DataResponse(error))
    }
  }
  
  async store({}: HttpContext) {}
  
  async show({}: HttpContext) {}
  
  async update({}: HttpContext) {}
  
  async delete({}: HttpContext) {}
  
}
import Persona from '#models/persona'
import { DataResponse } from '#services/data_response'
import { atletaStoreValidator } from '#validators/atleta'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class AtletasController {
  
  async index({response}: HttpContext) {
    try {
      const data = await Persona.query().preload('datosGenericos').preload('datosDeportivos')
      return DataResponse('Personas obtenidas', data)
    } catch (error) {
      return response.badRequest(DataResponse(error))
    }
  }
  
  async store({request, response}: HttpContext) {
    const trx = await db.transaction()
    try {
      const payload = await request.validateUsing(atletaStoreValidator)
      await Persona.create(payload,  { client: trx })
      
      return DataResponse('Atleta registrado con éxito', payload)
    } catch (error) {
      return response.badRequest(DataResponse(error))
    }
  }
  
  async show({}: HttpContext) {}
  
  async update({}: HttpContext) {}
  
  async delete({}: HttpContext) {}
  
}
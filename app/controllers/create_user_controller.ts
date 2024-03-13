import { DataResponse } from '#services/data_response'
import { createUser } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import User from '#models/user'

export default class userCreate {
  public async index({ response }: HttpContext) {
    try {
      const tipos = await User.query().preload('rol')
      return DataResponse('Usuarios obtenidos', tipos)
    } catch (error) {
      return response.badRequest(DataResponse(error))
    }
  }
  public async create({ request, response }: HttpContext) {
    const trx = await db.transaction()

    try {
      const payload = await request.validateUsing(createUser)

      await User.create(payload, { client: trx })

      trx.commit()
      return DataResponse('Usuario creado exitosamente')
    } catch (error) {
      trx.rollback()
      return response.badRequest(DataResponse(error))
    }
  }
}

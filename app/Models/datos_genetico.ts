import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'

export default class DatosGenetico extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare estatura: number

  @column()
  declare peso: number

  @column()
  declare envergadura: number

  @column()
  declare tipoSangre: string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(user: DatosGenetico) {
    user.id = uuid()
  }
}
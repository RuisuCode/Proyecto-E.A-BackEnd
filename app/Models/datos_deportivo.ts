import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'

export default class DatosDeportivo extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare categoria: string

  @column()
  declare especialidad: string

  @column()
  declare observaciones: string

  @column()
  declare marcas: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(user: DatosDeportivo) {
    user.id = uuid()
  }
}
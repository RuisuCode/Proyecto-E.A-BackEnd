import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import DatosGenetico from './datos_genetico.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import DatosDeportivo from './datos_deportivo.js'

export default class Persona extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare cedula: string

  @column()
  declare datosGenericosId: string

  @column()
  declare primerNombre: string

  @column()
  declare segundoNombre: string

  @column()
  declare primerApellido: string

  @column()
  declare segundoApellido: string

  @column()
  declare genero: string

  @column()
  declare fechaNacimiento: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => DatosGenetico)
  declare datosGenericos: BelongsTo<typeof DatosGenetico>

  @belongsTo(() => DatosDeportivo)
  declare datosDeportivos: BelongsTo<typeof DatosDeportivo>

  @beforeCreate()
  static assignUuid(user: Persona) {
    user.id = uuid()
  }
}
import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { v4 as uuid } from 'uuid'
import Rol from '#models/rol'
import type { HasOne } from '@adonisjs/lucid/types/relations'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['cedula'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static selfAssignPrimaryKey = true

  static authTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '10 min',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
  })

  @column({ isPrimary: true })
  declare id: string

  @column({ serializeAs: null })
  declare rolId: number

  @hasOne(() => Rol)
  declare rol: HasOne<typeof Rol>

  @column()
  declare cedula: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @beforeCreate()
  static assignUuid(user: User) {
    user.id = uuid()
  }
}

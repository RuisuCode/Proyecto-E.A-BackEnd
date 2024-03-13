import db from '@adonisjs/lucid/services/db'
import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

type Options = {
  table: string
  column: string
}

async function unique(value: any, options: Options, field: FieldContext) {
  const row = await db
    .from(options.table)
    .select(options.column)
    .where(options.column, value)
    .first()

  if (row) {
    field.report('{{ field }} ya existe', 'unique', field)
  }
}

export const uniqueRule = vine.createRule(unique)
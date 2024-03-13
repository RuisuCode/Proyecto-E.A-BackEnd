import db from '@adonisjs/lucid/services/db';
import vine from '@vinejs/vine';
async function exists(value, options, field) {
    const row = await db
        .from(options.table)
        .select(options.column)
        .where(options.column, value)
        .first();
    if (!row) {
        field.report('{{ field }} no se encuentra registrado', 'exists', field);
    }
}
export const existsRule = vine.createRule(exists);
//# sourceMappingURL=exists.js.map
import db from '@adonisjs/lucid/services/db';
import vine from '@vinejs/vine';
async function unique(value, options, field) {
    const row = await db
        .from(options.table)
        .select(options.column)
        .where(options.column, value)
        .first();
    if (row) {
        field.report('{{ field }} ya existe', 'unique', field);
    }
}
export const uniqueRule = vine.createRule(unique);
//# sourceMappingURL=unique.js.map
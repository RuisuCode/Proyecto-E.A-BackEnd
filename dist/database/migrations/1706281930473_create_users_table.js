import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'users';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').notNullable().primary();
            table.integer('rol_id').unsigned().references('id').inTable('rols');
            table.string('cedula', 254).notNullable().unique();
            table.string('password').notNullable();
            table.timestamp('created_at').notNullable();
            table.timestamp('updated_at').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1706281930473_create_users_table.js.map
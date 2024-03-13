import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'datos_geneticos';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').notNullable().primary();
            table.float('estatura').notNullable();
            table.float('peso').notNullable();
            table.float('envergadura');
            table.string('tipo_sangre');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1708123652602_create_datos_geneticos_table.js.map
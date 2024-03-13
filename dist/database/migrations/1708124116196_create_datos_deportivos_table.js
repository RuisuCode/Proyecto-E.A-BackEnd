import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'datos_deportivos';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').notNullable().primary();
            table.float('categoria');
            table.float('especialidad');
            table.float('observaciones');
            table.string('marcas');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1708124116196_create_datos_deportivos_table.js.map
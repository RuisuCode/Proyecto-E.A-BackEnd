import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'personas';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').notNullable().primary();
            table
                .uuid('datos_geneticos_id')
                .references('id')
                .inTable('datos_geneticos')
                .onDelete('CASCADE');
            table
                .uuid('datos_deportivos_id')
                .references('id')
                .inTable('datos_deportivos')
                .onDelete('CASCADE');
            table.string('cedula').notNullable().unique();
            table.string('primer_nombre').notNullable();
            table.string('segundo_nombre');
            table.string('primer_apellido').notNullable();
            table.string('segundo_apellido');
            table.enum('genero', ['m', 'f']);
            table.date('fecha_nacimiento');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1708129695485_create_personas_table.js.map
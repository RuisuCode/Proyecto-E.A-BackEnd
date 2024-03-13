import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'rols';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('nombre').unique();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1610252053417_create_rols_table.js.map
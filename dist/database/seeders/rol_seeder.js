import { BaseSeeder } from '@adonisjs/lucid/seeders';
import Rol from '#models/rol';
export default class extends BaseSeeder {
    async run() {
        await Rol.createMany([{ id: 1, nombre: 'ENTRENADOR' }]);
    }
}
//# sourceMappingURL=rol_seeder.js.map
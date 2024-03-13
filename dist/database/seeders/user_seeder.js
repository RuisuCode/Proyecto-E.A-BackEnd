import User from '#models/user';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class userSeeder extends BaseSeeder {
    async run() {
        await User.createMany([
            { cedula: '29700647', password: '7654321L', rolId: 1 },
            { cedula: '28139873', password: 'admin1234', rolId: 1 },
            { cedula: '28274607', password: 'Emma', rolId: 1 },
            { cedula: '28544525', password: 'admin23', rolId: 1 },
            { cedula: '30117549', password: '4986', rolId: 1 },
        ]);
    }
}
//# sourceMappingURL=user_seeder.js.map
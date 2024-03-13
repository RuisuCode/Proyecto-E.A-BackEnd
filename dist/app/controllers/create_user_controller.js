import { DataResponse } from '#services/data_response';
import { createUser } from '#validators/user';
import db from '@adonisjs/lucid/services/db';
import User from '#models/user';
export default class userCreate {
    async index({ response }) {
        try {
            const tipos = await User.query().preload('rol');
            return DataResponse('Usuarios obtenidos', tipos);
        }
        catch (error) {
            return response.badRequest(DataResponse(error));
        }
    }
    async create({ request, response }) {
        const trx = await db.transaction();
        try {
            const payload = await request.validateUsing(createUser);
            await User.create(payload, { client: trx });
            trx.commit();
            return DataResponse('Usuario creado exitosamente');
        }
        catch (error) {
            trx.rollback();
            return response.badRequest(DataResponse(error));
        }
    }
}
//# sourceMappingURL=create_user_controller.js.map
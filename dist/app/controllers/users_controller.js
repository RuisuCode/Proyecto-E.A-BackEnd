import User from '#models/user';
import { DataResponse } from '#services/data_response';
import { loginValidator } from '#validators/auth';
import hash from '@adonisjs/core/services/hash';
import db from '@adonisjs/lucid/services/db';
export default class UsersController {
    async login({ request, response }) {
        try {
            const { cedula, password } = await request.validateUsing(loginValidator);
            const user = await User.query().where('cedula', cedula).first();
            if (!user || !(await hash.verify(user.password, password)))
                throw new Error('Credenciales incorrectos');
            const iniciado = await db
                .from('auth_access_tokens')
                .select('*')
                .where('tokenable_id', user.id)
                .first();
            if (iniciado)
                throw new Error('Usuario con sesión iniciada');
            const token = await User.authTokens.create(user, ['*'], {
                name: `${user.cedula}_token`,
            });
            return {
                data: {
                    token: token.value.release(),
                    rolId: user.rolId,
                },
                message: 'Autenticación correcta',
            };
        }
        catch (error) {
            return response.badRequest(DataResponse(error));
        }
    }
    async logout({ auth, response }) {
        try {
            const autenticado = await auth.check();
            if (!autenticado)
                throw new Error('Token no valido o sesión no existente');
            if (auth.user)
                await User.authTokens.delete(auth.user, auth.user?.currentAccessToken.identifier);
            return DataResponse('Éxito al cerrar sesión');
        }
        catch (error) {
            return response.badRequest(DataResponse(error));
        }
    }
    async verifyToken({ auth, response }) {
        try {
            const autenticado = await auth.check();
            if (!autenticado)
                throw new Error('Token no valido o sesión no existente');
            return DataResponse('Token válido');
        }
        catch (error) {
            return response.badRequest(DataResponse(error));
        }
    }
}
//# sourceMappingURL=users_controller.js.map
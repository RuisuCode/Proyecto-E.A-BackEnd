import { DataResponse } from '#services/data_response';
export default class AuthMiddleware {
    async handle(ctx, next, options = {}) {
        try {
            await ctx.auth.authenticateUsing(options.guards);
            await next();
        }
        catch (error) {
            return ctx.response.unauthorized(DataResponse('No autorizado'));
        }
    }
}
//# sourceMappingURL=auth_middleware.js.map
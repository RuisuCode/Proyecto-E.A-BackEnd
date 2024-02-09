"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataResponse_1 = global[Symbol.for('ioc.use')]("App/Services/DataResponse");
class AuthMiddleware {
    async authenticate(auth, guards) {
        for (let guard of guards) {
            if (await auth.use(guard).check()) {
                auth.defaultGuard = guard;
                return true;
            }
        }
        throw new Error("No autorizado");
    }
    async handle({ auth, response }, next, customGuards) {
        try {
            const guards = customGuards.length ? customGuards : [auth.name];
            await this.authenticate(auth, guards);
            await next();
        }
        catch (error) {
            return response.unauthorized((0, DataResponse_1.DataResponse)(error));
        }
    }
}
exports.default = AuthMiddleware;
//# sourceMappingURL=Auth.js.map
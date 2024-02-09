"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const ApiToken_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ApiToken"));
const AuthValidator_1 = require("../../Validators/AuthValidator");
const DataResponse_1 = global[Symbol.for('ioc.use')]("App/Services/DataResponse");
class AuthController {
    async login({ auth, request, response }) {
        try {
            const { cedula, password } = await request.validate(AuthValidator_1.LoginValidator);
            const user = await User_1.default.findBy("cedula", cedula);
            if (!user || !(await Hash_1.default.verify(user.password, password)))
                throw new Error("Credenciales incorrectos");
            const verifyToken = await ApiToken_1.default.findBy("user_id", user.id);
            if (verifyToken)
                throw new Error("Usuario con sesión iniciada");
            const token = await auth.use("api").generate(user, {
                expiresIn: "15 mins",
            });
            return {
                data: token,
                message: "Autenticación correcta",
            };
        }
        catch (error) {
            return response.badRequest((0, DataResponse_1.DataResponse)(error));
        }
    }
    async logout({ auth, response }) {
        try {
            const autenticado = await auth.use("api").check();
            if (!autenticado) {
                throw new Error("Token no valido o sesión no existente");
            }
            await auth.use("api").revoke();
            return (0, DataResponse_1.DataResponse)("Éxito al cerrar sesión");
        }
        catch (error) {
            return response.badRequest((0, DataResponse_1.DataResponse)(error));
        }
    }
    async refreshToken({ auth, response }) {
        try {
            const autenticado = await auth.check();
            if (!autenticado)
                throw new Error("Token no valido o sesión no existente");
            const token = await auth
                .use("api")
                .generate(auth.user, { expiresIn: "15 mins" });
            await auth.use("api").revoke();
            return (0, DataResponse_1.DataResponse)("Sesión restaurada correctamente", token);
        }
        catch (error) {
            return response.badRequest((0, DataResponse_1.DataResponse)(error));
        }
    }
    async verifyToken({ auth, response }) {
        try {
            const autenticado = await auth.check();
            if (!autenticado)
                throw new Error("Token no valido o sesión no existente");
            return (0, DataResponse_1.DataResponse)("Token valido", auth.user);
        }
        catch (error) {
            return response.badRequest((0, DataResponse_1.DataResponse)(error));
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map
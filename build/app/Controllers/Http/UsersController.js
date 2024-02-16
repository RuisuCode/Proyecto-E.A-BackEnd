"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUserValidator_1 = __importDefault(require("../../Validators/CreateUserValidator"));
const DataResponse_1 = global[Symbol.for('ioc.use')]("App/Services/DataResponse");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async index({ response }) {
        try {
            const tipos = await User_1.default.query().preload("rol");
            return (0, DataResponse_1.DataResponse)("Usuarios obtenidos", tipos);
        }
        catch (error) {
            return response.badRequest((0, DataResponse_1.DataResponse)(error));
        }
    }
    async store({ request, response }) {
        try {
            const payload = await request.validate(CreateUserValidator_1.default);
            await User_1.default.create(payload);
            return (0, DataResponse_1.DataResponse)("Usuario creado exitosamente");
        }
        catch (error) {
            return response.badRequest((0, DataResponse_1.DataResponse)(error));
        }
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map
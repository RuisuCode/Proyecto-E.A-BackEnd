"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class LoginValidator {
    constructor() {
        this.schema = Validator_1.schema.create({
            cedula: Validator_1.schema.string(),
            password: Validator_1.schema.string(),
        });
        this.messages = {
            "cedula.required": "Cédula requerida",
            "cedula.unique": "Cédula ya registrada",
            "password.required": "Contraseña requerida",
        };
    }
}
exports.LoginValidator = LoginValidator;
//# sourceMappingURL=AuthValidator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateUserValidator {
    constructor() {
        this.schema = Validator_1.schema.create({
            cedula: Validator_1.schema.number([
                Validator_1.rules.unique({
                    table: "users",
                    column: "cedula",
                }),
            ]),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(6)]),
            rol_id: Validator_1.schema.number.optional([
                Validator_1.rules.exists({
                    table: "rols",
                    column: "id",
                }),
            ]),
        });
        this.messages = {
            "cedula.required": "Cédula requerida",
            "cedula.unique": "Ya existe este usuario",
            "password.required": "Ingrese la contraseña de la cuenta",
            "password.minLength": "Contraseña demasiado corta",
        };
    }
}
exports.default = CreateUserValidator;
//# sourceMappingURL=CreateUserValidator.js.map
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class CreateUserValidator {
  public schema = schema.create({
    cedula: schema.number([
      rules.unique({
        table: "users",
        column: "cedula",
      }),
    ]),
    password: schema.string({}, [rules.minLength(6)]),
    rol_id: schema.number.optional([
      rules.exists({
        table: "rols",
        column: "id",
      }),
    ]),
  });

  public messages = {
    "cedula.required": "Cédula requerida",
    "cedula.unique": "Ya existe este usuario",
    "password.required": "Ingrese la contraseña de la cuenta",
    "password.minLength": "Contraseña demasiado corta",
  };
}

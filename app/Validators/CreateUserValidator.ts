import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class CreateUserValidator {
  public schema = schema.create({
    ci: schema.number([
      rules.unique({
        table: "users",
        column: "ci",
      }),
    ]),
    password: schema.string({}, [rules.minLength(6)]),
  });

  public messages = {
    "email.required": "Introduce tu correo electrónico",
    "email.unique": "Correo electrónico ya está en uso",
    "email.email": "Dirección de correo electrónico no válida",
    "password.required": "Ingrese la contraseña de la cuenta",
    "password.minLength": "Contraseña demasiado corta",
  };
}

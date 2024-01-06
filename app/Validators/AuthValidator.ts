import { schema, rules } from "@ioc:Adonis/Core/Validator";

export class LoginValidator {
  public schema = schema.create({
    ci: schema.string([rules.unique({ table: "users", column: "id" })]),
    password: schema.string(),
  });
  public messages = {
    "ci.required": "Introduce tu Cedula",
    "ci.unique": "Cedula ya registrada",
    "password.required": "Ingrese la contraseña de la cuenta",
  };
}

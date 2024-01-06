import { schema } from "@ioc:Adonis/Core/Validator";

export class LoginValidator {
  public schema = schema.create({
    cedula: schema.string(),
    password: schema.string(),
  });
  public messages = {
    "cedula.required": "Cédula requerida",
    "cedula.unique": "Cédula ya registrada",
    "password.required": "Contraseña requerida",
  };
}

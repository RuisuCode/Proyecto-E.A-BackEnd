import { schema } from "@ioc:Adonis/Core/Validator";

export class LoginValidator {
  public schema = schema.create({
    ci: schema.number(),
    password: schema.string(),
  });

  public messages = {
    "ci.required": "Introduce tu Cedula",
    "ci.unique": "Cedula ya registrada",
    "ci.ci": "Numero de cedula no valido",
    "password.required": "Ingrese la contraseña de la cuenta",
  };
}

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";
import ApiToken from "App/Models/ApiToken";
import { LoginValidator } from "../../Validators/AuthValidator";
import { DataResponse } from "App/Services/DataResponse";

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    try {
      const { ci, password } = await request.validate(LoginValidator);

      const user = await User.findBy("ci", ci);
      if (!user || !(await Hash.verify(user.password, password)))
        throw new Error("Credenciales incorrectos");

      const verifyToken = await ApiToken.findBy("user_id", user.id);
      if (verifyToken) throw new Error("Usuario con sesion iniciada");

      const token = await auth.use("api").generate(user, {
        // expiresIn: "1 days",
        expiresIn: "30 mins",
        // expiresIn: "1 mins",
      });

      return {
        data: token,
        message: "Autenticacion correcta",
      };
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      const autenticado = await auth.use("api").check();
      if (!autenticado)
        throw new Error("Token no valido o sesion no existente");
      await auth.use("api").revoke();
      return DataResponse("Exito al cerrar sesión");
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }

  public async refreshToken({ auth, response }) {
    try {
      const autenticado = await auth.check();
      if (!autenticado)
        throw new Error("Token no valido o sesion no existente");
      const token = await auth
        .use("api")
        .generate(auth.user, { expiresIn: "30 mins" });
      await auth.use("api").revoke();
      return DataResponse("Sesion restaurada correctamente", token);
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }
}

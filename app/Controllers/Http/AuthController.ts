import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";
import ApiToken from "App/Models/ApiToken";
import { LoginValidator } from "../../Validators/AuthValidator";
import { DataResponse } from "App/Services/DataResponse";

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    try {
      const { cedula, password } = await request.validate(LoginValidator);

      const user = await User.findBy("cedula", cedula);
      if (!user || !(await Hash.verify(user.password, password)))
        throw new Error("Credenciales incorrectos");

      const verifyToken = await ApiToken.findBy("user_id", user.id);
      if (verifyToken) throw new Error("Usuario con sesión iniciada");

      const token = await auth.use("api").generate(user, {
        expiresIn: "15 mins",
      });

      return {
        data: token,
        message: "Autenticación correcta",
      };
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      const autenticado = await auth.use("api").check();
      if (!autenticado) {
        throw new Error("Token no valido o sesión no existente");
      }
      await auth.use("api").revoke();
      return DataResponse("Éxito al cerrar sesión");
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }

  public async refreshToken({ auth, response }) {
    try {
      const autenticado = await auth.check();
      if (!autenticado)
        throw new Error("Token no valido o sesión no existente");
      const token = await auth
        .use("api")
        .generate(auth.user, { expiresIn: "15 mins" });
      await auth.use("api").revoke();
      return DataResponse("Sesión restaurada correctamente", token);
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }

  public async verifyToken({ auth, response }) {
    try {
      const autenticado = await auth.check();
      if (!autenticado)
        throw new Error("Token no valido o sesión no existente");
      return DataResponse("Token valido", auth.user);
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }
}

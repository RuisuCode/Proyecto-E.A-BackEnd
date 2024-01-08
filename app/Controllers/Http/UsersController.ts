import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CreateUserValidator from "../../Validators/CreateUserValidator";
import { DataResponse } from "App/Services/DataResponse";
import User from "App/Models/User";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const tipos = await User.query().preload("rol");
      return DataResponse("Usuarios obtenidos", tipos);
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }

  public async store({ request, response }) {
    try {
      const payload = await request.validate(CreateUserValidator);
      await User.create(payload);
      return DataResponse("Usuario creado exitosamente");
    } catch (error) {
      return response.badRequest(DataResponse(error));
    }
  }
}

// import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CreateUserValidator from "../../Validators/CreateUserValidator";
import { DataResponse } from "App/Services/DataResponse";
import Database from "@ioc:Adonis/Lucid/Database";
import User from "App/Models/User";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  store(ctx: HttpContextContract): any {
    throw new Error("Method not implemented.");
  }
  public async create({ request, response }) {
    const trx = await Database.transaction();

    try {
      const payload = await request.validate(CreateUserValidator);

      await User.create(payload, { client: trx });

      trx.commit();
      return DataResponse("Usuario creado exitosamente");
    } catch (error) {
      trx.rollback();
      return response.badRequest(DataResponse(error));
    }
  }
}

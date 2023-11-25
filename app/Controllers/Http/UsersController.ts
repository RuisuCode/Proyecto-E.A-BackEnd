import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async store({ request }: HttpContextContract) {
    // const {username, cedula ,password} = request.all();
    const user = new User();
  }
}

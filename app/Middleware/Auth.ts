import type { GuardsList } from "@ioc:Adonis/Addons/Auth";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { DataResponse } from "App/Services/DataResponse";

export default class AuthMiddleware {
  protected async authenticate(
    auth: HttpContextContract["auth"],
    guards: (keyof GuardsList)[]
  ) {
    for (let guard of guards) {
      if (await auth.use(guard).check()) {
        auth.defaultGuard = guard;
        return true;
      }
    }

    throw new Error("No autorizado");
  }

  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    customGuards: (keyof GuardsList)[]
  ) {
    try {
      const guards = customGuards.length ? customGuards : [auth.name];
      await this.authenticate(auth, guards);
      await next();
    } catch (error) {
      return response.unauthorized(DataResponse(error));
    }
  }
}

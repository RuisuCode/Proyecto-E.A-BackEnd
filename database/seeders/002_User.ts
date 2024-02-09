import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    await User.updateOrCreateMany("id", [
      {
        id: 1,
        cedula: "29700647",
        password: "7654321L",
        rolId: 1,
      },
    ]);
  }
}

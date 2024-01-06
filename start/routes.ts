import Route from "@ioc:Adonis/Core/Route";
import "./routes/auth";
import "./routes/user";

Route.get("/", async () => {
  return { hello: "Bienvenido" };
});

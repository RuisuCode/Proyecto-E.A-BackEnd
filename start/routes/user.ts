import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/users", "UsersController.index");
}).middleware(["auth"]);

Route.post("/user", "UsersController.store");

import Route from "@ioc:Adonis/Core/Route";

Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");
Route.post("/refresh_token", "AuthController.refreshToken");
Route.get("/verify_token", "AuthController.verifyToken");

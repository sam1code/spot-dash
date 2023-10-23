package routes

import (
	controllers "github.com/sam1code/fleet/controllers"
)

func auth() {
	auth := app.Group("/auth")

	auth.Post("/login", controllers.Login)
	auth.Get("/logout", controllers.Logout)
}

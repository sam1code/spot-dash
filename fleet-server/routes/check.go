package routes

import (
	controllers "github.com/sam1code/fleet/controllers"
)

func health() {
	app.Get("/", controllers.HealthCheck)
}

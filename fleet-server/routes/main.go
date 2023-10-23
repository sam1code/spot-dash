package routes

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/sam1code/fleet/controllers"
)

var app *fiber.App = *App()

func Main() {

	auth()
	ec2Client()
	cwClient()
	health()

	app.Use("*", controllers.NotFound)
	app.Listen(":" + os.Getenv("PORT"))

}

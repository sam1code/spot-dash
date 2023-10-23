package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func App() **fiber.App {
	// This is the index function for the routes package
	app := fiber.New()

	corsConfig := cors.Config{
		AllowOrigins:     "*",
		AllowMethods:     "GET,POST,PUT,DELETE",
		AllowHeaders:     "Origin, Content-Type, Accept, X-Access-Token, X-Refresh-Token",
		AllowCredentials: true,
	}

	app.Use(cors.New(corsConfig))
	app.Use(logger.New())

	return &app
}

package controllers

import "github.com/gofiber/fiber/v2"

func NotFound(c *fiber.Ctx) error {
	response := &fiber.Map{
		"data":    nil,
		"isError": true,
	}

	return c.Status(404).JSON(response)

}

func HealthCheck(c *fiber.Ctx) error {
	response := &fiber.Map{
		"data":    &fiber.Map{"message": "OK"},
		"isError": false,
	}

	return c.Status(200).JSON(response)

}

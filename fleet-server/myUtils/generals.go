package myUtils

import "github.com/gofiber/fiber/v2"

func ErrorRespoonse(c *fiber.Ctx, err error) error {
	response := &fiber.Map{
		"data":    &fiber.Map{"message": err.Error()},
		"isError": true,
	}

	return c.Status(404).JSON(response)
}

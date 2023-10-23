package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	myUtils "github.com/sam1code/fleet/myUtils"
)

func Login(c *fiber.Ctx) error {

	user := new(myUtils.User)

	if err := c.BodyParser(user); err != nil {
		return myUtils.ErrorRespoonse(c, err)
	}

	// print user

	// check if user exists
	if !myUtils.UserExists(user.UserName, user.Password) {

		err := fmt.Errorf("user does not exist")
		return myUtils.ErrorRespoonse(c, err)

	}

	ctx, err := myUtils.GenerateJWT(user.UserName, c)

	if err != nil {
		return myUtils.ErrorRespoonse(c, err)
	}

	return (*ctx).Status(200).JSON(
		&fiber.Map{
			"message": "Login successful",
			"isError": false,
		},
	)

}

func Logout(c *fiber.Ctx) error {

	c.Response().Header.Del("x-access-token")
	c.Response().Header.Del("x-refresh-token")

	response := &fiber.Map{
		"data": &fiber.Map{
			"message": "Logout successful",
		},
		"isError": false,
	}

	return c.Status(200).JSON(response)

}

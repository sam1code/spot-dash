package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sam1code/fleet/services"
)

func CPUUtilizationMatrics(c *fiber.Ctx) error {
	Region := c.Query("region")
	instanceID := c.Query("instanceid")
	resp, err := services.CpuUtilizationMatrics(Region, instanceID)
	if err != nil {
		return err
	}
	return c.Status(200).JSON(resp)
}

func NetworkInMatrics(c *fiber.Ctx) error {
	Region := c.Query("region")
	instanceID := c.Query("instanceid")
	resp, err := services.NetworkInMatrics(Region, instanceID)
	if err != nil {
		return err
	}
	return c.Status(200).JSON(resp)
}

func NetworkOutMatrics(c *fiber.Ctx) error {
	Region := c.Query("region")
	instanceID := c.Query("instanceid")
	resp, err := services.NetworkOutMatrics(Region, instanceID)
	if err != nil {
		return err
	}
	return c.Status(200).JSON(resp)
}

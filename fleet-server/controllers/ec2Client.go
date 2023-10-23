package controllers

import (
	"github.com/aws/aws-sdk-go/service/ec2"
	"github.com/gofiber/fiber/v2"
	"github.com/sam1code/fleet/services"
)

func ListFleets(c *fiber.Ctx) error {

	Region := c.Query("region")

	fleets, err := services.ListFleets(Region)

	if err != nil {
		return c.SendString(err.Error())
	}

	return c.Status(200).JSON(fleets)

}

func ListFleetInstances(c *fiber.Ctx) error {

	Region := c.Query("region")
	fleetID := c.Query("fleetid")

	fleetInstances, err := services.ListFleetInstances(Region, fleetID)

	if err != nil {
		return c.SendString(err.Error())
	}

	instances := [][]*ec2.Reservation{}
	var CPU, NWIn, NWOut float64
	var count int

	for _, instance := range fleetInstances.ActiveInstances {
		instanceID := *instance.InstanceId
		res, err := services.CalculateAVGCPUUtilization(Region, instanceID)
		if err != nil {
			return c.SendString(err.Error())
		}
		resIn, resOut, err := services.AVGNWInAndOut(Region, instanceID)
		if err != nil {
			return c.SendString(err.Error())
		}
		CPU += res
		NWIn += resIn
		NWOut += resOut
		count++
		resp, err := services.DescribeInstance(Region, instanceID)
		if err != nil {
			return c.SendString(err.Error())
		}
		instances = append(instances, resp.Reservations)
	}

	avgCPU := CPU / float64(count)
	avgNWIn := NWIn / float64(count)
	avgNWOut := NWOut / float64(count)

	return c.Status(200).JSON(&fiber.Map{
		"instances":              instances,
		"avgFleetCPUUtilization": avgCPU,
		"avgFleetNWIn":           avgNWIn,
		"avgFleetNWOut":          avgNWOut,
	})

}

type LaunchTempletes struct {
	LaunchTemplateId      string
	LaunchTemplateVersion string
}

func LunchTemplates(c *fiber.Ctx) error {

	Region := c.Query("region")
	fleetID := c.Query("fleetid")

	resp, err := services.FleetDetailsByID(Region, fleetID)

	if err != nil {
		return c.SendString(err.Error())
	}

	// make a list of launch template ids and versions from resp

	launchTemplates := []LaunchTempletes{}

	for _, fleet := range resp.Fleets {
		for _, launchTemplate := range fleet.LaunchTemplateConfigs {
			lt := LaunchTempletes{
				LaunchTemplateId:      *launchTemplate.LaunchTemplateSpecification.LaunchTemplateId,
				LaunchTemplateVersion: *launchTemplate.LaunchTemplateSpecification.Version,
			}
			launchTemplates = append(launchTemplates, lt)
		}
	}

	// loop through the list of launch template ids and versions and get the launch templates

	launchTemplateOP := []*ec2.DescribeLaunchTemplateVersionsOutput{}

	for _, ltp := range launchTemplates {
		ltr, err := services.LaunchTemplateByID(Region, ltp.LaunchTemplateId, ltp.LaunchTemplateVersion)
		if err != nil {
			return c.SendString(err.Error())
		}
		launchTemplateOP = append(launchTemplateOP, ltr)
	}

	return c.Status(200).JSON(launchTemplateOP)

}

func DescribeInstance(c *fiber.Ctx) error {

	Region := c.Query("region")
	instanceID := c.Query("instanceid")

	instances, err := services.DescribeInstance(Region, instanceID)

	if err != nil {
		return c.SendString(err.Error())
	}

	return c.Status(200).JSON(instances)
}

package routes

import (
	"github.com/sam1code/fleet/controllers"
	"github.com/sam1code/fleet/myUtils"
)

func ec2Client() {

	awsGroup := app.Group("/aws/ec2client")

	awsGroup.Get("/list-fleets", myUtils.DecodeJWT, controllers.ListFleets)
	awsGroup.Get("/fleet-instances", myUtils.DecodeJWT, controllers.ListFleetInstances)
	awsGroup.Get("/desc-instance", myUtils.DecodeJWT, controllers.DescribeInstance)
	awsGroup.Get("/fleet-lunch-templates", myUtils.DecodeJWT, controllers.LunchTemplates)

}

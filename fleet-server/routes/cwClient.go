package routes

import (
	"github.com/sam1code/fleet/controllers"
	"github.com/sam1code/fleet/myUtils"
)

func cwClient() {

	awsGroup := app.Group("/aws/cw-client")

	awsGroup.Get("/cpu-utilization", myUtils.DecodeJWT, controllers.CPUUtilizationMatrics)
	awsGroup.Get("/nw-utilization/in", myUtils.DecodeJWT, controllers.NetworkInMatrics)
	awsGroup.Get("/nw-utilization/out", myUtils.DecodeJWT, controllers.NetworkOutMatrics)

}

package services

import (
	"github.com/aws/aws-sdk-go/service/ec2"
)

func ListFleets(Region string) ([]ec2.FleetData, error) {
	var fleets []ec2.FleetData

	ec2Client := *ec2Client(Region)

	fleetList, err := ec2Client.DescribeFleets(&ec2.DescribeFleetsInput{})

	if err != nil {
		return fleets, err
	}

	for _, fleet := range fleetList.Fleets {
		fleets = append(fleets, *fleet)
	}

	return fleets, nil

}

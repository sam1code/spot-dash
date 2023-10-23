package services

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/ec2"
)

func ListFleetInstances(Region string, fleetID string) (*ec2.DescribeFleetInstancesOutput, error) {
	ec2Client := *ec2Client(Region)

	params := &ec2.DescribeFleetInstancesInput{
		FleetId: aws.String(fleetID),
	}

	fleetInstances, err := ec2Client.DescribeFleetInstances(params)

	if err != nil {
		return nil, err
	}

	return fleetInstances, nil
}

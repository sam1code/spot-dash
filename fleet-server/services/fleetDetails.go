package services

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/ec2"
)

func FleetDetailsByID(
	Region string,
	fleetID string,
) (*ec2.DescribeFleetsOutput, error) {

	ec2Client := *ec2Client(Region)

	params := &ec2.DescribeFleetsInput{
		FleetIds: []*string{
			aws.String(fleetID),
		},
	}

	fleetDetails, err := ec2Client.DescribeFleets(params)

	if err != nil {
		return nil, err
	}

	return fleetDetails, nil

}

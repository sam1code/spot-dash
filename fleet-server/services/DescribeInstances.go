package services

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/ec2"
)

func DescribeInstance(Region string, instanceID string) (*ec2.DescribeInstancesOutput, error) {
	ec2Client := *ec2Client(Region)

	params := &ec2.DescribeInstancesInput{
		Filters: []*ec2.Filter{
			{
				Name:   aws.String("instance-id"),
				Values: []*string{aws.String(instanceID)},
			},
		},
	}

	resp, err := ec2Client.DescribeInstances(params)

	if err != nil {
		return nil, err
	}

	return resp, nil
}

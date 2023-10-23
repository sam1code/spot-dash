package services

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/ec2"
)

func LaunchTemplateByID(Region string, LaunchTemplateId string, Version string) (*ec2.DescribeLaunchTemplateVersionsOutput, error) {
	ec2Client := *ec2Client(Region)

	resp, err := ec2Client.DescribeLaunchTemplateVersions(&ec2.DescribeLaunchTemplateVersionsInput{
		LaunchTemplateId: aws.String(LaunchTemplateId),
		Versions: []*string{
			aws.String(Version),
		},
	})

	if err != nil {
		return nil, err
	}

	return resp, nil
}

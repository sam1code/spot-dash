package services

import (
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ec2"
)

func ec2Client(Region string) **ec2.EC2 {
	s := session.Must(session.NewSession())
	cfg := &aws.Config{}
	cfg.Region = aws.String(Region)
	cr := credentials.NewStaticCredentials(os.Getenv("AWS_ACCESS_KEY"), os.Getenv("AWS_SECRET_KEY"), "")
	cfg.Credentials = cr

	ec2Client := ec2.New(s, cfg)

	return &ec2Client
}

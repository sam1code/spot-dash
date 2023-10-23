package services

import (
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/cloudwatch"
)

func cwClient(Region string) **cloudwatch.CloudWatch {

	s := session.Must(session.NewSession())
	cfg := &aws.Config{}
	cfg.Region = aws.String(Region)
	cr := credentials.NewStaticCredentials(os.Getenv("AWS_ACCESS_KEY"), os.Getenv("AWS_SECRET_KEY"), "")
	cfg.Credentials = cr

	cwClient := cloudwatch.New(s, cfg)

	return &cwClient
}

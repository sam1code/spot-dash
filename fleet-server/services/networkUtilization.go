package services

import (
	"fmt"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/cloudwatch"
)

func NetworkInMatrics(Region string, instanceID string) (*cloudwatch.GetMetricStatisticsOutput, error) {

	cwClient := *cwClient(Region)

	startTime := time.Now().Add(-time.Hour).UTC()
	endTime := time.Now().UTC()
	period := int64(600)

	input := &cloudwatch.GetMetricStatisticsInput{
		Dimensions: []*cloudwatch.Dimension{
			{
				Name:  aws.String("InstanceId"),
				Value: aws.String(instanceID),
			},
		},
		MetricName: aws.String("NetworkIn"),
		Namespace:  aws.String("AWS/EC2"),
		StartTime:  aws.Time(startTime),
		EndTime:    aws.Time(endTime),
		Period:     aws.Int64(period),
		Statistics: []*string{
			aws.String(cloudwatch.StatisticAverage),
		},
	}

	resp, err := cwClient.GetMetricStatistics(input)

	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}

	return resp, nil
}

func NetworkOutMatrics(Region string, instanceID string) (*cloudwatch.GetMetricStatisticsOutput, error) {

	cwClient := *cwClient(Region)

	startTime := time.Now().Add(-time.Hour).UTC()
	endTime := time.Now().UTC()
	period := int64(600)

	input := &cloudwatch.GetMetricStatisticsInput{
		Dimensions: []*cloudwatch.Dimension{
			{
				Name:  aws.String("InstanceId"),
				Value: aws.String(instanceID),
			},
		},
		MetricName: aws.String("NetworkOut"),
		Namespace:  aws.String("AWS/EC2"),
		StartTime:  aws.Time(startTime),
		EndTime:    aws.Time(endTime),
		Period:     aws.Int64(period),
		Statistics: []*string{
			aws.String(cloudwatch.StatisticAverage),
		},
	}

	resp, err := cwClient.GetMetricStatistics(input)

	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}

	return resp, nil
}

func AVGNWInAndOut(Region string, instanceID string) (float64, float64, error) {

	respNWIn, err := NetworkInMatrics(Region, instanceID)

	if err != nil {
		return 0, 0, err
	}

	respNWOut, err := NetworkOutMatrics(Region, instanceID)

	if err != nil {
		return 0, 0, err
	}

	var sumNWIn float64
	var sumNWOut float64

	for _, point := range respNWIn.Datapoints {
		sumNWIn += *point.Average
	}

	for _, point := range respNWOut.Datapoints {
		sumNWOut += *point.Average
	}

	avgNWIn := sumNWIn / float64(len(respNWIn.Datapoints))
	avgNWOut := sumNWOut / float64(len(respNWOut.Datapoints))

	return avgNWIn, avgNWOut, nil
}

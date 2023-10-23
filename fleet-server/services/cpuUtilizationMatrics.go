package services

import (
	"fmt"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/cloudwatch"
)

func CpuUtilizationMatrics(region string, instanceID string) (*cloudwatch.GetMetricStatisticsOutput, error) {

	cwClient := *cwClient(region)

	startTime := time.Now().Add(-time.Hour).UTC()
	endTime := time.Now().UTC()

	params := &cloudwatch.GetMetricStatisticsInput{
		Dimensions: []*cloudwatch.Dimension{
			{
				Name:  aws.String("InstanceId"),
				Value: aws.String(instanceID),
			},
		},
		MetricName: aws.String("CPUUtilization"),
		Namespace:  aws.String("AWS/EC2"),
		StartTime:  aws.Time(startTime),
		EndTime:    aws.Time(endTime),
		Period:     aws.Int64(600), // 10 minutes
		Statistics: []*string{
			aws.String(cloudwatch.StatisticAverage),
		},
	}

	resp, err := cwClient.GetMetricStatistics(params)

	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}

	return resp, nil
}

func CalculateAVGCPUUtilization(region string, instanceID string) (float64, error) {

	resp, err := CpuUtilizationMatrics(region, instanceID)

	if err != nil {
		return 0, err
	}

	var sum float64

	for _, point := range resp.Datapoints {
		sum += *point.Average
	}

	avg := sum / float64(len(resp.Datapoints))

	return avg, nil
}

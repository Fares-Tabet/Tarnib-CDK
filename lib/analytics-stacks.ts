import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AnalyticsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // TODO: Figure out how to create a lambda though CDK and create code for it here
    // We currently created the Lambda on the console: TarnibAnalyticsJsonExtractor

    // S3 bucket that will hold the analytics data
    new s3.Bucket(this, 'tarnib-analytics-bucket', {
      bucketName: 'tarnib-analytics-bucket',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true, // Deletes all items in the bucket if the bucket is removed through CDK
      lifecycleRules: [{expiration: cdk.Duration.days(90)}] // delete any object older than 3 months
    })
  }
}

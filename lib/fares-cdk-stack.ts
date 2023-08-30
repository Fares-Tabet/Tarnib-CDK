import * as cdk from 'aws-cdk-lib';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FaresCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const lambda= new Function(this, 'lambda', {
    //   runtime: Runtime.JAVA_11,

    // })
  }
}

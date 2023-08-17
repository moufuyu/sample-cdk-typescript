import { Duration, Stack, StackProps} from 'aws-cdk-lib';
import {Function, Runtime, AssetCode} from "aws-cdk-lib/aws-lambda";
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SampleCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Function(this, "HelloWorld",{
      functionName: 'HelloWorld',
      handler: "handler.handler",
      runtime: Runtime.NODEJS_14_X,
      code: new AssetCode('./src'), // lambda code path
      memorySize: 512,
      timeout: Duration.seconds(10),
    })
  }
}

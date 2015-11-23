require('dotenv').load();

module.exports = {
  region: 'ap-northeast-1',
  handler: 'index.handler',
  role: process.env.ROLE,
  functionName: 'api_v1_hoge',
  timeout: 10,
  memorySize: 128,
  runtime: 'nodejs'
  // eventSource: {
  //  EventSourceArn: <event source such as kinesis ARN>,
  //  BatchSize: 200,
  //  StartingPosition: "TRIM_HORIZON"
  //}
}

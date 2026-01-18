// Worker: executes workflows and activities
// Must be running for Temporal to execute your code

import { Worker, NativeConnection } from '@temporalio/worker';
import * as activities from './activities';

async function run() {
  const connection = await NativeConnection.connect({
    address: process.env.TEMPORAL_ADDRESS || '127.0.0.1:7233',
  });

  const worker = await Worker.create({
    connection,
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'greeting-queue',
  });

  console.log('Worker started, waiting for tasks...');
  await worker.run();
}

run().catch((err) => {
  console.error('Worker error:', err);
  process.exit(1);
});

// Client: starts workflows and queries their status

import { Client, Connection } from '@temporalio/client';
import { greetingWorkflow } from './workflows';

async function run() {
  const connection = await Connection.connect({
    address: process.env.TEMPORAL_ADDRESS || '127.0.0.1:7233',
  });

  const client = new Client({ connection });

  // Start the workflow
  const handle = await client.workflow.start(greetingWorkflow, {
    taskQueue: 'greeting-queue',
    workflowId: `greeting-${Date.now()}`,
    args: ['Miguel', 'miguel@example.com'],
  });

  console.log(`Workflow started: ${handle.workflowId}`);

  // Wait for the result
  const result = await handle.result();
  console.log(`Result: ${result}`);
}

run().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});

// Workflows: orchestrate activities
// IMPORTANT: workflows must be deterministic (no direct I/O, no Math.random, etc.)

import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

// Proxy to call activities with automatic retries
const { greet, sendEmail } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
  retry: {
    maximumAttempts: 3,
  },
});

// Simple workflow: greet and send email
export async function greetingWorkflow(name: string, email: string): Promise<string> {
  const greeting = await greet(name);
  await sendEmail(email, greeting);
  return `Workflow completed: ${greeting}`;
}

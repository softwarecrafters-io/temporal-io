// Activities: tasks that can fail and retry
// This is where you put logic that interacts with the outside world (APIs, DB, etc.)

export async function greet(name: string): Promise<string> {
  console.log(`Activity: greeting ${name}`);
  return `Hello, ${name}!`;
}

export async function sendEmail(to: string, message: string): Promise<boolean> {
  console.log(`Activity: sending email to ${to}`);
  // Simulate sending email
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Activity: email sent to ${to}`);
  return true;
}

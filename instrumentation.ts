export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { BugStackClient } = await import('bugstack-sdk');
    BugStackClient.init({
      apiKey: process.env.BUGSTACK_API_KEY!,
      endpoint: process.env.BUGSTACK_ENDPOINT || "https://bugstack-error-service.onrender.com/api/capture"
    });
  }
}

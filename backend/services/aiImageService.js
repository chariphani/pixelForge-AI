const MODEL = "@cf/black-forest-labs/flux-1-schnell";

export async function generateWithCloudflare(prompt) {
  const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = process.env;
  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN) {
    const error = new Error(
      "Cloudflare Workers AI credentials are not configured. Add them to backend/.env.",
    );
    error.statusCode = 503;
    throw error;
  }

  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${MODEL}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
    signal: AbortSignal.timeout(120000),
  });

  if (!response.ok) {
    const detail = await response.text();
    const error = new Error(
      `Image provider error (${response.status}): ${detail.slice(0, 500)}`,
    );
    error.statusCode = response.status === 429 ? 429 : 502;
    throw error;
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const payload = await response.json();
    const base64 = payload.result?.image || payload.result?.data?.[0];
    if (!base64)
      throw new Error("The AI provider returned an unexpected response.");
    return Buffer.from(base64, "base64");
  }

  return Buffer.from(await response.arrayBuffer());
}

export { MODEL };

/**
 * Centralized Webhook Configuration and Dispatcher
 * Webhook URL configured via VITE_WEBHOOK_URL with production fallback
 */

const RAW_WEBHOOK_URL =
  import.meta.env.VITE_WEBHOOK_URL ||
  "https://n8n.srv756914.hstgr.cloud/webhook/islamic center";

// Safely handle any unencoded spaces in the URL path (e.g. "islamic center" -> "islamic%20center")
export const WEBHOOK_URL = encodeURI(RAW_WEBHOOK_URL.trim());

export interface WebhookPayload {
  event: string;
  data?: Record<string, any>;
  utms?: Record<string, string | null>;
  timestamp?: string;
  [key: string]: any;
}

/**
 * Dispatches event data to the configured n8n webhook endpoint
 */
export async function sendWebhook(payload: WebhookPayload): Promise<boolean> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        timestamp: payload.timestamp || new Date().toISOString(),
      }),
    });
    return response.ok;
  } catch (error) {
    console.error("Webhook dispatch failed:", error);
    return false;
  }
}

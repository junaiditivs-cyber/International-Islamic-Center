/**
 * Centralized Contact & Institution Details
 * Configurable via environment variables with fallback defaults.
 */

// Phone / WhatsApp Number configuration
const RAW_PHONE = (
  import.meta.env.VITE_CONTACT_PHONE ||
  import.meta.env.VITE_WHATSAPP_NUMBER ||
  "03295631797"
).trim();

// Clean digits only for API / wa.me / tel links
const digits = RAW_PHONE.replace(/\D/g, "");

// Convert local Pakistan format 03XXXXXXXXX to international 923XXXXXXXXX
const intlDigits = digits.startsWith("03")
  ? "92" + digits.slice(1)
  : digits.startsWith("92")
  ? digits
  : digits;

export const CONTACT_WHATSAPP = "+" + intlDigits; // e.g. "+923295631797"
export const CONTACT_PHONE_TEL = "+" + intlDigits; // e.g. "+923295631797"

// Clean display string for human eyes
export const CONTACT_PHONE_DISPLAY = RAW_PHONE.startsWith("03")
  ? `+92 ${RAW_PHONE.slice(1, 4)} ${RAW_PHONE.slice(4)}`
  : RAW_PHONE; // e.g. "+92 329 5631797"

// Contact / Notification Email configuration
export const CONTACT_EMAIL = (
  import.meta.env.VITE_CONTACT_EMAIL || "mustafauetnet@gmail.com"
).trim();

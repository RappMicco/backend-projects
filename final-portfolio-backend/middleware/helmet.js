import helmet from "helmet";

export const contactSecurity = helmet({
  contentSecurityPolicy: false,
  frameguard: { action: "deny" }, // prevent clickjacking
  referrerPolicy: { policy: "no-referrer" }
});
import { ConvexHttpClient } from "convex/browser";

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export function getConvexClient() {
  return new ConvexHttpClient(getEnvVar("VITE_CONVEX_URL"));
}

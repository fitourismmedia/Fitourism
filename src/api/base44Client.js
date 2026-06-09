import { createClient } from "@base44/sdk";
import { appParams } from "@/lib/app-params";

export const base44 = createClient({
  appId: appParams.appId || "fitourism",
  token: appParams.token,
  appBaseUrl: window.location.origin,
  serverUrl: "http://localhost:3000",
  functionsVersion: appParams.functionsVersion || "v1"
});

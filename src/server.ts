import app from "./app";
import { app as appEnv } from "./lib/env";

if (!appEnv.port) {
  throw new Error("The PORT environment variable is missing from the .env file.");
}

if (!appEnv.apiUrl) {
  throw new Error("The API_URL environment variable is missing from the .env file.");
}

app.listen(appEnv.port, () => {
  console.log(`Server running at ${appEnv.apiUrl}:${appEnv.port}`);
});

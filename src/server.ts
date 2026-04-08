import app from "@/app";

const PORT = process.env.PORT;
const API_URL = process.env.API_URL;

if (!PORT) {
  throw new Error("The PORT environment variable is missing from the .env file.");
}

if (!API_URL) {
  throw new Error("The API_URL environment variable is missing from the .env file.");
}

app.listen(PORT, () => {
  console.log(`Server running at ${API_URL}:${PORT}`);
});

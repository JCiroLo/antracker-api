export const app = {
  port: process.env.PORT,
  apiUrl: process.env.API_URL,
  maxDaysExpirationWarning: Number(process.env.MAX_DAYS_EXPIRATION_WARNING),
};

export const firebase = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

export const supabase = {
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_KEY,
};

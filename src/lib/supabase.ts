import dotenv from "dotenv";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("The SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables are missing from the .env file.");
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;

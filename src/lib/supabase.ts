import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { supabase as supabaseEnv } from "./env";
import type { SupabaseRPC } from "../types/entities";

if (!supabaseEnv.url || !supabaseEnv.key) {
  throw new Error("The SUPABASE_URL or SUPABASE_KEY environment variables are missing from the .env file.");
}

const supabase: SupabaseClient = createClient(supabaseEnv.url, supabaseEnv.key);

export function rpc<RPC extends keyof SupabaseRPC>(rpc: RPC, params: SupabaseRPC[RPC]) {
  return supabase.rpc(rpc, params);
}

export default supabase;

import { SupabaseClient } from "@supabase/supabase-js";
import type { SupabaseRPC } from "../types/entities";
declare const supabase: SupabaseClient;
export declare function rpc<RPC extends keyof SupabaseRPC>(rpc: RPC, params: SupabaseRPC[RPC]): import("@supabase/postgrest-js").PostgrestFilterBuilder<any, any, any, any, RPC, null, "RPC">;
export default supabase;
//# sourceMappingURL=supabase.d.ts.map
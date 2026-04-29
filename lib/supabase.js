"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpc = rpc;
const supabase_js_1 = require("@supabase/supabase-js");
const env_1 = require("./env");
if (!env_1.supabase.url || !env_1.supabase.key) {
    throw new Error("The SUPABASE_URL or SUPABASE_KEY environment variables are missing from the .env file.");
}
const supabase = (0, supabase_js_1.createClient)(env_1.supabase.url, env_1.supabase.key);
function rpc(rpc, params) {
    return supabase.rpc(rpc, params);
}
exports.default = supabase;
//# sourceMappingURL=supabase.js.map
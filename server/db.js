import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

export default function () {
  createClient();
}
//const supabase = createClient(
//  import.meta.env.VITE_SUPABASE_HOST_URL,
//  import.meta.env.VITE_SUPABASE_API_KEY
//);

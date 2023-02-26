// https://gcnaauaanlhzhsajnhwp.supabase.co
import { createClient } from "@supabase/supabase-js";

export interface Products {
  id: number;
  name: string;
  link: string;
  yesstyledate: number;
  yesstyleprice: number;
}

const supabase = createClient(
  "import.meta.env.SUPABASE_HOST_URL",
  "process.env.SUPABASE_API_KEY"
);

export default supabase;

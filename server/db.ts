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
  "import.meta.env.VITE_SUPABASE_HOST_URL",
  "import.meta.env.VITE_SUPABASE_API_KEY"
);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wylgmpelmrppfphopamr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5bGdtcGVsbXJwcGZwaG9wYW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MTM1NzksImV4cCI6MjAxMTQ4OTU3OX0.sO-BO7Zn8YLiX8znZTb_Hm-wYoAhVL1Ws0GG1NL2b18";
export const supabase = createClient(supabaseUrl, supabaseKey);

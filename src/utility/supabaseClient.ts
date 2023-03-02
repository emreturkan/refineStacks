import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://lisnxfpudfxhqyxgwroi.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpc254ZnB1ZGZ4aHF5eGd3cm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0MDYwNTYsImV4cCI6MTk4Nzk4MjA1Nn0.wRazIuJQvyuxEd5oXBRHObyYmLVp7X3N9qAOYF4KKys";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});

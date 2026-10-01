// Shared Supabase client — initialized once, reused by all modules.
// Requires the Supabase UMD script to be loaded first:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>

const SUPABASE_URL = "https://ibjnphjizkuddbmxumer.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imliam5waGppemt1ZGRibXh1bWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3OTQyNDIsImV4cCI6MjEwNjM3MDI0Mn0.WXlIINS6IQqVIfq1l6vkSdFNR_alt4VPRkbccNIsRXc";

if (!window.supabase || typeof window.supabase.createClient !== "function") {
  throw new Error(
    "Supabase UMD not loaded. Add <script src=\"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js\"></script> before any module that imports this file."
  );
}

export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
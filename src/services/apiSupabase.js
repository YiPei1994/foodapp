import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://evzdgjcusunlfxdcmsbm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emRnamN1c3VubGZ4ZGNtc2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NDYwNzcsImV4cCI6MjAyMDIyMjA3N30.6ygk-5VIV3FxW6TD60BvFpfFjipRK0spv4IwJemTFgE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

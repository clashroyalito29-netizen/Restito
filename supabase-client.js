import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// TUS CREDENCIALES CONFIGURADAS
const PROJECT_ID = 'llxbfhphkmzczjjnvvkl';
const SUPABASE_URL = `https://${PROJECT_ID}.supabase.co`;
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseGJmaHBoa216Y3pqam52dmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNzg2NTIsImV4cCI6MjA4Mzc1NDY1Mn0.Ia4z4gn--o4gLrB7rP3ZIHAQVMPDiLfMPraDerMHNaY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

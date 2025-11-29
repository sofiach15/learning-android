import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://nlpnkowpqumwgywsxwye.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5scG5rb3dwcXVtd2d5d3N4d3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTE1NzksImV4cCI6MjA3ODM4NzU3OX0.jlVa98J6I_Vu-jBk5dDXk_MegaAaA47f4xN6BIxhxB0';

export const supabase = createClient(
    SUPABASE_URL, 
    SUPABASE_ANON_KEY 
);

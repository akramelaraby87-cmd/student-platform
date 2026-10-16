import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('تحذير: مفاتيح Supabase غير متوفرة في متغيرات البيئة. يرجى ضبط ملف .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

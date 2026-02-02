import { createClient } from '@supabase/supabase-js';
import { config } from '../config';

// RECONECTADO - Supabase del nuevo proyecto

// Obtener las credenciales desde config.ts
const supabaseUrl = config.supabase.url;
const supabaseAnonKey = config.supabase.anonKey;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration. Please check src/config.ts');
}

// Crear el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Tipos para TypeScript
export type Database = {
  public: {
    Tables: {
      // Aquí puedes definir los tipos de tus tablas de Supabase
    };
  };
};

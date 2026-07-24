export const BASE_PATH = "/Rovana";

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export function videoUrl(filename: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/videos/${filename}`;
}

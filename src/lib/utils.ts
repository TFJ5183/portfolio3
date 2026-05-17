import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges tailwind style
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

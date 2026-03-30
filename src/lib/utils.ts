import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes and handles conditional logic safely.
 * Used in every professional Next.js/Tailwind project.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats date strings into a consistent system-wide format.
 * Transforms '2025-01-24' into 'JANUARY 2025' or 'Jan 24, 2025'.
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  }).toUpperCase();
}
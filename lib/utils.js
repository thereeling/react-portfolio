import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export const validateString = (val, maxLength) => {
  if (!val || typeof val !== "string" || val.length > maxLength) {
    return false;
  }
  return true;
};
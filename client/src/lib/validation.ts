import { z } from 'zod';

// Email validation
export const emailSchema = z.string().email("Please enter a valid email address");

// Phone number validation
export const phoneSchema = z.string()
  .min(10, "Phone number must be at least 10 digits")
  .regex(/^[0-9()-.\s]+$/, "Please enter a valid phone number");

// Address validation
export const addressSchema = z.string()
  .min(5, "Address must be at least 5 characters")
  .refine((value) => !value.toLowerCase().includes('po box'), {
    message: "PO Box addresses are not accepted",
  });

// ZIP code validation
export const zipCodeSchema = z.string()
  .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)");

// State validation
export const stateSchema = z.string().min(2, "Please select a state");

// Car model validation
export const carModelSchema = z.string().min(2, "Please specify your car model");

// Bank name validation
export const bankNameSchema = z.string().min(2, "Please enter your bank name");

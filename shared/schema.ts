import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Define the campaign registration schema
export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  duration: text("duration").notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  address: text("address").notNull(),
  state: text("state").notNull(),
  city: text("city").notNull(),
  zipCode: text("zipCode").notNull(),
  cellNumber: text("cellNumber").notNull(),
  confirmCellNumber: text("confirmCellNumber").notNull(),
  confirmEmail: text("confirmEmail").notNull(),
  carModel: text("carModel").notNull(),
  paymentType: text("paymentType").notNull(),
  bankName: text("bankName").notNull(),
  termsAccepted: boolean("termsAccepted").notNull().default(false),
  createdAt: timestamp("createdAt").defaultNow(),
});

// Create insert schema for registrations
export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
});

// Extend the schema for form validation
export const registrationFormSchema = insertRegistrationSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  confirmEmail: z.string().email("Please enter a valid email address"),
  cellNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  confirmCellNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
})
.refine((data) => data.email === data.confirmEmail, {
  message: "Email addresses do not match",
  path: ["confirmEmail"],
})
.refine((data) => data.cellNumber === data.confirmCellNumber, {
  message: "Phone numbers do not match",
  path: ["confirmCellNumber"],
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;

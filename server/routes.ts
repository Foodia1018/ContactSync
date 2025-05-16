import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { registrationFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendConfirmationEmail, sendAdminNotificationEmail } from "./email/mailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/register", async (req, res) => {
    try {
      // Validate the form data
      const formData = registrationFormSchema.parse(req.body);
      
      // Store the registration
      const registration = await storage.createRegistration(formData);
      
      // Send confirmation email to the user
      await sendConfirmationEmail(formData);
      
      // Send notification email to admin
      await sendAdminNotificationEmail(formData);
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: "Registration successful", 
        registration 
      });
    } catch (error) {
      console.error("Registration error:", error);
      
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your registration"
      });
    }
  });

  // Get US states list for the form
  app.get("/api/states", (_req, res) => {
    const states = [
      { value: "AL", label: "Alabama" },
      { value: "AK", label: "Alaska" },
      { value: "AZ", label: "Arizona" },
      { value: "AR", label: "Arkansas" },
      { value: "CA", label: "California" },
      { value: "CO", label: "Colorado" },
      { value: "CT", label: "Connecticut" },
      { value: "DE", label: "Delaware" },
      { value: "FL", label: "Florida" },
      { value: "GA", label: "Georgia" },
      { value: "HI", label: "Hawaii" },
      { value: "ID", label: "Idaho" },
      { value: "IL", label: "Illinois" },
      { value: "IN", label: "Indiana" },
      { value: "IA", label: "Iowa" },
      { value: "KS", label: "Kansas" },
      { value: "KY", label: "Kentucky" },
      { value: "LA", label: "Louisiana" },
      { value: "ME", label: "Maine" },
      { value: "MD", label: "Maryland" },
      { value: "MA", label: "Massachusetts" },
      { value: "MI", label: "Michigan" },
      { value: "MN", label: "Minnesota" },
      { value: "MS", label: "Mississippi" },
      { value: "MO", label: "Missouri" },
      { value: "MT", label: "Montana" },
      { value: "NE", label: "Nebraska" },
      { value: "NV", label: "Nevada" },
      { value: "NH", label: "New Hampshire" },
      { value: "NJ", label: "New Jersey" },
      { value: "NM", label: "New Mexico" },
      { value: "NY", label: "New York" },
      { value: "NC", label: "North Carolina" },
      { value: "ND", label: "North Dakota" },
      { value: "OH", label: "Ohio" },
      { value: "OK", label: "Oklahoma" },
      { value: "OR", label: "Oregon" },
      { value: "PA", label: "Pennsylvania" },
      { value: "RI", label: "Rhode Island" },
      { value: "SC", label: "South Carolina" },
      { value: "SD", label: "South Dakota" },
      { value: "TN", label: "Tennessee" },
      { value: "TX", label: "Texas" },
      { value: "UT", label: "Utah" },
      { value: "VT", label: "Vermont" },
      { value: "VA", label: "Virginia" },
      { value: "WA", label: "Washington" },
      { value: "WV", label: "West Virginia" },
      { value: "WI", label: "Wisconsin" },
      { value: "WY", label: "Wyoming" },
      { value: "DC", label: "District of Columbia" },
    ];

    return res.json(states);
  });

  const httpServer = createServer(app);

  return httpServer;
}

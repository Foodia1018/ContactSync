import nodemailer from 'nodemailer';
import type { Registration } from '@shared/schema';
import { generateUserConfirmationEmail, generateAdminNotificationEmail } from './templates';

// Configure nodemailer transporter
const createTransporter = () => {
  // Get SMTP configuration from environment variables with fallbacks
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER || 'denzelbennie9@gmail.com';
  const pass = process.env.SMTP_PASS || 'dyue ofir mimi nwml';
  
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
};

// Send confirmation email to user
export const sendConfirmationEmail = async (registration: Registration): Promise<void> => {
  try {
    const transporter = createTransporter();
    const { email, firstName, lastName } = registration;
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || '"Moment Motor Co." <denzelbennie9@gmail.com>',
      to: email,
      subject: 'Your Moment Motor Co. Auto Wrap Campaign Application',
      html: generateUserConfirmationEmail(registration),
    };
    
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${firstName} ${lastName} (${email})`);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    // Dont throw error to prevent blocking the API response
  }
};

// Send notification email to admin
export const sendAdminNotificationEmail = async (registration: Registration): Promise<void> => {
  try {
    const transporter = createTransporter();
    const adminEmail = process.env.ADMIN_EMAIL || 'denzelbennie@outlook.com';
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || '"Moment Motor Co." <denzelbennie9@gmail.com>',
      to: adminEmail,
      subject: 'New Auto Wrap Campaign Application',
      html: generateAdminNotificationEmail(registration),
    };
    
    await transporter.sendMail(mailOptions);
    console.log(`Admin notification email sent to ${adminEmail}`);
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    // Dont throw error to prevent blocking the API response
  }
};

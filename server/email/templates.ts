import type { Registration } from "@shared/schema";

// Generate user confirmation email HTML content
export function generateUserConfirmationEmail(registration: Registration): string {
  const { firstName, lastName, duration, carModel, paymentType } = registration;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Moment Motor Co. Auto Wrap Campaign - Application Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #1E3A8A;
          color: white;
          padding: 20px;
          text-align: center;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        .logo {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .body {
          padding: 30px 20px;
          background-color: #f9f9f9;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }
        .footer {
          background-color: #f3f4f6;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border: 1px solid #ddd;
        }
        .sticker-samples {
          margin: 25px 0;
          background-color: white;
          padding: 15px;
          border-radius: 5px;
          border: 1px solid #eee;
        }
        .sticker-sample {
          margin-bottom: 15px;
        }
        .sticker-image {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .sticker-title {
          font-weight: bold;
          margin-bottom: 5px;
        }
        h1 {
          color: #1E3A8A;
          margin-top: 0;
        }
        h2 {
          color: #1E3A8A;
          margin-top: 30px;
        }
        .highlight {
          background-color: #f5f5f5;
          padding: 15px;
          border-left: 3px solid #1E3A8A;
          margin: 20px 0;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #1E3A8A;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
        .next-steps {
          margin: 25px 0;
        }
        .next-step {
          margin-bottom: 15px;
          padding-left: 25px;
          position: relative;
        }
        .next-step-number {
          position: absolute;
          left: 0;
          top: 2px;
          background-color: #1E3A8A;
          color: white;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          text-align: center;
          font-size: 12px;
          line-height: 18px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">MOMENT MOTOR CO.</div>
          <div>Auto Wrap Campaign</div>
        </div>
        
        <div class="body">
          <h1>Application Received!</h1>
          
          <p>Dear ${firstName} ${lastName},</p>
          
          <p>Thank you for applying to participate in the Moment Motor Co. Auto Wrap Campaign. We're excited about the possibility of having you join our program!</p>
          
          <div class="highlight">
            <strong>Application Details:</strong>
            <ul>
              <li>Selected Duration: ${duration}</li>
              <li>Vehicle Model: ${carModel}</li>
              <li>Payment Method: ${paymentType}</li>
              <li>Weekly Compensation: $350.00</li>
            </ul>
          </div>
          
          <h2>Sticker Samples For Your Vehicle</h2>
          <p>Below are some examples of the decal designs that could be applied to your vehicle:</p>
          
          <div class="sticker-samples">
            <div class="sticker-sample">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" class="sticker-image" alt="Car Door Design Sample">
              <div class="sticker-title">Door Panel Design</div>
              <div>Our most popular design, placed on the vehicle door for maximum visibility.</div>
            </div>
            
            <div class="sticker-sample">
              <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" class="sticker-image" alt="Car Fender Design Sample">
              <div class="sticker-title">Fender Design</div>
              <div>Elegant placement on the vehicle fender, suitable for most car models.</div>
            </div>
          </div>
          
          <h2>What Happens Next?</h2>
          
          <div class="next-steps">
            <div class="next-step">
              <div class="next-step-number">1</div>
              <strong>Application Review:</strong> Our team will review your application within the next 24-48 hours.
            </div>
            
            <div class="next-step">
              <div class="next-step-number">2</div>
              <strong>Confirmation Call:</strong> A Moment Motor Co. representative will contact you to confirm your details and answer any questions.
            </div>
            
            <div class="next-step">
              <div class="next-step-number">3</div>
              <strong>Payment Processing:</strong> Once approved, you'll receive your first week's payment via your chosen method.
            </div>
            
            <div class="next-step">
              <div class="next-step-number">4</div>
              <strong>Decal Installation:</strong> We'll schedule a convenient time for our specialists to install the decal on your vehicle.
            </div>
          </div>
          
          <p>If you have any questions in the meantime, please don't hesitate to contact our support team at <a href="mailto:support@momentmotorco.com">support@momentmotorco.com</a> or call us at (555) 123-4567.</p>
          
          <p>We look forward to having you as part of our auto wrap campaign!</p>
          
          <p>
            Best regards,<br>
            The Moment Motor Co. Team
          </p>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Moment Motor Co. All rights reserved.</p>
          <p>123 Auto Avenue, Motor City, CA 90210</p>
          <p>
            <a href="https://www.momentmotorco.com/privacy">Privacy Policy</a> | 
            <a href="https://www.momentmotorco.com/terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate admin notification email HTML content
export function generateAdminNotificationEmail(registration: Registration): string {
  const { 
    firstName, 
    lastName, 
    email, 
    cellNumber, 
    address, 
    city, 
    state, 
    zipCode, 
    carModel, 
    duration, 
    paymentType, 
    bankName,
    createdAt 
  } = registration;
  
  const dateFormatted = createdAt ? new Date(createdAt).toLocaleString() : 'N/A';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Auto Wrap Campaign Application</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #1E3A8A;
          color: white;
          padding: 20px;
          text-align: center;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        .logo {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .body {
          padding: 30px 20px;
          background-color: #f9f9f9;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }
        .footer {
          background-color: #f3f4f6;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border: 1px solid #ddd;
        }
        .applicant-details {
          margin: 25px 0;
          background-color: white;
          padding: 15px;
          border-radius: 5px;
          border: 1px solid #eee;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        table td {
          padding: 8px;
          border-bottom: 1px solid #eee;
        }
        table tr:last-child td {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          width: 40%;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #1E3A8A;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
        h1 {
          color: #1E3A8A;
          margin-top: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">MOMENT MOTOR CO.</div>
          <div>Admin Notification</div>
        </div>
        
        <div class="body">
          <h1>New Auto Wrap Campaign Application</h1>
          
          <p>A new application has been submitted for the Moment Motor Co. Auto Wrap Campaign.</p>
          
          <div class="applicant-details">
            <table>
              <tr>
                <td class="label">Date Submitted:</td>
                <td>${dateFormatted}</td>
              </tr>
              <tr>
                <td class="label">Name:</td>
                <td>${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td class="label">Email:</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td class="label">Phone:</td>
                <td>${cellNumber}</td>
              </tr>
              <tr>
                <td class="label">Address:</td>
                <td>${address}, ${city}, ${state} ${zipCode}</td>
              </tr>
              <tr>
                <td class="label">Vehicle Model:</td>
                <td>${carModel}</td>
              </tr>
              <tr>
                <td class="label">Program Duration:</td>
                <td>${duration}</td>
              </tr>
              <tr>
                <td class="label">Payment Type:</td>
                <td>${paymentType}</td>
              </tr>
              <tr>
                <td class="label">Bank Name:</td>
                <td>${bankName}</td>
              </tr>
            </table>
          </div>
          
          <p>Please review this application and contact the applicant within the next 24-48 hours to proceed with the next steps.</p>
          
          <p>
            <a href="#" class="button">View in Admin Dashboard</a>
          </p>
        </div>
        
        <div class="footer">
          <p>This is an automated notification from the Moment Motor Co. Auto Wrap Campaign application system.</p>
          <p>© ${new Date().getFullYear()} Moment Motor Co. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

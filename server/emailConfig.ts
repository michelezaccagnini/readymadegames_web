// Email Configuration
// Copy this file to emailConfig.local.ts and add your actual credentials

export const emailConfig = {
  // Your Gmail address
  user: process.env.EMAIL_USER || 'your-email@gmail.com',
  
  // Your Gmail App Password (NOT your regular password)
  // To get an App Password:
  // 1. Enable 2-factor authentication on your Gmail account
  // 2. Go to Google Account settings > Security > App passwords
  // 3. Generate a new app password for "Mail"
  // 4. Use that 16-character password here
  pass: process.env.EMAIL_PASS || 'your-app-password',
  
  // Email to receive contact form submissions
  to: 'info@readymade.games'
};

// Instructions for setting up Gmail App Password:
// 1. Go to https://myaccount.google.com/security
// 2. Enable 2-Step Verification if not already enabled
// 3. Go to "App passwords" section
// 4. Select "Mail" as the app
// 5. Copy the 16-character password generated
// 6. Use that password as EMAIL_PASS in your environment variables

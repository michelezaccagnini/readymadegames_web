import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, inquiryType, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !inquiryType || !subject || !message) {
      return res.status(400).json({ 
        message: "Missing required fields: name, email, inquiryType, subject, message" 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: "Invalid email format" 
      });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Generate notification email HTML
    const notificationEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>This message was sent from your website contact form.</p>
          <p>Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `;

    // Generate auto-reply email HTML
    const autoReplyHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8b5cf6;">Thank you for contacting us!</h2>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for reaching out to Readymade Games. We've received your message and will get back to you within 24 hours.</p>
        
        <p>In the meantime, feel free to explore our website and check out our latest projects.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
          <ul>
            <li>We'll review your inquiry</li>
            <li>Get back to you within 24 hours</li>
            <li>Discuss your project in detail</li>
          </ul>
        </div>
        
        <p>Best regards,<br>
        The Readymade Games Team</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `;

    let emailSent = false;
    let autoReplySent = false;

    // Send notification email to you
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || 'info@readymade.games',
        subject: `New Contact Form Submission: ${subject}`,
        html: notificationEmailHTML
      });
      emailSent = true;
      console.log('Notification email sent successfully');
    } catch (error) {
      console.error('Error sending notification email:', error);
    }

    // Send auto-reply to the submitter
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Readymade Games',
        html: autoReplyHTML
      });
      autoReplySent = true;
      console.log('Auto-reply email sent successfully');
    } catch (error) {
      console.error('Error sending auto-reply email:', error);
    }
    
    return res.status(200).json({ 
      message: "Contact form submitted successfully",
      id: Date.now().toString(),
      emailSent,
      autoReplySent
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      message: "Internal server error" 
    });
  }
}


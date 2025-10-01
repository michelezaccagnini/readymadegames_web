import nodemailer from 'nodemailer';
import { emailConfig } from './emailConfig';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Create transporter using Gmail SMTP
    this.transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
      }
    });
  }

  async sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
    try {
      const mailOptions = {
        from: emailConfig.user,
        to: emailConfig.to,
        subject: `New Contact Form Submission: ${formData.subject}`,
        html: this.generateEmailHTML(formData)
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  private generateEmailHTML(formData: ContactFormData): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>This message was sent from your website contact form.</p>
          <p>Reply directly to this email to respond to ${formData.name}.</p>
        </div>
      </div>
    `;
  }

  // Send auto-reply to the person who submitted the form
  async sendAutoReply(formData: ContactFormData): Promise<boolean> {
    try {
      const mailOptions = {
        from: emailConfig.user,
        to: formData.email,
        subject: 'Thank you for contacting Readymade Games',
        html: this.generateAutoReplyHTML(formData.name)
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Auto-reply sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Error sending auto-reply:', error);
      return false;
    }
  }

  private generateAutoReplyHTML(name: string): string {
    return `
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
  }
}

export const emailService = new EmailService();

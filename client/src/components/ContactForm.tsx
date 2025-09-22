import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Mail, MessageSquare, Users, FileText, Music, Gamepad2, Send, CheckCircle } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'collaboration', label: 'Collaboration', icon: Users, description: 'Game development partnerships' },
    { value: 'press', label: 'Press Inquiry', icon: FileText, description: 'Media and press related questions' },
    { value: 'licensing', label: 'Music Licensing', icon: Music, description: 'License music for your project' },
    { value: 'consulting', label: 'Consulting', icon: MessageSquare, description: 'Audio game design consultation' },
    { value: 'publishing', label: 'Publishing', icon: Gamepad2, description: 'Game publishing opportunities' },
    { value: 'other', label: 'Other', icon: Mail, description: 'General inquiries' }
  ];

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedInquiry = inquiryTypes.find(type => type.value === formData.inquiryType);

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 flex items-center justify-center">
        <Card className="bg-black/30 border-white/20 max-w-md w-full text-center">
          <CardContent className="pt-8 pb-8">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-gray-300 mb-6">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on the next big music game? Have questions about audio design? 
            Let's start a conversation about creating amazing interactive experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-black/30 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Company and Inquiry Type */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company/Organization</Label>
                      <Input
                        id="company"
                        placeholder="Your company name (optional)"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-white">Inquiry Type *</Label>
                      <Select 
                        value={formData.inquiryType} 
                        onValueChange={(value) => handleInputChange('inquiryType', value)}
                        required
                      >
                        <SelectTrigger className="bg-black/20 border-white/20 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-white/20">
                          {inquiryTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                              <SelectItem key={type.value} value={type.value} className="text-white hover:bg-white/10">
                                <div className="flex items-center space-x-2">
                                  <Icon className="h-4 w-4" />
                                  <span>{type.label}</span>
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Selected Inquiry Description */}
                  {selectedInquiry && (
                    <div className="p-4 bg-purple-600/10 border border-purple-400/20 rounded-lg">
                      <div className="flex items-center space-x-2 text-purple-300">
                        <selectedInquiry.icon className="h-4 w-4" />
                        <span className="font-medium">{selectedInquiry.label}</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{selectedInquiry.description}</p>
                    </div>
                  )}

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                      className="bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me more about your project, ideas, or questions..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="bg-black/20 border-white/20 text-white placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-black/30 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Contact Information</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">hello@soundsphere.games</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-300 text-sm">
                    I'm always excited to discuss new projects, especially those involving 
                    innovative music gameplay or audio-visual experiences.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Common Inquiries */}
            <Card className="bg-black/30 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Common Inquiries</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Game Development</h4>
                    <p className="text-gray-300 text-sm">
                      Collaboration on music-focused games, Unity development, audio programming.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Music Licensing</h4>
                    <p className="text-gray-300 text-sm">
                      License original game music and interactive audio systems for your projects.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Consulting</h4>
                    <p className="text-gray-300 text-sm">
                      Audio design consultation, Unity optimization, and interactive music systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Commitment */}
            <Card className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border-green-400/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold mb-2">Quick Response Guarantee</h3>
                  <p className="text-gray-300 text-sm">
                    I personally read and respond to every message within 24 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

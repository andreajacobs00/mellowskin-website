'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-id': 'contact-form',
          'name': formData.name,
          'email': formData.email,
          'subject': formData.subject,
          'message': formData.message,
          'inquiry-type': formData.inquiryType
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <i className="ri-check-circle-line text-green-600 mr-2"></i>
            <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <i className="ri-error-warning-line text-red-600 mr-2"></i>
            <span className="text-red-800">Sorry, there was an error sending your message. Please try again.</span>
          </div>
        </div>
      )}

      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type
          </label>
          <div className="relative">
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm pr-8 appearance-none"
            >
              <option value="general">General Inquiry</option>
              <option value="product">Product Question</option>
              <option value="order">Order Support</option>
              <option value="wholesale">Wholesale/Business</option>
              <option value="feedback">Feedback</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
            placeholder="What is this regarding?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm resize-none"
            placeholder="Tell us more about your inquiry..."
          ></textarea>
          <div className="text-right text-xs text-gray-500 mt-1">
            {formData.message.length}/500 characters
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || formData.message.length > 500}
          className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
            isSubmitting || formData.message.length > 500
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-pink-600 text-white hover:bg-pink-700'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
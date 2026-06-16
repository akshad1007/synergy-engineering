'use client';

import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    company: '',
    email: '',
    phone: '',
    reason: '',
    industry: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xrbnllrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          full_name: '',
          company: '',
          email: '',
          phone: '',
          reason: '',
          industry: '',
          message: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setErrorMessage(error.message || 'Oops! There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface-container-lowest p-6 md:p-12 rounded-xl shadow-sm">
      <h2 className="text-2xl md:text-3xl font-black text-primary-container mb-8 uppercase tracking-tight font-headline">
        Send Us a Message
      </h2>

      {errorMessage && (
        <div className="text-red-600 font-bold p-4 bg-red-50 rounded-lg mb-6 border border-red-200 flex items-center gap-3">
          <span className="material-symbols-outlined text-red-700">error</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="full_name">
              Full Name
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 min-h-[44px] focus:ring-2 focus:ring-secondary text-on-surface placeholder:text-outline font-body"
              id="full_name"
              name="full_name"
              placeholder="John Doe"
              required
              type="text"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="company">
              Company
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 min-h-[44px] focus:ring-2 focus:ring-secondary text-on-surface placeholder:text-outline font-body"
              id="company"
              name="company"
              placeholder="Company Name"
              required
              type="text"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 min-h-[44px] focus:ring-2 focus:ring-secondary text-on-surface placeholder:text-outline font-body"
              id="email"
              name="email"
              placeholder="john@company.com"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 min-h-[44px] focus:ring-2 focus:ring-secondary text-on-surface placeholder:text-outline font-body"
              id="phone"
              name="phone"
              placeholder="+91-22-2580-5555"
              required
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="reason">
              Reason for Inquiry
            </label>
            <select
              className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 min-h-[44px] focus:ring-2 focus:ring-secondary text-on-surface font-body"
              id="reason"
              name="reason"
              required
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="Quote Request">Quote Request</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Service Inquiry">Service Inquiry</option>
              <option value="Calibration">Calibration</option>
              <option value="Technical Support">Technical Support</option>
              <option value="General">General</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="industry">
              Application / Industry
            </label>
            <select
              className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 min-h-[44px] focus:ring-2 focus:ring-secondary text-on-surface font-body"
              id="industry"
              name="industry"
              required
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="" disabled>Select industry</option>
              <option value="Power Generation">Power Generation (Hydro/Solar/Thermal)</option>
              <option value="Transmission & Distribution">Transmission & Distribution (Grid Utilities)</option>
              <option value="Oil & Gas">Oil & Gas (Refineries/Pipelines)</option>
              <option value="Heavy Manufacturing">Heavy Manufacturing & Process Plants</option>
              <option value="Railways & Metro">Railways & Metro Transit</option>
              <option value="Defence & Aerospace">Defence & Aerospace Labs</option>
              <option value="Other">Other Application</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-secondary text-on-surface placeholder:text-outline font-body"
            id="message"
            name="message"
            placeholder="How can our engineering expertise help you?"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          className="w-full md:w-auto bg-[#C8232A] hover:bg-[#D62828] text-white px-10 py-4 rounded-md font-headline font-extrabold text-sm transition-all flex items-center justify-center gap-2 group active:scale-95 min-h-[48px] disabled:opacity-50 cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'SENDING RFQ...' : 'SEND RFQ REQUEST →'}
        </button>
      </form>

      <SuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        title="Message Sent!"
        message="Thank you for reaching out. We have received your inquiry and our team will get back to you shortly."
      />
    </div>
  );
}

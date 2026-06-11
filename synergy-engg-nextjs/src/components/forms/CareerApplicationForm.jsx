'use client';

import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file only.');
        e.target.value = '';
        return;
      }
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Formspree Contact Form Endpoint
    try {
      const payload = {
        full_name: formData.name,
        email: formData.email,
        reason: 'Career Application',
        message: `${formData.message}\n\n[Note: Resume ${fileName ? `"${fileName}"` : 'not provided'} was uploaded by applicant]`
      };

      const response = await fetch('https://formspree.io/f/xrbnllrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setFileName('');
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Oops! There was a problem submitting your application.');
      }
    } catch (error) {
      setErrorMessage(error.message || 'Oops! There was a problem submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(10,22,40,0.06)] border-t-4 border-secondary">
      <h3 className="text-xl font-extrabold text-primary-container mb-6 font-headline">
        Apply for this Position
      </h3>

      {errorMessage && (
        <div className="text-red-600 font-bold p-3 bg-red-50 rounded-lg mb-6 border border-red-200 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-label">
            Full Name
          </label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-secondary/50 placeholder:text-slate-400 font-body text-slate-900"
            placeholder="John Doe"
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-label">
            Email Address
          </label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-secondary/50 placeholder:text-slate-400 font-body text-slate-900"
            placeholder="john@example.com"
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-label">
            Upload Resume (PDF)
          </label>
          <div className="relative group">
            <div className="w-full border-2 border-dashed border-outline-variant rounded-md py-8 flex flex-col items-center justify-center text-slate-400 group-hover:border-secondary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-3xl mb-2">cloud_upload</span>
              <span className="text-xs font-medium font-body">
                {fileName ? fileName : 'Drag & drop or Click to browse'}
              </span>
            </div>
            <input
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-label">
            Your Message
          </label>
          <textarea
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-secondary/50 placeholder:text-slate-400 font-body text-slate-900"
            placeholder="Tell us about your technical background..."
            rows={4}
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="w-full bg-secondary text-white font-headline font-bold py-4 rounded-md shadow-lg hover:bg-[#a00a14] transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 min-h-[48px]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'SUBMITTING...' : 'Submit Application'}
        </button>
        <p className="text-[10px] text-center text-slate-400 px-4 font-body">
          By applying, you agree to our privacy policy and data processing terms for recruitment purposes.
        </p>
      </form>

      <SuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        title="Application Received!"
        message="Thank you for applying to Synergy Engineering. Our recruitment team will review your application and contact you if your profile matches our requirements."
        buttonText="CLOSE"
      />
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SuccessModal from './SuccessModal';
import { products } from '@/data/products';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    industry: '',
    email: '',
    phone: '',
    timeline: '',
    location: '',
    quantity: '',
    equipment: [], // Selected brands
    specs: ''
  });

  const [cartItems, setCartItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Load and sync cart from local storage
  useEffect(() => {
    const loadCart = () => {
      try {
        const itemIds = JSON.parse(localStorage.getItem('synergy-quote-items') || '[]');
        const resolved = products.filter(p => itemIds.includes(p.id));
        setCartItems(resolved);
        
        // Auto-select corresponding equipment brand categories based on cart contents
        const brands = new Set(formData.equipment);
        resolved.forEach(item => {
          if (item.brand === 'megger') brands.add('Megger');
          if (item.brand === 'brother') brands.add('Brother');
          if (item.brand === 'emh' || item.brand === 'mte') brands.add('EMH');
        });
        setFormData(prev => ({ ...prev, equipment: Array.from(brands) }));
      } catch {
        setCartItems([]);
      }
    };
    loadCart();
    window.addEventListener('storage', loadCart);
    window.addEventListener('quote-updated', loadCart);
    return () => {
      window.removeEventListener('storage', loadCart);
      window.removeEventListener('quote-updated', loadCart);
    };
  }, []);

  const handleRemoveFromCart = (productId) => {
    try {
      const itemIds = JSON.parse(localStorage.getItem('synergy-quote-items') || '[]');
      const newIds = itemIds.filter(id => id !== productId);
      localStorage.setItem('synergy-quote-items', JSON.stringify(newIds));
      window.dispatchEvent(new Event('quote-updated'));
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const currentEquip = [...prev.equipment];
        if (checked) {
          currentEquip.push(value);
        } else {
          const index = currentEquip.indexOf(value);
          if (index > -1) currentEquip.splice(index, 1);
        }
        return { ...prev, equipment: currentEquip };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDownloadSummary = () => {
    const quoteData = {
      company: formData.company || 'N/A',
      contact: formData.contact || 'N/A',
      industry: formData.industry || 'N/A',
      email: formData.email || 'N/A',
      phone: formData.phone || 'N/A',
      timeline: formData.timeline || 'N/A',
      location: formData.location || 'N/A',
      quantity: formData.quantity || 'N/A',
      specs: formData.specs || 'No technical scope provided.',
      equipment: formData.equipment,
      products: cartItems.map(p => ({ id: p.id, name: p.name, brand: p.brand })),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      refId: 'SE-2026-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0') + '-QT'
    };

    localStorage.setItem('synergy_quote_data', JSON.stringify(quoteData));
    window.open('/quote/print', '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Construct form payload that matches original keys for Formspree
    const payload = {
      'q-company': formData.company,
      'q-contact': formData.contact,
      'q-industry': formData.industry,
      'q-email': formData.email,
      'q-phone': formData.phone,
      'q-timeline': formData.timeline,
      'q-location': formData.location,
      'q-quantity': formData.quantity,
      'equipment': formData.equipment,
      'products': cartItems.map(p => p.name).join(', '),
      'q-specs': formData.specs
    };

    try {
      const response = await fetch('https://formspree.io/f/xpqkljvr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSuccess(true);
        // Clear cart on success
        localStorage.setItem('synergy-quote-items', '[]');
        window.dispatchEvent(new Event('quote-updated'));
        setFormData({
          company: '',
          contact: '',
          industry: '',
          email: '',
          phone: '',
          timeline: '',
          location: '',
          quantity: '',
          equipment: [],
          specs: ''
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
    <div>
      {errorMessage && (
        <div className="text-red-600 font-bold p-6 bg-red-50 rounded-lg mb-6 shadow-sm border border-red-200 flex items-center gap-3">
          <span className="material-symbols-outlined text-red-700 text-3xl">error</span>
          <div>
            <p className="text-lg">Oops! There was a problem submitting your form.</p>
            <p className="text-sm font-normal text-red-700 mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Cart Items List */}
      {cartItems.length === 0 ? (
        <div className="bg-surface-container-low p-8 border border-dashed border-outline-variant/30 rounded-lg text-center mb-8">
          <span className="material-symbols-outlined text-4xl text-outline mb-2 select-none">
            shopping_cart_checkout
          </span>
          <p className="text-sm font-semibold text-primary-container mb-2 font-headline">Your product selection list is empty</p>
          <p className="text-xs text-on-surface-variant max-w-md mx-auto mb-4 font-body leading-relaxed">
            You can still request a custom EPC project or site service quotation using the form below, or browse our products to add specific testing equipment.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-secondary font-headline font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all active:scale-95"
          >
            Browse Product Catalog
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      ) : (
        <div className="bg-surface-container-lowest p-8 shadow-sm rounded-lg mb-8 border border-slate-200/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              list_alt
            </span>
            <h2 className="text-xl font-bold text-primary-container uppercase tracking-tight font-headline">
              Selected Equipment for Quote ({cartItems.length})
            </h2>
          </div>
          <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="py-3 flex justify-between items-center gap-4">
                <div>
                  <p className="font-bold text-sm text-primary-container font-headline">{item.name}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-label font-bold capitalize">{item.brand}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors flex items-center justify-center p-2 rounded-full hover:bg-red-50 cursor-pointer"
                  aria-label={`Remove ${item.name}`}
                >
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Section 1: Organization Details */}
        <section className="bg-surface-container-lowest p-8 md:p-12 shadow-sm rounded-lg">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              corporate_fare
            </span>
            <h2 className="text-xl font-bold text-primary-container uppercase tracking-tight font-headline">
              1. Organization Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2 lg:col-span-3">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Company Name<span className="text-secondary ml-1">*</span>
              </label>
              <input
                name="company"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container placeholder:opacity-40 font-body rounded-md"
                placeholder="e.g. Industrial Dynamics Ltd"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Contact Person<span className="text-secondary ml-1">*</span>
              </label>
              <input
                name="contact"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container placeholder:opacity-40 font-body rounded-md"
                placeholder="Full legal name"
                type="text"
                required
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Industry Sector<span className="text-secondary ml-1">*</span>
              </label>
              <select
                name="industry"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container font-body rounded-md"
                required
                value={formData.industry}
                onChange={handleChange}
              >
                <option value="">Select Sector</option>
                <option value="Power & Utilities">Power & Utilities</option>
                <option value="Oil & Gas">Oil & Gas</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Railways & Transport">Railways & Transport</option>
                <option value="EPC / Contractor">EPC / Contractor</option>
                <option value="Renewable Energy">Renewable Energy</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Email Address<span className="text-secondary ml-1">*</span>
              </label>
              <input
                name="email"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container placeholder:opacity-40 font-body rounded-md"
                placeholder="corporate@email.com"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Phone Number<span className="text-secondary ml-1">*</span>
              </label>
              <input
                name="phone"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container placeholder:opacity-40 font-body rounded-md"
                placeholder="+91 00000 00000"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Project Timeline<span className="text-secondary ml-1">*</span>
              </label>
              <select
                name="timeline"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container font-body rounded-md"
                required
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Select Urgency</option>
                <option value="Immediate (Urgent)">Immediate (Urgent)</option>
                <option value="1-3 Months (Standard)">1-3 Months (Standard)</option>
                <option value="Project Based (Planning)">Project Based (Planning)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Project Location (State/City)<span className="text-secondary ml-1">*</span>
              </label>
              <input
                name="location"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container placeholder:opacity-40 font-body rounded-md"
                placeholder="e.g. Maharashtra"
                type="text"
                required
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                Estimated Quantity<span className="text-secondary ml-1">*</span>
              </label>
              <input
                name="quantity"
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container placeholder:opacity-40 font-body rounded-md"
                placeholder="e.g. 5"
                type="number"
                min="1"
                required
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Section 2: Equipment Selection */}
        <section className="bg-surface-container-lowest p-8 md:p-12 shadow-sm rounded-lg">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              precision_manufacturing
            </span>
            <h2 className="text-xl font-bold text-primary-container uppercase tracking-tight font-headline">
              2. Equipment Selection
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant mb-8 -mt-4 italic font-body">
            Select the precision engineering partner systems required for this scope.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card: Megger */}
            <label className="relative flex items-start p-6 bg-surface-container-low cursor-pointer hover:bg-surface-container group transition-colors rounded-lg">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="equipment"
                  value="Megger"
                  checked={formData.equipment.includes('Megger')}
                  onChange={handleChange}
                  className="h-5 w-5 rounded-sm border-gray-300 text-secondary focus:ring-secondary"
                />
              </div>
              <div className="ml-4">
                <span className="block text-lg font-bold text-primary-container font-headline">Megger</span>
                <span className="text-sm text-on-surface-variant leading-tight font-body">
                  Electrical testing equipment & diagnostics for power infrastructure.
                </span>
              </div>
            </label>
            {/* Card: Brother */}
            <label className="relative flex items-start p-6 bg-surface-container-low cursor-pointer hover:bg-surface-container group transition-colors rounded-lg">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="equipment"
                  value="Brother"
                  checked={formData.equipment.includes('Brother')}
                  onChange={handleChange}
                  className="h-5 w-5 rounded-sm border-gray-300 text-secondary focus:ring-secondary"
                />
              </div>
              <div className="ml-4">
                <span className="block text-lg font-bold text-primary-container font-headline">Brother</span>
                <span className="text-sm text-on-surface-variant leading-tight font-body">
                  Industrial gear motors and industrial labeling solutions.
                </span>
              </div>
            </label>
            {/* Card: EMH */}
            <label className="relative flex items-start p-6 bg-surface-container-low cursor-pointer hover:bg-surface-container group transition-colors rounded-lg">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="equipment"
                  value="EMH"
                  checked={formData.equipment.includes('EMH')}
                  onChange={handleChange}
                  className="h-5 w-5 rounded-sm border-gray-300 text-secondary focus:ring-secondary"
                />
              </div>
              <div className="ml-4">
                <span className="block text-lg font-bold text-primary-container font-headline">EMH</span>
                <span className="text-sm text-on-surface-variant leading-tight font-body">
                  Digital energy meters and grid monitoring systems.
                </span>
              </div>
            </label>
          </div>
        </section>

        {/* Section 3: Project Scope */}
        <section className="bg-surface-container-lowest p-8 md:p-12 shadow-sm rounded-lg">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              architecture
            </span>
            <h2 className="text-xl font-bold text-primary-container uppercase tracking-tight font-headline">
              3. Project Scope
            </h2>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
              Detailed Technical Requirements<span className="text-secondary ml-1">*</span>
            </label>
            <textarea
              name="specs"
              className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 p-4 text-primary-container placeholder:opacity-40 font-body rounded-md"
              placeholder="Describe tolerances, environmental conditions, operational parameters, and specific standards (ISO/ANSI) to be adhered to..."
              rows={6}
              required
              value={formData.specs}
              onChange={handleChange}
            ></textarea>
          </div>
        </section>

        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
          <button
            onClick={handleDownloadSummary}
            type="button"
            className="order-2 md:order-1 flex items-center justify-center gap-2 px-8 py-4 text-secondary font-bold uppercase text-xs tracking-widest border-2 border-secondary hover:bg-secondary hover:text-white transition-all w-full md:w-auto rounded font-headline min-h-[48px] cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Download Specification Summary
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="order-1 md:order-2 flex items-center justify-center gap-2 px-12 py-4 bg-secondary text-white font-bold uppercase text-xs tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all w-full md:w-auto rounded font-headline min-h-[48px] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? 'SUBMITTING...' : 'Submit Quotation Request'}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        title="Quote Received!"
        message="Thank you for your specification. Our engineers will review it and provide a comprehensive quotation within 24-48 business hours."
        buttonText="OKAY"
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // For now we mock the subscription. Later it can be integrated with Mailchimp/Formspree.
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-primary-container p-8 shadow-xl rounded-lg relative overflow-hidden">
      <div className="relative z-10">
        <h4 className="text-xl font-extrabold text-white mb-2 font-headline">Technical Digest</h4>
        <p className="text-slate-400 text-sm mb-6 font-body">
          Get our quarterly whitepapers and engineering insights delivered to your inbox.
        </p>
        
        {subscribed ? (
          <div className="text-green-400 font-bold p-3 bg-white/5 rounded-md border border-green-500/20 text-sm font-body text-center">
            ✓ Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border-white/20 p-3 rounded-md text-white placeholder:text-slate-500 focus:ring-2 focus:ring-secondary outline-none text-sm font-body"
            />
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-md font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all font-headline min-h-[44px]"
            >
              Subscribe Now
            </button>
          </form>
        )}
      </div>
      {/* Watermark Logo Motif */}
      <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[200px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </div>
    </div>
  );
}

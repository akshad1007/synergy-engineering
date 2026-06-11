'use client';

import React, { useState, useEffect } from 'react';

export default function CommentSystem({ slug }) {
  const [mounted, setMounted] = useState(false);
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    text: ''
  });

  const STORAGE_KEY = `synergy_comments_${slug || 'general'}`;

  // Prevent hydration mismatches by only loading on client mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse comments', e);
      }
    }
  }, [STORAGE_KEY]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Date.now(),
      name: formData.name,
      title: formData.title,
      text: formData.text,
      date: new Date().toISOString()
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    setFormData({ name: '', title: '', text: '' });
    setShowForm(false);
  };

  const getInitials = (name) => {
    if (!name) return '??';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  if (!mounted) {
    return (
      <div className="mt-20">
        <h3 className="text-2xl font-extrabold text-primary-container mb-8 font-headline">
          Discussions (0)
        </h3>
        <div className="bg-surface-container-low p-8 rounded-lg text-center border-2 border-dashed border-outline-variant">
          <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">forum</span>
          <p className="text-on-surface-variant font-medium font-body">Loading discussion...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-extrabold text-primary-container font-headline">
          Discussions ({comments.length})
        </h3>
      </div>

      {/* Empty State / Comments List */}
      <div className="space-y-8 mb-12">
        {comments.length === 0 ? (
          <div className="bg-surface-container-low p-8 rounded-lg text-center border-2 border-dashed border-outline-variant">
            <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">forum</span>
            <p className="text-on-surface-variant font-medium font-body">
              Join the technical conversation. Be the first to comment.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-surface-container transition-all hover:shadow-md"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold text-sm font-headline">
                  {getInitials(comment.name)}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-primary-container text-sm font-headline">{comment.name}</h4>
                    <span className="text-[10px] text-outline px-2 py-0.5 bg-surface-container rounded-full font-body">
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                  {comment.title && (
                    <p className="text-[11px] text-secondary font-semibold uppercase tracking-tighter mb-2 font-label">
                      {comment.title}
                    </p>
                  )}
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body whitespace-pre-line">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post Comment Button */}
      {!showForm && (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-primary-container text-white font-bold rounded-md hover:bg-black transition-colors uppercase text-xs tracking-widest font-headline"
          >
            Post a Comment
          </button>
        </div>
      )}

      {/* Comment Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-surface-container p-8 rounded-lg shadow-inner space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border-outline-variant p-3 rounded text-sm focus:ring-2 focus:ring-secondary outline-none font-body text-slate-900"
            />
            <input
              type="text"
              name="title"
              placeholder="Professional Title (Optional)"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-white border-outline-variant p-3 rounded text-sm focus:ring-2 focus:ring-secondary outline-none font-body text-slate-900"
            />
          </div>
          <textarea
            name="text"
            required
            placeholder="Your technical feedback or question...*"
            rows={4}
            value={formData.text}
            onChange={handleChange}
            className="w-full bg-white border-outline-variant p-3 rounded text-sm focus:ring-2 focus:ring-secondary outline-none font-body text-slate-900"
          ></textarea>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setFormData({ name: '', title: '', text: '' });
              }}
              className="px-6 py-2 text-on-surface-variant font-bold text-xs uppercase hover:text-primary transition-colors font-headline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-secondary text-white font-bold rounded hover:opacity-90 transition-all text-xs uppercase tracking-widest font-headline"
            >
              Post Discussion
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

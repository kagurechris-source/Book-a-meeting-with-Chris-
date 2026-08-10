import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  User, 
  MapPin, 
  Plus, 
  MessageSquare, 
  X,
  Sparkles
} from 'lucide-react';
import { INITIAL_TESTIMONIALS } from '../data/testimonials';
import { Testimonial, ReviewFormData } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState<ReviewFormData>({
    clientName: '',
    clientRole: '',
    location: 'Nairobi',
    rating: 5,
    serviceUsed: 'ICEA LION Money Market Fund',
    comment: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('chrispus_testimonials');
    if (saved) {
      try {
        setTestimonials(JSON.parse(saved));
      } catch (e) {
        setTestimonials(INITIAL_TESTIMONIALS);
      }
    } else {
      setTestimonials(INITIAL_TESTIMONIALS);
    }
  }, []);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.clientName || !newReview.comment) {
      alert('Please enter your name and review comments.');
      return;
    }

    const created: Testimonial = {
      id: `review_${Date.now()}`,
      clientName: newReview.clientName,
      clientRole: newReview.clientRole || 'Client',
      location: newReview.location || 'Nairobi',
      rating: newReview.rating,
      serviceUsed: newReview.serviceUsed,
      comment: newReview.comment,
      date: 'Just now',
      verified: true
    };

    const updated = [created, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('chrispus_testimonials', JSON.stringify(updated));
    setIsModalOpen(false);
    setNewReview({
      clientName: '',
      clientRole: '',
      location: 'Nairobi',
      rating: 5,
      serviceUsed: 'ICEA LION Money Market Fund',
      comment: ''
    });
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            <span>Client Testimonials & Trust</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real feedback from individuals, families, and business managers advised by Chrispus.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors self-start sm:self-center shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Score Card */}
      <div className="bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-extrabold text-white font-serif text-amber-400">
            4.9<span className="text-sm font-normal text-slate-400">/5</span>
          </div>
          <div>
            <div className="flex text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Based on 40+ verified client advisory consultations
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>100% ICEA LION Certified Advisory Compliance</span>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-slate-950 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between relative group hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Client
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic relative z-10">
                "{t.comment}"
              </p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white flex items-center gap-1">
                  {t.clientName}
                </p>
                <p className="text-[11px] text-slate-400">{t.clientRole} • {t.location}</p>
              </div>

              <span className="text-[10px] text-amber-400 font-medium bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                {t.serviceUsed}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-slate-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif">Leave a Client Review</h3>
                <p className="text-xs text-slate-400">Share your experience with Chrispus</p>
              </div>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mary Achieng"
                  value={newReview.clientName}
                  onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Profession / Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Accountant"
                    value={newReview.clientRole}
                    onChange={(e) => setNewReview({ ...newReview, clientRole: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Rating
                  </label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Service / Product Advised
                </label>
                <select
                  value={newReview.serviceUsed}
                  onChange={(e) => setNewReview({ ...newReview, serviceUsed: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="ICEA LION Money Market Fund">ICEA LION Money Market Fund</option>
                  <option value="Endowment Life Policy">Endowment Life Policy</option>
                  <option value="Educator Plan">Educator Plan</option>
                  <option value="Individual Pension Scheme">Individual Pension Scheme</option>
                  <option value="Motor & Comprehensive Cover">Motor & Comprehensive Cover</option>
                  <option value="General Financial Advisory">General Financial Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Review / Feedback *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How was Chrispus's service and financial advice?"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition-colors shadow-lg text-sm"
              >
                Post Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

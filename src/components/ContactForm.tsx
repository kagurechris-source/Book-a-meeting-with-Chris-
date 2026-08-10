import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  User, 
  CheckCircle2, 
  HelpCircle,
  Clock
} from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Money Market Fund (MMF) Account Opening',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    'Money Market Fund (MMF) Account Opening',
    'Life Assurance & Endowment Policy Inquiry',
    'Educator / Child School Fees Plan Quote',
    'Individual Pension Scheme (IPS) & Tax Relief',
    'Motor / Vehicle Comprehensive Insurance',
    'Home / Domestic Package Cover',
    'Medical & Health Cover Quote',
    'General Financial Planning Session'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('chrispus_inquiries') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('chrispus_inquiries', JSON.stringify(existing));

    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `*NEW INQUIRY FROM LINK TREE*
👤 *Name*: ${formData.fullName}
📞 *Phone*: ${formData.phone}
✉️ *Email*: ${formData.email || 'N/A'}
🎯 *Subject*: ${formData.subject}
💬 *Preferred Contact*: ${formData.preferredContact.toUpperCase()}
📝 *Message*: ${formData.message || 'I would like more information on this product.'}

Hello Chrispus, please review my request and get back to me.`;
    return `https://wa.me/254757752161?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400">
          <Send className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">Send an Inquiry</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Have a question or need a customized quote? Send Chrispus a direct message below.
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm text-slate-200">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Full Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="e.g. David Ochieng"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number (WhatsApp / Phone) *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0757752161"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  placeholder="e.g. david@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject / Product Interest</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Preferred Contact Method</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                { id: 'phone', label: 'Phone Call', icon: Phone },
                { id: 'email', label: 'Email', icon: Mail }
              ].map((m) => {
                const Icon = m.icon;
                const isSelected = formData.preferredContact === m.id;
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setFormData({ ...formData, preferredContact: m.id as any })}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Message / Requirements</label>
            <textarea
              rows={3}
              placeholder="Tell Chrispus a bit about your financial goals or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </button>
        </form>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold text-white font-serif">Inquiry Submitted!</h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
            Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. Chrispus has received your inquiry regarding <strong>"{formData.subject}"</strong>.
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Send Message via WhatsApp Now</span>
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 text-xs text-slate-400 hover:text-white underline font-semibold"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

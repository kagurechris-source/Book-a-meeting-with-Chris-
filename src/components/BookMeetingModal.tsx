import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  X, 
  MapPin, 
  Video, 
  FileText,
  Sparkles
} from 'lucide-react';
import { BookingFormData } from '../types';

interface BookMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTopic?: string;
}

export const BookMeetingModal: React.FC<BookMeetingModalProps> = ({
  isOpen,
  onClose,
  prefilledTopic = 'General Financial Advisory'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    topic: prefilledTopic,
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days ahead default
    timeSlot: '10:00 AM',
    meetingType: 'in-person',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'ICEA LION Money Market Fund (MMF)',
    'Endowment Life Policy',
    'Educator / School Fees Plan',
    'Individual Pension Scheme (IPS)',
    'Motor & Comprehensive Insurance',
    'Medical & Health Insurance',
    'General Financial Advisory Session'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('chrispus_bookings') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('chrispus_bookings', JSON.stringify(existing));

    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `*NEW BOOKING REQUEST - FINANCIAL ADVISORY*
👤 *Name*: ${formData.fullName}
📞 *Phone*: ${formData.phone}
✉️ *Email*: ${formData.email || 'N/A'}
🎯 *Topic*: ${formData.topic}
📅 *Date*: ${formData.date}
⏰ *Time*: ${formData.timeSlot}
📍 *Mode*: ${formData.meetingType.toUpperCase()}
📝 *Notes*: ${formData.notes || 'None'}

Hello Chrispus, I have submitted this meeting request via your link tree. Please confirm my appointment slot.`;
    return `https://wa.me/254757752161?text=${encodeURIComponent(text)}`;
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 shadow-2xl relative text-slate-200">
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  ICEA LION Consultation
                </span>
                <h3 className="text-xl font-bold text-white font-serif">Book a Meeting with Chrispus</h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Schedule a 1-on-1 financial advisory session at JKUAT Towers (Nairobi) or via virtual call/WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Kamau"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone Number (M-PESA / WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0712345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Topic Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Advisory Subject / Product Interest
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  {topics.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Meeting Mode */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Meeting Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'in-person', label: 'JKUAT Office', icon: MapPin },
                    { id: 'phone', label: 'Phone Call', icon: Phone },
                    { id: 'virtual', label: 'Google Meet', icon: Video },
                    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                  ].map((m) => {
                    const Icon = m.icon;
                    const isSelected = formData.meetingType === m.id;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setFormData({ ...formData, meetingType: m.id as any })}
                        className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                        }`}
                      >
                        <Icon className="w-4 h-4 mb-1" />
                        <span>{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Additional Information (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Seeking KES 10,000/month MMF plan or Educator policy for 2 kids"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 mt-2"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Confirm Meeting Request</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white font-serif">Booking Submitted!</h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. Your appointment request for <strong className="text-amber-400">{formData.date} at {formData.timeSlot}</strong> has been received.
            </p>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">Topic:</span>
                <span className="font-semibold text-white">{formData.topic}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">Mode:</span>
                <span className="font-semibold text-amber-400 uppercase">{formData.meetingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Advisor Location:</span>
                <span className="font-semibold text-white">JKUAT Towers, Nairobi</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Click below to send your booking directly to Chrispus on WhatsApp for immediate confirmation:
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Confirm via WhatsApp Now</span>
              </a>

              <button
                onClick={resetAndClose}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2.5 px-4 rounded-xl text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

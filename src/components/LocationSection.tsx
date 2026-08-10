import React from 'react';
import { 
  MapPin, 
  Building2, 
  Clock, 
  Phone, 
  ExternalLink, 
  Navigation, 
  Car, 
  CheckCircle2 
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'JKUAT Towers Kenyatta Avenue Nairobi Kenya'
  )}`;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-cyan-400">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">Office Location & Consultation Space</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Visit Chrispus Thoithi Kagure at ICEA LION Group in the heart of Nairobi CBD.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Location Info Card */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Building Address</span>
              <p className="text-base font-bold text-white font-serif mt-0.5">JKUAT Towers (Formerly ICEA Building)</p>
              <p className="text-slate-300 mt-1">5th & 6th Floor, Kenyatta Avenue</p>
              <p className="text-slate-400">Nairobi CBD, Kenya</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
            <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Office Working Hours</span>
              <p className="text-slate-200 font-semibold mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM</p>
              <p className="text-slate-300">Saturday: 9:00 AM – 1:00 PM (By Appointment)</p>
              <p className="text-slate-500 italic">Sunday & Holidays: Closed (WhatsApp inquiries active)</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
            <Car className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Landmarks & Parking</span>
              <p className="text-slate-300 mt-0.5 leading-relaxed">
                Situated directly along Kenyatta Avenue opposite General Post Office (GPO) and next to Sarova Stanley Hotel. Ample secure visitor parking is available in the building basement and adjacent street bays.
              </p>
            </div>
          </div>
        </div>

        {/* Map Visual Box */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-40 w-full bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950" />
              
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/40">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-sm">JKUAT Towers • Nairobi CBD</h4>
                <p className="text-[11px] text-slate-400">Kenyatta Avenue, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>In-person 1-on-1 consultations available daily upon booking.</span>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors shadow-lg"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps for Directions</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};

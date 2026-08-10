import React from 'react';
import { 
  Shield, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Download, 
  QrCode, 
  CheckCircle2, 
  Mail, 
  Building2,
  Award
} from 'lucide-react';
import profilePhoto from '../assets/images/chrispus_profile_photo_1786348678922.jpg';
import headerBanner from '../assets/images/icea_lion_header_1786348694249.jpg';
import { downloadVCard } from '../utils/vcard';

interface HeaderProps {
  onBookMeetingClick: () => void;
  onQRCodeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBookMeetingClick,
  onQRCodeClick
}) => {
  const whatsappUrl = `https://wa.me/254757752161?text=${encodeURIComponent(
    'Hello Chrispus, I would like to schedule a financial advisory session regarding ICEA LION products.'
  )}`;

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800/80 mb-6">
      {/* Background Banner */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden">
        <img
          src={headerBanner}
          alt="ICEA LION Financial Advisory"
          className="w-full h-full object-cover object-center opacity-85"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 text-xs font-semibold text-amber-400">
            <Shield className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>ICEA LION Group</span>
          </div>
          <button
            onClick={onQRCodeClick}
            className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-slate-200 px-3 py-1.5 rounded-full border border-slate-700/60 text-xs font-medium transition-all"
            title="Show QR Code"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share QR</span>
          </button>
        </div>
      </div>

      {/* Main Profile Info Overlay */}
      <div className="relative px-5 pb-6 sm:px-8 -mt-16 sm:-mt-20">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
          
          {/* Avatar Profile Image */}
          <div className="relative group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl bg-slate-800 relative">
              <img
                src={profilePhoto}
                alt="Chrispus Thoithi Kagure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900" title="Certified ICEA LION Financial Advisor">
              <CheckCircle2 className="w-4 h-4 text-slate-950 stroke-[3]" />
            </div>
          </div>

          {/* Quick Contact Action Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/40 text-sm transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookMeetingClick}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-amber-950/30 text-sm transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Book Meeting</span>
            </button>

            <button
              onClick={downloadVCard}
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-3.5 py-2.5 rounded-xl border border-slate-700 text-sm transition-all"
              title="Save contact card to phone"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xs:inline">Save vCard</span>
            </button>
          </div>
        </div>

        {/* Name and Professional Title */}
        <div className="mt-5 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif">
              Chrispus Thoithi Kagure
            </h1>
            <span className="inline-flex items-center gap-1 bg-amber-400/10 text-amber-300 text-xs font-semibold px-2.5 py-0.5 rounded-md border border-amber-400/20">
              <Award className="w-3 h-3 text-amber-400" /> Verified Advisor
            </span>
          </div>

          <p className="text-amber-400 font-semibold text-base sm:text-lg mt-1 flex items-center justify-center sm:justify-start gap-1.5">
            <span>Financial Advisor</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-normal">ICEA LION Group</span>
          </p>

          <p className="text-slate-300 text-sm mt-2.5 max-w-2xl leading-relaxed">
            Empowering individuals, families, and businesses across Kenya to achieve financial security through custom Life Assurance, Money Market Investments, Pension Planning, and Education Funds.
          </p>

          {/* Contact Details Bar */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-300">
            <a href="tel:+254757752161" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="font-medium">0757752161</span>
            </a>

            <a href="mailto:kagurechris@gmail.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>kagurechris@gmail.com</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>JKUAT Towers (5th & 6th Floor), Kenyatta Ave, Nairobi</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

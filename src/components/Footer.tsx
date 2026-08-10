import React from 'react';
import { Shield, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 pt-8 pb-12 px-4 sm:px-6 text-slate-400 text-xs text-center space-y-4 rounded-b-3xl">
      <div className="max-w-xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm">
          <Shield className="w-4 h-4 fill-amber-400/20" />
          <span>Chrispus Thoithi Kagure • ICEA LION Group</span>
        </div>

        <p className="text-slate-400 leading-relaxed">
          Authorized Financial Advisor providing Life Assurance, Pension Schemes, Money Market Funds (Unit Trusts), Education Policies, and General Property/Medical Insurance solutions in Kenya.
        </p>

        <p className="text-slate-400">
          📍 JKUAT Towers (5th & 6th Floor), Kenyatta Avenue, Nairobi | 📞 <a href="tel:+254757752161" className="text-amber-400 hover:underline">0757752161</a>
        </p>

        <div className="pt-2 flex items-center justify-center gap-3 text-slate-400">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

        <p className="text-slate-400 text-[11px] pt-4 border-t border-slate-900">
          © {new Date().getFullYear()} ICEA LION Group Kenya. All Rights Reserved. Regulated by IRA & RBA.
        </p>
      </div>
    </footer>
  );
};

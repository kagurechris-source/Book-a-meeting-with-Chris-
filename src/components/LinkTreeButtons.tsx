import React from 'react';
import { 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  Calculator, 
  BookOpen, 
  Star, 
  MapPin, 
  Send,
  ArrowRight,
  TrendingUp,
  GraduationCap,
  PiggyBank,
  Coins
} from 'lucide-react';

interface LinkTreeButtonsProps {
  onSelectTab: (tab: string) => void;
  onBookMeeting: () => void;
}

export const LinkTreeButtons: React.FC<LinkTreeButtonsProps> = ({
  onSelectTab,
  onBookMeeting
}) => {
  const whatsappConsultUrl = `https://wa.me/254757752161?text=${encodeURIComponent(
    'Hello Chrispus, I would like a direct consultation on ICEA LION financial solutions.'
  )}`;

  const linkCards = [
    {
      id: 'book-meeting',
      title: 'Book 1-on-1 Financial Advisory',
      subtitle: 'Schedule a free session (In-Person at JKUAT Towers or Virtual)',
      icon: Calendar,
      color: 'bg-amber-500 text-slate-950 hover:bg-amber-400',
      textColor: 'text-slate-950',
      badge: 'Recommended',
      badgeColor: 'bg-slate-950/20 text-slate-950',
      onClick: onBookMeeting,
      isExternal: false
    },
    {
      id: 'whatsapp-chat',
      title: 'WhatsApp Direct Consultation',
      subtitle: 'Quick response for inquiries, quotes & product details',
      icon: MessageCircle,
      color: 'bg-emerald-600 text-white hover:bg-emerald-500',
      textColor: 'text-white',
      badge: 'Instant Chat',
      badgeColor: 'bg-emerald-800/60 text-emerald-100',
      href: whatsappConsultUrl,
      isExternal: true
    },
    {
      id: 'products',
      title: 'Explore All ICEA LION Products',
      subtitle: 'Money Market Fund, Life Cover, Pensions, Education & General Insurance',
      icon: ShieldCheck,
      color: 'bg-slate-900 border border-slate-700 text-white hover:border-amber-400/60 hover:bg-slate-800/80',
      textColor: 'text-white',
      badge: 'Full Catalog',
      badgeColor: 'bg-amber-400/20 text-amber-300',
      onClick: () => onSelectTab('products'),
      isExternal: false
    },
    {
      id: 'calculators',
      title: 'Financial Goal Calculators',
      subtitle: 'Calculate expected returns for MMF, Education Fund & Retirement',
      icon: Calculator,
      color: 'bg-slate-900 border border-slate-700 text-white hover:border-blue-400/60 hover:bg-slate-800/80',
      textColor: 'text-white',
      badge: 'Interactive Tools',
      badgeColor: 'bg-blue-400/20 text-blue-300',
      onClick: () => onSelectTab('calculators'),
      isExternal: false
    },
    {
      id: 'blogs',
      title: 'Financial Literacy Resources & Blog',
      subtitle: 'Articles on tax savings, wealth accumulation & education planning in Kenya',
      icon: BookOpen,
      color: 'bg-slate-900 border border-slate-700 text-white hover:border-purple-400/60 hover:bg-slate-800/80',
      textColor: 'text-white',
      badge: 'Articles',
      badgeColor: 'bg-purple-400/20 text-purple-300',
      onClick: () => onSelectTab('blogs'),
      isExternal: false
    },
    {
      id: 'testimonials',
      title: 'Client Reviews & Testimonials',
      subtitle: 'Read feedback from Dr. Mwangi, Grace Njuguna & top professionals',
      icon: Star,
      color: 'bg-slate-900 border border-slate-700 text-white hover:border-amber-400/60 hover:bg-slate-800/80',
      textColor: 'text-white',
      badge: '4.9 ★ Rating',
      badgeColor: 'bg-amber-400/20 text-amber-300',
      onClick: () => onSelectTab('testimonials'),
      isExternal: false
    },
    {
      id: 'location',
      title: 'Office Location & JKUAT Towers Directions',
      subtitle: 'Visit Chrispus at 5th & 6th Floor, JKUAT Towers, Kenyatta Ave, Nairobi',
      icon: MapPin,
      color: 'bg-slate-900 border border-slate-700 text-white hover:border-cyan-400/60 hover:bg-slate-800/80',
      textColor: 'text-white',
      badge: 'Nairobi Office',
      badgeColor: 'bg-cyan-400/20 text-cyan-300',
      onClick: () => onSelectTab('location'),
      isExternal: false
    },
    {
      id: 'contact',
      title: 'Send a Detailed Inquiry / Message',
      subtitle: 'Fill in your requirements and Chrispus will get back to you promptly',
      icon: Send,
      color: 'bg-slate-900 border border-slate-700 text-white hover:border-emerald-400/60 hover:bg-slate-800/80',
      textColor: 'text-white',
      badge: 'Form Inquiry',
      badgeColor: 'bg-emerald-400/20 text-emerald-300',
      onClick: () => onSelectTab('contact'),
      isExternal: false
    }
  ];

  return (
    <div className="w-full space-y-3.5 mb-8">
      <div className="flex items-center justify-between px-1 mb-2">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Quick Access & Services
        </h2>
        <span className="text-xs text-amber-400 font-medium">Tap to open</span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {linkCards.map((card) => {
          const Icon = card.icon;

          if (card.isExternal) {
            return (
              <a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl transition-all duration-200 shadow-md ${card.color} hover:scale-[1.01] active:scale-[0.99]`}
              >
                <div className="flex items-center gap-3.5 pr-2">
                  <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-base sm:text-lg ${card.textColor}`}>
                        {card.title}
                      </span>
                      {card.badge && (
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm opacity-90 mt-0.5 font-normal leading-snug">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pl-2">
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            );
          }

          return (
            <button
              key={card.id}
              onClick={card.onClick}
              className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl transition-all duration-200 shadow-md text-left ${card.color} hover:scale-[1.01] active:scale-[0.99]`}
            >
              <div className="flex items-center gap-3.5 pr-2">
                <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-semibold text-base sm:text-lg ${card.textColor}`}>
                      {card.title}
                    </span>
                    {card.badge && (
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm opacity-90 mt-0.5 font-normal leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pl-2">
                <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Category Chips for Fast Browsing */}
      <div className="pt-4 border-t border-slate-800">
        <p className="text-xs text-slate-400 mb-2.5 font-medium">Browse ICEA LION Solutions by Topic:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSelectTab('products')}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-amber-500/10 hover:border-amber-400/50 text-slate-300 hover:text-amber-300 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-medium transition-all"
          >
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span>Money Market (MMF)</span>
          </button>
          <button
            onClick={() => onSelectTab('products')}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-emerald-500/10 hover:border-emerald-400/50 text-slate-300 hover:text-emerald-300 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-medium transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Endowment & Life Cover</span>
          </button>
          <button
            onClick={() => onSelectTab('products')}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-blue-500/10 hover:border-blue-400/50 text-slate-300 hover:text-blue-300 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-medium transition-all"
          >
            <PiggyBank className="w-3.5 h-3.5 text-blue-400" />
            <span>Pension & Retirement</span>
          </button>
          <button
            onClick={() => onSelectTab('products')}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-purple-500/10 hover:border-purple-400/50 text-slate-300 hover:text-purple-300 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-medium transition-all"
          >
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>Education Fee Plans</span>
          </button>
        </div>
      </div>
    </div>
  );
};

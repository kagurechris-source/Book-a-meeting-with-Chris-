import React, { useState } from 'react';
import { Header } from './components/Header';
import { LinkTreeButtons } from './components/LinkTreeButtons';
import { ProductsSection } from './components/ProductsSection';
import { CalculatorsSection } from './components/CalculatorsSection';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactForm } from './components/ContactForm';
import { LocationSection } from './components/LocationSection';
import { BookMeetingModal } from './components/BookMeetingModal';
import { QRCodeModal } from './components/QRCodeModal';
import { Footer } from './components/Footer';
import { 
  Home, 
  ShieldCheck, 
  Calculator, 
  BookOpen, 
  Star, 
  MessageCircle, 
  MapPin, 
  Calendar,
  Send
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isQROpen, setIsQROpen] = useState<boolean>(false);
  const [prefilledBookingTopic, setPrefilledBookingTopic] = useState<string>('General Financial Advisory');

  const handleSelectProductForBooking = (productTitle: string) => {
    setPrefilledBookingTopic(productTitle);
    setIsBookingOpen(true);
  };

  const navItems = [
    { id: 'home', label: 'Links', icon: Home },
    { id: 'products', label: 'Products', icon: ShieldCheck },
    { id: 'calculators', label: 'Calculators', icon: Calculator },
    { id: 'blogs', label: 'Literacy', icon: BookOpen },
    { id: 'testimonials', label: 'Reviews', icon: Star },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'contact', label: 'Inquire', icon: Send },
  ];

  const floatingWhatsappUrl = `https://wa.me/254757752161?text=${encodeURIComponent(
    'Hello Chrispus, I would like to consult on ICEA LION financial advisory services.'
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col items-center justify-between pb-24 sm:pb-12">
      
      {/* Container Frame optimized for mobile & desktop max-w-2xl */}
      <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
        
        {/* Header Profile Section */}
        <Header
          onBookMeetingClick={() => {
            setPrefilledBookingTopic('General Financial Advisory');
            setIsBookingOpen(true);
          }}
          onQRCodeClick={() => setIsQROpen(true)}
        />

        {/* Tab Navigation Pill Bar */}
        <nav className="w-full bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-1.5 mb-6 sticky top-3 z-30 shadow-xl overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 min-w-max">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-950/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content Area Based on Selected View */}
        <main className="w-full">
          {activeTab === 'home' && (
            <div className="animate-in fade-in duration-300">
              <LinkTreeButtons
                onSelectTab={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                onBookMeeting={() => {
                  setPrefilledBookingTopic('General Financial Advisory');
                  setIsBookingOpen(true);
                }}
              />
            </div>
          )}

          {activeTab === 'products' && (
            <div className="animate-in fade-in duration-300">
              <ProductsSection onSelectProductForBooking={handleSelectProductForBooking} />
            </div>
          )}

          {activeTab === 'calculators' && (
            <div className="animate-in fade-in duration-300">
              <CalculatorsSection />
            </div>
          )}

          {activeTab === 'blogs' && (
            <div className="animate-in fade-in duration-300">
              <BlogSection />
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="animate-in fade-in duration-300">
              <TestimonialsSection />
            </div>
          )}

          {activeTab === 'location' && (
            <div className="animate-in fade-in duration-300">
              <LocationSection />
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="animate-in fade-in duration-300">
              <ContactForm />
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Action Button: Quick WhatsApp Consultation */}
      <a
        href={floatingWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl border-2 border-slate-900 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        title="Direct WhatsApp Consultation with Chrispus"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

      {/* Booking Modal */}
      <BookMeetingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledTopic={prefilledBookingTopic}
      />

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isQROpen}
        onClose={() => setIsQROpen(false)}
      />
    </div>
  );
}

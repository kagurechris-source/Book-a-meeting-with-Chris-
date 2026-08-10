import React, { useState } from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Users, 
  PiggyBank, 
  TrendingUp, 
  Coins, 
  BarChart3, 
  Landmark, 
  GraduationCap, 
  BookOpen, 
  Car, 
  Home, 
  Plane, 
  Activity, 
  Search, 
  MessageCircle, 
  Check, 
  Info, 
  X, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { ICEA_PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';

interface ProductsSectionProps {
  onSelectProductForBooking?: (productTitle: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProductForBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { id: ProductCategory | 'all'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Products', icon: Filter },
    { id: 'life', label: 'Life & Protection', icon: ShieldCheck },
    { id: 'pension', label: 'Pensions & Retirement', icon: PiggyBank },
    { id: 'investments', label: 'Investments & MMF', icon: Coins },
    { id: 'education', label: 'Education Plans', icon: GraduationCap },
    { id: 'general', label: 'General Insurance', icon: Car },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return ShieldCheck;
      case 'HeartHandshake': return HeartHandshake;
      case 'Award': return Award;
      case 'Users': return Users;
      case 'PiggyBank': return PiggyBank;
      case 'TrendingUp': return TrendingUp;
      case 'Coins': return Coins;
      case 'BarChart3': return BarChart3;
      case 'Landmark': return Landmark;
      case 'GraduationCap': return GraduationCap;
      case 'BookOpen': return BookOpen;
      case 'Car': return Car;
      case 'Home': return Home;
      case 'Plane': return Plane;
      case 'Activity': return Activity;
      default: return ShieldCheck;
    }
  };

  const filteredProducts = ICEA_PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.keyBenefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-400" />
            <span>ICEA LION Product Portfolio</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Comprehensive financial, insurance, investment, and retirement solutions.
          </p>
        </div>

        <div className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/20 self-start sm:self-center">
          {filteredProducts.length} Solutions Available
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-5">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Search product e.g. MMF, Educator Plan, Pension, Motor, Medical..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-3 text-slate-400 hover:text-white text-xs"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-950/40'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => {
          const IconComponent = getIcon(product.iconName);
          const whatsappUrl = `https://wa.me/254757752161?text=${encodeURIComponent(
            product.whatsappMessage
          )}`;

          return (
            <div
              key={product.id}
              className="group relative bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-amber-400/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>

                  {product.badge && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {product.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Key Benefits Teaser */}
                <ul className="mt-3 space-y-1.5">
                  {product.keyBenefits.slice(0, 2).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Bar */}
              <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-slate-950 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">No products found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-3 text-xs text-amber-400 underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative text-slate-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400">
                {React.createElement(getIcon(selectedProduct.iconName), { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  ICEA LION Solution
                </span>
                <h3 className="text-xl font-bold text-white font-serif">{selectedProduct.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {selectedProduct.fullDesc}
            </p>

            {/* Product Meta */}
            <div className="grid grid-cols-2 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs mb-4">
              {selectedProduct.policyPeriod && (
                <div>
                  <span className="text-slate-500">Term / Duration:</span>
                  <p className="font-semibold text-slate-200">{selectedProduct.policyPeriod}</p>
                </div>
              )}
              {selectedProduct.minInvestment && (
                <div>
                  <span className="text-slate-500">Min Contribution:</span>
                  <p className="font-semibold text-slate-200">{selectedProduct.minInvestment}</p>
                </div>
              )}
            </div>

            {/* Key Benefits */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Key Benefits:</h4>
              <ul className="space-y-2">
                {selectedProduct.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 mb-6 text-xs">
              <span className="font-bold text-slate-400">Ideal For: </span>
              <span className="text-slate-300">{selectedProduct.targetAudience}</span>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/254757752161?text=${encodeURIComponent(selectedProduct.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>

              {onSelectProductForBooking && (
                <button
                  onClick={() => {
                    const productTitle = selectedProduct.title;
                    setSelectedProduct(null);
                    onSelectProductForBooking(productTitle);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  <span>Book Advisory Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

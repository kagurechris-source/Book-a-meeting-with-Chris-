import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  X, 
  MessageCircle, 
  CheckCircle2, 
  Tag 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Investments', 'Education & Protection', 'Retirement & Tax', 'Financial Planning'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <span>Financial Literacy Resources</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Practical insights on wealth creation, tax optimization, education savings, and pensions in Kenya.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search financial guide e.g. MMF, Tax relief, Pension..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group cursor-pointer bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                <span className="flex items-center gap-1 font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>

                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500">By {post.author}</span>
              <span className="font-semibold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 bg-slate-950 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">No articles found matching your criteria.</p>
        </div>
      )}

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Post Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
                <span>{selectedPost.category}</span>
                <span>•</span>
                <span className="text-slate-400">{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold text-white font-serif leading-snug">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-amber-400" /> {selectedPost.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> {selectedPost.date}
                </span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Key Takeaways:
              </h4>
              <ul className="space-y-2">
                {selectedPost.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 mb-8 border-t border-slate-800 pt-6">
              {selectedPost.content.map((paragraph, idx) => {
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={idx} className="text-base font-bold text-white font-serif pt-3">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Discuss Article CTA */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Have questions about this article?</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Get personalized guidance from Chrispus at JKUAT Towers or via WhatsApp.
                </p>
              </div>

              <a
                href={`https://wa.me/254757752161?text=${encodeURIComponent(
                  `Hi Chrispus, I just read your article "${selectedPost.title}". I would like to discuss how this applies to my financial situation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Discuss with Chrispus</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

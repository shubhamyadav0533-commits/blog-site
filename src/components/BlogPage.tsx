import { ArrowLeft, Calendar, Clock, Share2, Link as LinkIcon } from "lucide-react";
import type { Company } from "../data";
import { Link } from "react-router-dom";

interface BlogPageProps {
  company: Company;
}


const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export const BlogPage = ({ company }: BlogPageProps) => {
  const { blog } = company;

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={blog.image} 
          alt={company.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/"
              className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Business Hub
            </Link>
            
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-sm`}>
              {company.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
              {blog.content.find(c => c.type === "heading")?.text || company.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold border-2 border-white/20">
                  {blog.author[0]}
                </div>
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-400" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-emerald-400" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Social Share (Sticky) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-6">
              <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer">
                <LinkedinIcon />
              </button>
              <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-sky-500 hover:bg-sky-50 transition-all cursor-pointer">
                <TwitterIcon />
              </button>
              <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-all cursor-pointer">
                <LinkIcon size={20} />
              </button>
              <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-all cursor-pointer">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Center Column: Article Text */}
          <div className="lg:col-span-11 prose prose-lg max-w-none">
            {blog.content.map((section, idx) => {
              if (section.type === "heading") {
                return (
                  <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight border-l-4 border-blue-500 pl-6">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "paragraph") {
                return (
                  <p key={idx} className="text-gray-600 text-lg leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left">
                    {section.text}
                  </p>
                );
              }
              if (section.type === "image") {
                return (
                  <figure key={idx} className="my-12">
                    <img src={section.url} alt={section.caption} className="rounded-3xl shadow-2xl w-full" />
                    {section.caption && <figcaption className="text-center text-sm text-gray-500 mt-4 italic">{section.caption}</figcaption>}
                  </figure>
                );
              }
              return null;
            })}

            {/* Newsletter Call to Action within Blog */}
            <div className="mt-20 p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-blue-500/20">
                <Clock size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">Stay ahead of the curve</h3>
              <p className="text-gray-400 mb-8 max-w-md relative z-10">
                Get more insights like this delivered to your inbox every week. No spam, just pure strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/20">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer-like sticky back button for mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Link 
          to="/"
          className="w-14 h-14 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>
    </div>
  );
};

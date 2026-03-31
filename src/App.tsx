import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import heroImg from "./assets/hero.png";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PremiumFeatures } from "./components/PremiumFeatures";
import { RequestDemoModal } from "./components/RequestDemoModal";
import { BlogPage } from "./components/BlogPage";
import { BlogCard } from "./components/BlogCard";
import { companies, blogCategories } from "./data";
import {
  ArrowRight,
  Sparkles,
  Database,
  BarChart3,
  Users,
  Settings,
  Layers,
  Activity,
  Mail,
  Send,
} from "lucide-react";


// Separate the Home view into a dedicated component
function Home({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Navbar 
        onRequestDemo={() => setIsModalOpen(true)} 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onHome={() => navigate("/")}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative bg-white border-b border-gray-100 overflow-hidden">
          {/* Background Gradients & Patterns */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.05]" 
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-gray-50" />

          {/* Glowing Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse-soft"></div>
            <div
              className="absolute top-[10%] -right-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse-soft"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
            <div className="absolute top-[20%] left-[15%] text-blue-200 animate-float">
              <Database size={48} strokeWidth={1.5} />
            </div>
            <div className="absolute top-[60%] left-[10%] text-indigo-200 animate-float-delayed">
              <BarChart3 size={56} strokeWidth={1.5} />
            </div>
            <div className="absolute top-[30%] right-[15%] text-emerald-200 animate-float-delayed">
              <Users size={52} strokeWidth={1.5} />
            </div>
            <div className="absolute top-[65%] right-[12%] text-purple-200 animate-float">
              <Settings size={44} strokeWidth={1.5} />
            </div>
            <div
              className="absolute top-[15%] left-[50%] text-rose-200 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Activity size={40} strokeWidth={1.5} />
            </div>
            <div
              className="absolute bottom-[20%] left-[30%] text-amber-200 animate-float-delayed"
              style={{ animationDelay: "3s" }}
            >
              <Layers size={48} strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-blue-600 font-medium text-sm mb-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
              New Articles Every Week
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
              Transform Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400">
                {" "}
                Business Operations
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed font-light">
              Explore our comprehensive guides on ERP, CRM, HRMS, and workflow
              automation. Learn how to streamline processes and drive growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#categories"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full shadow-lg shadow-purple-500/30 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Topics
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-semibold rounded-full text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 shadow-sm hover:shadow transition-all duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        
         
        <PremiumFeatures 
          onRequestDemo={() => setIsModalOpen(true)} 
          searchTerm={searchTerm}
        />

        <NewsletterSection setIsModalOpen={setIsModalOpen} />


      </main>
      <Footer />
    </>
  );
}

function NewsletterSection({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) {
  return (
    <section id="newsletter" className="bg-white py-32 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"></div>

      {/* Decorative Icons for Newsletter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-[20%] left-[15%] text-blue-300/40 animate-float-delayed">
          <Mail size={80} strokeWidth={0.5} className="-rotate-12" />
        </div>
        <div className="absolute bottom-[20%] right-[15%] text-blue-400/30 animate-float">
          <Send size={90} strokeWidth={0.5} className="rotate-12" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Stay updated with new articles
        </h2>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Get the latest updates delivered to your inbox.
        </p>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold rounded-full transition-all shadow-xl shadow-purple-200 hover:shadow-purple-500/40 hover:-translate-y-1 active:scale-[0.98] text-lg"
        >
          Schedule demo
        </button>
      </div>
    </section>
  );
}

function BlogView({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) {
  const { companyId } = useParams<{ companyId: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const selectedCompany = companies.find(c => c.id === companyId);

  if (!selectedCompany) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
          <button onClick={() => navigate("/")} className="text-blue-600 hover:underline">Go back home</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar 
        onRequestDemo={() => setIsModalOpen(true)} 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onHome={() => navigate("/")}
      />
      <BlogPage 
        company={selectedCompany} 
      />

      <Footer />
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
        <Routes>
          <Route path="/" element={<Home setIsModalOpen={setIsModalOpen} />} />
          <Route path="/blog/:companyId" element={<BlogView setIsModalOpen={setIsModalOpen} />} />
        </Routes>

        <RequestDemoModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;

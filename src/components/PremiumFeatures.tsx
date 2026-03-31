import React from "react";
import anquestLogo from "../assets/anquestlogo.png";
import { 
  Cloud, 
  Cpu, 
  Code2, 
  Zap, 
  ShieldCheck, 
  Globe,
  Search,
  ArrowRight
} from "lucide-react";
import { companies } from "../data";
import type { Company } from "../data";
import { Link } from "react-router-dom";



interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => (
  <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);


interface ScrollingColumnProps {
  features: FeatureCardProps[];
  reverse?: boolean;
}

const ScrollingColumn = ({ features, reverse }: ScrollingColumnProps) => (
  <div className="h-[600px] overflow-hidden relative mask-y">
    <div className={`flex flex-col gap-6 ${reverse ? 'animate-marquee-vertical-reverse' : 'animate-marquee-vertical'}`}>
      {[...features, ...features].map((feature, idx) => (
        <FeatureCard key={idx} {...feature} />
      ))}
    </div>
  </div>
);

interface PremiumFeaturesProps {
  onRequestDemo?: () => void;
  searchTerm?: string;
}


const leftFeatures: FeatureCardProps[] = [
  { icon: Cloud, title: "Enterprise Solutions", description: "Cloud-ready software built for scale and reliability.", color: "bg-blue-50 text-blue-600" },
  { icon: Cpu, title: "Advanced AI", description: "Intelligent automation powered by cutting-edge ML.", color: "bg-purple-50 text-purple-600" },
  { icon: Code2, title: "Developer FIRST", description: "Robust APIs and documentation for seamless integration.", color: "bg-emerald-50 text-emerald-600" },
];

const rightFeatures: FeatureCardProps[] = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance for sub-second page loads.", color: "bg-amber-50 text-amber-600" },
  { icon: ShieldCheck, title: "Military Privacy", description: "End-to-end encryption for all your enterprise data.", color: "bg-rose-50 text-rose-600" },
  { icon: Globe, title: "Global Scale", description: "Deploy anywhere with multi-region support.", color: "bg-blue-50 text-blue-600" },
];

const CompanyCard = ({ company, onRequestDemo }: { company: Company, onRequestDemo?: () => void }) => {

  const themeColors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
  }[company.theme] || "bg-gray-50 text-gray-600 border-gray-100";

  const glowColors = {
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    rose: "bg-rose-400",
    amber: "bg-amber-400",
  }[company.theme] || "bg-gray-400";

  const btnTheme = {
    blue: "bg-blue-600 hover:bg-blue-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    rose: "bg-rose-600 hover:bg-rose-700",
    amber: "bg-amber-600 hover:bg-amber-700",
  }[company.theme] || "bg-gray-900 hover:bg-gray-800";

  const Icon = company.icon;
  // Use local logo if it's aNquest, otherwise use what's in company
  const logo = company.id === "anquest" ? anquestLogo : company.logo;


  return (
    <div className="group relative">
      {/* Subtle Background Glow behind the card */}
      <div className={`absolute -inset-4 ${glowColors} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-all duration-700 -z-10`} />
      
      <div className="h-full bg-white/80 backdrop-blur-xl rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
        <div className={`w-24 h-24 md:w-28 md:h-28 rounded-[1.5rem] flex items-center justify-center mb-8 ${themeColors} shadow-md group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 z-10 relative overflow-hidden`}>
          {Icon ? (
            <Icon size={48} strokeWidth={1.5} />
          ) : (
            <img src={logo} alt={company.title} className="w-full h-full object-contain p-4" />
          )}
        </div>
        
        <div className="flex-1 flex flex-col items-center z-10 w-full">
          <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${themeColors} shadow-sm`}>
            {company.badge}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 tracking-tight">
            {company.title}
          </h3>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {company.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-auto w-full max-w-md">
            {company.isExternal ? (
              <a 
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 min-w-[140px] px-8 py-3.5 rounded-full text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 ${btnTheme}`}
              >
                Learn More
              </a>
            ) : (
              <Link 
                to={`/blog/${company.id}`}
                className={`flex-1 min-w-[140px] px-8 py-3.5 rounded-full text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 ${btnTheme}`}
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            )}
            {company.id === "anquest" && (

              <button 
                onClick={onRequestDemo}
                className="flex-1 min-w-[140px] px-8 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-0.5"
              >
                Request Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PremiumFeatures = ({ onRequestDemo, searchTerm = "" }: PremiumFeaturesProps) => {

  const filteredCompanies = companies.filter((company) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      company.title.toLowerCase().includes(searchLower) ||
      company.description.toLowerCase().includes(searchLower) ||
      company.badge.toLowerCase().includes(searchLower)
    );
  });

  return (
    <section id="companies" className="py-24 bg-white relative overflow-clip">

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Elevate Your Enterprise Experience
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Combining cutting-edge technology with intuitive design to power the next generation of digital workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          {/* Left Column: Why Choose Us Scrolling */}
          <div className="hidden lg:flex lg:col-span-3 flex-col sticky top-24">
            <h4 className="text-xl font-bold text-gray-900 mb-6 px-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-600 rounded-full" />
              Why Choose Us
            </h4>
            <ScrollingColumn features={leftFeatures} />
          </div>

          {/* Middle Column: Company Cards */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company, idx) => (
                <CompanyCard 
                  key={idx} 
                  company={company} 
                  onRequestDemo={onRequestDemo} 
                />
              ))
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-dashed border-gray-300 p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">
                  We couldn't find any companies matching "{searchTerm}". Try a different search term.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Key Features Scrolling */}
          <div className="hidden lg:flex lg:col-span-3 flex-col sticky top-24">
            <h4 className="text-xl font-bold text-gray-900 mb-6 px-2 flex items-center gap-2 justify-end">
              Key Capabilities
              <span className="w-8 h-1 bg-pink-500 rounded-full" />
            </h4>
            <ScrollingColumn features={rightFeatures} reverse />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


interface NavbarProps {
  onRequestDemo: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onHome: () => void;
}

export function Navbar({ onRequestDemo, searchTerm, onSearchChange, onHome }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-white via-purple-100 to-pink-100 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center w-1/3">
            <Link 
              to="/"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-purple-500/30 transition-shadow">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">BlogSite</span>
            </Link>

          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-1/3">
            <button 
              onClick={(e) => { e.preventDefault(); onHome(); setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full cursor-pointer"
            >
              Home
            </button>

            <button 
              onClick={(e) => { e.preventDefault(); onHome(); setTimeout(() => document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full cursor-pointer"
            >
              Companies
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); onHome(); setTimeout(() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full cursor-pointer"
            >
              Contact
            </button>

          </div>

          {/* Search & CTA - Right */}
          <div className="hidden md:flex items-center justify-end w-1/3 gap-6">
            <div className="relative group w-full max-w-[180px]">
              <button 
                type="button"
                className="absolute inset-y-0 left-0 pl-3 flex items-center group-hover:text-blue-600 transition-colors"
              >
                <Search className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </button>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-gray-50/50 hover:bg-gray-50 transition-all font-medium"
              />
            </div>

            <button 
              onClick={onRequestDemo}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-purple-200 hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg absolute w-full z-50">
          <button 
            onClick={(e) => { e.preventDefault(); onHome(); setIsMenuOpen(false); setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Home
          </button>

          <button 
            onClick={(e) => { e.preventDefault(); onHome(); setIsMenuOpen(false); setTimeout(() => document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Companies
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); onHome(); setIsMenuOpen(false); setTimeout(() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Contact
          </button>

          <div className="pt-2 pb-1 border-t border-gray-100 mt-2 space-y-4">
            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search articles..."
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <button 
              onClick={() => {
                onRequestDemo();
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-purple-100 active:scale-[0.98] transition-all"
            >
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  </>
);
}


import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Phone, Flame } from 'lucide-react';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={(e) => handleNavClick(e as any, '#home')}
            >
              <Flame className={`h-8 w-8 ${scrolled ? 'text-emerald-600' : 'text-white'} mr-2 transition-colors`} />
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'} transition-colors`}>
                Phoenix Landscaping
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 ${scrolled
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'
                  : 'bg-white text-emerald-700 hover:bg-emerald-50'
                  }`}
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-t border-slate-100 ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-4 mt-6 text-center rounded-xl text-base font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg active:scale-95 transition-all"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=80&w=1920"
            alt="Landscaping work in progress"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md animate-fade-in">
            <span className="text-emerald-100 font-bold text-xs tracking-widest uppercase">Expert Landscaping • WA Owned</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
            Revive Your<br /><span className="text-emerald-400">Outdoor Space.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
            Bring your garden back to life. Professional, reliable landscaping and maintenance services tailored for the Western Australian climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center text-lg"
            >
              Request Free Quote
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 font-bold rounded-2xl transition-all flex items-center justify-center text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Features / About Teaser */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local & Reliable</h3>
              <p className="text-slate-600 leading-relaxed">Serving Perth and surrounds with consistent, punctual service you can trust every single visit.</p>
            </div>
            <div className="p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Knowledge</h3>
              <p className="text-slate-600 leading-relaxed">Deep understanding of WA's unique soil and climate conditions for optimal plant health.</p>
            </div>
            <div className="p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Results</h3>
              <p className="text-slate-600 leading-relaxed">High-quality workmanship with meticulous attention to detail at honest, competitive rates.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="services">
        <Services />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center text-white mb-6">
                <Flame className="h-8 w-8 text-emerald-500 mr-2" />
                <span className="text-2xl font-black tracking-tight">Phoenix Landscaping</span>
              </div>
              <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
                Revitalizing Western Australian gardens one project at a time. Professional landscaping and maintenance for those who value their outdoor living space.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-emerald-400 transition-colors font-medium">Home</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-emerald-400 transition-colors font-medium">Services</a></li>
                <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-emerald-400 transition-colors font-medium">Gallery</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-emerald-400 transition-colors font-medium">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center group cursor-pointer">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-200">0412 923 250</span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-200">phoenixhlandscaping@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} Phoenix Landscaping. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-medium">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Internal icons needed for features section
const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);



export default App;

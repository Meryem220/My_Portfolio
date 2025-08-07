import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original floating shapes with enhancements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full floating"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/8 rounded-lg floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-white/12 rounded-full floating" style={{animationDelay: '4s'}}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/6 rounded-full floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/15 rounded-full floating" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-full floating" style={{animationDelay: '5s'}}></div>
        
        {/* Large gradient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-400/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-6 h-6 border-2 border-white/20 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 border-2 border-white/25 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 border border-white/15 rounded rotate-12 floating"></div>
        <div className="absolute bottom-10 left-10 w-5 h-5 border border-white/20 transform rotate-45"></div>
        
        {/* Twinkling particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/6 right-1/5 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-warm-orange">Hi, I'm </span><span className=" bg-clip-text bg-gradient-to-r from-emerald to-electric-blue">Saliha a Software Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Cybersecurity Explorer & Creative Problem Solver Simulating threats, crafting defenses, and decoding the digital world with curiosity and code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="hover:bg-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-[#4C6AE8] text-[#ffffff]"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-subtle">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
/*  */
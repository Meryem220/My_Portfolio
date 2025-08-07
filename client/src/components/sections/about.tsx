export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vibrant-purple to-electric-blue mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a creatively driven developer with a passion for cybersecurity and backend design, constantly transforming complex problems into secure, elegant solutions. Whether architecting Flask-based applications, visualizing keylogger data, or experimenting with animated gradients, I thrive at the intersection of technical depth and expressive design. My curiosity fuels hands-on exploration—diving into Hack The Box labs with Kali Linux, simulating benign worms in virtual environments, and refining my second brain project using open-source tools.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, I’m uncovering vulnerabilities, crafting responsive portfolio layouts, or capturing insights through my evolving knowledge system.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-vibrant-purple/10 text-vibrant-purple px-4 py-2 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm font-medium">Innovative</span>
              <span className="bg-warm-orange/10 text-warm-orange px-4 py-2 rounded-full text-sm font-medium">Continuous Learner</span>
              <span className="bg-vibrant-purple/10 text-vibrant-purple px-4 py-2 rounded-full text-sm font-medium">Relentless</span>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://img.clipart-library.com/24/ee0b6f14-67ab-47ff-9409-0d5d6f933f3a.png" 
              alt="Professional developer portrait"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto card-hover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-vibrant-purple to-electric-blue p-4 rounded-2xl text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
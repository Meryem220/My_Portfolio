import { Mail, Download, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import resumePDF from '@/assets/resume.pdf'
// import guitarImg from '@/assets/images/guitar.png';
export default function Contact() {
  return (
    <section id="contact" className="py-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a 
            href="mailto:codesm220@gmail.com" 
            className="bg-white text-navy px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </a>
          {/* TODO: The resume can't be loaded i dont know why */}
          <a 
            href="/resume.pdf" 
            download="Sal_Resume.pdf"
            className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
            onClick={(e) => {
              // Check if resume exists, if not show helpful message
              const link = e.currentTarget;
              fetch('/resume.pdf')
                .then(response => {
                  if (!response.ok) {
                    e.preventDefault();
                    alert('Resume not found. Please add your resume.pdf file to the public folder.');
                  }
                })
                .catch(() => {
                  e.preventDefault();
                  alert('Resume not found. Please add your resume.pdf file to the public folder.');
                });
            }}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
          {/* <a 
            href="/resume.pdf" 
            download="Saliha_Resume.pdf"
            className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a> */}
          {/* <button className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
            <Download className="mr-2" size={20} />
            Download Resume
          </button> */}
        </div>
        
        <div className="flex justify-center space-x-6">
          <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
          <a href="https://www.linkedin.com/in/saliha-%C3%B6zdemir-ab732a233/"><Linkedin size={24} /></a>
            
          </button>
          <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
          <a href="https://github.com/Meryem220"><Github size={24} /></a>
            
          </button>
          {/* <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Twitter size={24} />
          </button>
          <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Instagram size={24} />
          </button> */}
        </div>
      </div>
    </section>
  );
}
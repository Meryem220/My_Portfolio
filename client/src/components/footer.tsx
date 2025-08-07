import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2024 Saliha Software Engineer. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1 flex items-center justify-center md:justify-start">
              Designed and developed with <Heart className="text-red-400 mx-1" size={16} /> by Saliha Software Engineer
            </p>
          </div>
          <div className="flex space-x-6">
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
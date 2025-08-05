import React, { useState } from 'react';
import { TermsOfService } from './TermsOfService'; // Adjust path
import { Facebook, Linkedin, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="mt-80 pt-8 border-t border-white/10 text-sm text-slate-400">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-left">

          {/* Left: Brand and Description */}
          <div className="md:max-w-sm">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg font-bold text-white">Golden Hills Capital</span>
            </div>
            <p className="leading-relaxed">
              Revolutionizing finance with AI and ML-driven solutions for smarter, faster, and secure financial services.
            </p>
            <div className="mt-2 text-slate-500">
              <span className="text-white font-semibold">24/7</span> Support
            </div>
          </div>

          {/* Center: Links */}
          <div className="flex flex-col md:items-center gap-2">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-purple-400 transition-colors text-left"
            >
              Terms of Service
            </button>
            <a href="#" className="hover:text-purple-400 transition-colors">Security</a>
          </div>

          {/* Right: Locations, Map, Social Links */}
          <div className="flex flex-col md:max-w-sm gap-4">
            {/* Location 1: USA */}
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-white font-semibold">Golden Hills (USA)</div>
                <div>
                  Flowermound, Texas, USA
                </div>
              </div>
            </div>

            {/* Location 2: India */}
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-white font-semibold">Golden Hills Capital Pvt. Ltd.</div>
                <div>
                  123 Financial District,<br />
                  India.
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-40 border border-white/10 rounded-lg overflow-hidden">
              <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1327984030914!2d78.39875!3d17.443676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916718d39ae7%3A0x67d87622ad1cb355!2sGolden%20Hills%20Capital%20India%20Private%20Limited.!5e0!3m2!1sen!2sin!4v1691497295681!5m2!1sen!2sin"

                  width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Golden Hills Location"
              ></iframe>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copy */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col md:flex-row md:justify-between text-slate-500 text-xs">
          <div>© 2025 Golden Hills Capital. All rights reserved.</div>
          <div>
            Powered by GHC •
            <span className="text-purple-400 ml-1">Always learning, always improving.</span>
          </div>
        </div>

        {/* Terms Modal */}
        <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
      </footer>
    </>
  );
};

export default Footer;

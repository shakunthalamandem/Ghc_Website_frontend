import React, { useState } from 'react';
// import { Building2 } from 'lucide-react';
import { TermsOfService } from './TermsOfService'; // Adjust path

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="mt-80 pt-8 border-t border-white/10 text-sm text-slate-400">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-left">

          {/* Left: Brand and Description */}
          <div className="md:max-w-sm">
            <div className="flex items-center space-x-2 mb-2">
              {/* <Building2 className="w-5 h-5 text-blue-400" /> */}
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

          {/* Right: Copyright & Tagline */}
          <div className="text-left md:text-right md:max-w-sm">
            <div>© 2025 Golden Hills Capital. All rights reserved.</div>
            <div className="mt-2">
              Powered by GHC •
              <span className="text-purple-400 ml-1">Always learning, always improving.</span>
            </div>
          </div>
        </div>

        {/* Terms Modal */}
        <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
      </footer>
    </>
  );
};

export default Footer;

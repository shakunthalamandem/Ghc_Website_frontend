import React from 'react';
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <Building2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">Golden Hills Capital</span>
          </div>
          <p className="text-slate-400 mb-4 leading-relaxed">
            Revolutionizing finance with AI and ML-driven solutions for smarter, faster, and secure financial services.
          </p>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-500">
              <span className="text-white font-semibold">24/7</span> Support
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Access</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Employee Handbook</a></li>
            <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Benefits Portal</a></li>
            <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">IT Support</a></li>
            <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Training Center</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-slate-400">HR: <span className="text-white">ext. 2100</span></li>
            <li className="text-slate-400">IT: <span className="text-white">ext. 3000</span></li>
            <li className="text-slate-400">Portal: <span className="text-white">ext. 4500</span></li>
            <li>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Send Feedback
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-slate-500 text-sm mb-4 md:mb-0">
          © 2025 Golden Hills Capital. All rights reserved.
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Security</a>
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm mt-8">
        <p>
          Powered by GHC • Company Portal Assistant •
          <span className="text-purple-400 ml-1">Always learning, always improving</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

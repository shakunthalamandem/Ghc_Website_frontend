import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsAnimating(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const contentSections = [
    {
      title: '1. Acceptance of Terms:',
      content:
        'By accessing this website or internal portal, you agree to be bound by these Terms of Service, all applicable laws and regulations, and accept responsibility for compliance with local laws. If you do not agree, you are prohibited from using this site.',
    },
    {
      title: '2. Disclaimer:',
      content:
        'Golden Hills Capital makes no warranties, expressed or implied, and disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. No guarantee is given regarding accuracy or outcomes from using this site or linked content.',
    },
    {
      title: '3. Accuracy of Information:',
      content:
        'The materials on this portal may contain technical, typographical, or photographic errors. Golden Hills does not guarantee any material is complete, current, or accurate. Updates may occur without notice.',
    },
    {
      title: '4. Limitations of Liability:',
      content:
        'In no event shall Golden Hills Capital, its affiliates, customers, or suppliers be liable for any damages (including loss of data, profit, or business interruption) arising from use or inability to use this site.',
    },
    {
      title: '5. Modifications:',
      content:
        'Golden Hills may revise these Terms of Service at any time without notice. Continued use of the site indicates agreement with the current version.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className={`bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto scroll-smooth border border-purple-500/20 shadow-xl transition-all duration-700 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-900/95 to-purple-900/95 p-4 border-b border-purple-500/20 z-10 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Terms of Service
          </h2>
          <motion.button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Animated Content */}
        <motion.div
          className="p-6 space-y-6 text-base text-slate-300 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                when: 'beforeChildren',
              },
            },
          }}
        >
          {contentSections.map((section, index) => (
            <motion.p
              key={index}
              className="opacity-0"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <strong>{section.title}</strong> {section.content}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

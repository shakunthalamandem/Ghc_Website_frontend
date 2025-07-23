import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { MessageSquare, Star, ThumbsUp, Send, X } from "lucide-react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const starVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.2 },
  tap: { scale: 0.9 },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const submitButtonVariants: Variants = {
  disabled: { scale: 1, opacity: 0.5 },
  enabled: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const successVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const successChildVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    // send feedback to backend here if needed
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setRating(0);
      setCategory("");
      setFeedback("");
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl blur opacity-75 animate-pulse"></div>
              <div className="relative bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                {/* Header */}
                <motion.div
                  className="flex items-center justify-between p-6 border-b border-white/10"
                  variants={childVariants}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageSquare className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h2
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        Share Your Feedback
                      </motion.h2>
                      <motion.p
                        className="text-slate-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        Help us improve the GHC Portal experience
                      </motion.p>
                    </div>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                      >
                        {/* Rating */}
                        <motion.div variants={childVariants}>
                          <label className="block text-white font-semibold mb-3">
                            How would you rate your experience?
                          </label>
                          <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <motion.button
                                key={star}
                                variants={starVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => setRating(star)}
                                className={`w-8 h-8 transition-colors duration-200 ${
                                  star <= rating
                                    ? "text-yellow-400"
                                    : "text-slate-600"
                                }`}
                              >
                                <Star className="w-full h-full fill-current" />
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>

                        {/* Category */}
                        <motion.div variants={childVariants}>
                          <label className="block text-white font-semibold mb-3">
                            What type of feedback is this?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { id: "bug", label: "Bug Report", icon: "🐛" },
                              { id: "feature", label: "Feature Request", icon: "💡" },
                              { id: "improvement", label: "Improvement", icon: "⚡" },
                              { id: "general", label: "General Feedback", icon: "💬" },
                            ].map((cat) => (
                              <motion.button
                                key={cat.id}
                                variants={categoryVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => setCategory(cat.id)}
                                className={`p-3 rounded-lg border transition-colors duration-200 ${
                                  category === cat.id
                                    ? "border-purple-400 bg-purple-600/20 text-white"
                                    : "border-white/20 bg-white/5 text-slate-300"
                                }`}
                              >
                                <span className="text-lg mr-2">{cat.icon}</span>
                                {cat.label}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>

                        {/* Feedback */}
                        <motion.div variants={childVariants}>
                          <label className="block text-white font-semibold mb-3">
                            Tell us more about your experience
                          </label>
                          <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Your comments here..."
                            className="w-full h-32 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-slate-400 resize-none focus:outline-none focus:border-purple-400 transition-colors duration-200"
                          />
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                          className="flex items-center justify-end space-x-3"
                          variants={childVariants}
                        >
                          <motion.button
                            onClick={onClose}
                            className="px-6 py-3 text-slate-300 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Cancel
                          </motion.button>
                          <motion.button
                            onClick={handleSubmit}
                            disabled={!rating || !category || !feedback.trim()}
                            variants={submitButtonVariants}
                            initial="disabled"
                            animate={
                              rating && category && feedback.trim()
                                ? "enabled"
                                : "disabled"
                            }
                            whileHover="hover"
                            whileTap="tap"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                          >
                            <Send className="w-4 h-4" />
                            <span>Submit</span>
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="text-center py-8"
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div
                          className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4"
                          variants={successChildVariants}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <ThumbsUp className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <motion.h3
                          className="text-xl font-semibold text-white mb-2"
                          variants={successChildVariants}
                        >
                          Thank You!
                        </motion.h3>
                        <motion.p
                          className="text-slate-300"
                          variants={successChildVariants}
                        >
                          Your feedback has been submitted. We appreciate it!
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;

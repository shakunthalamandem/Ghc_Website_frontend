@@ .. @@
import React, { useState } from 'react';
import { X, MessageSquare, Star, Send, ThumbsUp } from 'lucide-react';

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Simulate feedback submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setRating(0);
      setFeedback('');
      setCategory('');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
-    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
+    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
       {/* Backdrop */}
       <div 
-        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
+        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500"
         onClick={onClose}
       ></div>
       
       {/* Modal */}
-      <div className="relative w-full max-w-2xl">
+      <div className="relative w-full max-w-2xl animate-in slide-in-from-bottom-4 duration-700 ease-out">
         <div className="relative">
-          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl blur opacity-75"></div>
-          <div className="relative bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl">
+          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl blur opacity-75 animate-pulse"></div>
+          <div className="relative bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl transform transition-all duration-500 hover:scale-[1.02]">
             {/* Header */}
-            <div className="flex items-center justify-between p-6 border-b border-white/10">
+            <div className="flex items-center justify-between p-6 border-b border-white/10 animate-in slide-in-from-top duration-800 delay-200">
               <div className="flex items-center space-x-3">
-                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
+                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-in zoom-in duration-600 delay-400">
                   <MessageSquare className="w-6 h-6 text-white" />
                 </div>
                 <div>
-                  <h2 className="text-2xl font-bold text-white">Share Your Feedback</h2>
-                  <p className="text-slate-400">Help us improve the GHC Portal experience</p>
+                  <h2 className="text-2xl font-bold text-white animate-in slide-in-from-left duration-800 delay-500">Share Your Feedback</h2>
+                  <p className="text-slate-400 animate-in slide-in-from-left duration-800 delay-700">Help us improve the GHC Portal experience</p>
                 </div>
               </div>
               <button
                 onClick={onClose}
-                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
+                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-90 animate-in zoom-in duration-600 delay-600"
               >
                 <X className="w-5 h-5 text-white" />
               </button>
             </div>

             {/* Content */}
-            <div className="p-6">
+            <div className="p-6 animate-in slide-in-from-bottom duration-1000 delay-300">
               {!isSubmitted ? (
                 <div className="space-y-6">
                   {/* Rating */}
-                  <div>
-                    <label className="block text-white font-semibold mb-3">
+                  <div className="animate-in slide-in-from-left duration-800 delay-500">
+                    <label className="block text-white font-semibold mb-3 transition-all duration-300">
                       How would you rate your experience?
                     </label>
                     <div className="flex items-center space-x-2">
                       {[1, 2, 3, 4, 5].map((star) => (
                         <button
                           key={star}
                           onClick={() => setRating(star)}
-                          className={`w-8 h-8 transition-colors duration-200 ${
+                          className={`w-8 h-8 transition-all duration-300 transform hover:scale-125 animate-in zoom-in delay-${600 + star * 100} ${
                             star <= rating ? 'text-yellow-400' : 'text-slate-600 hover:text-yellow-300'
                           }`}
                         >
                           <Star className="w-full h-full fill-current" />
                         </button>
                       ))}
                       <span className="ml-3 text-slate-400">
                         {rating > 0 && (
-                          <span className="text-white">
+                          <span className="text-white animate-in slide-in-from-right duration-500">
                             {rating === 5 ? 'Excellent!' : rating === 4 ? 'Good' : rating === 3 ? 'Average' : rating === 2 ? 'Poor' : 'Very Poor'}
                           </span>
                         )}
                       </span>
                     </div>
                   </div>

                   {/* Category */}
-                  <div>
-                    <label className="block text-white font-semibold mb-3">
+                  <div className="animate-in slide-in-from-right duration-800 delay-700">
+                    <label className="block text-white font-semibold mb-3 transition-all duration-300">
                       What type of feedback is this?
                     </label>
                     <div className="grid grid-cols-2 gap-3">
                       {[
                         { id: 'bug', label: 'Bug Report', icon: '🐛' },
                         { id: 'feature', label: 'Feature Request', icon: '💡' },
                         { id: 'improvement', label: 'Improvement', icon: '⚡' },
                         { id: 'general', label: 'General Feedback', icon: '💬' }
-                      ].map((cat) => (
+                      ].map((cat, index) => (
                         <button
                           key={cat.id}
                           onClick={() => setCategory(cat.id)}
-                          className={`p-3 rounded-lg border transition-all duration-200 ${
+                          className={`p-3 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-in slide-in-from-bottom delay-${800 + index * 100} ${
                             category === cat.id
                               ? 'border-purple-400 bg-purple-600/20 text-white'
                               : 'border-white/20 bg-white/5 text-slate-300 hover:border-purple-400/50 hover:bg-white/10'
                           }`}
                         >
                           <span className="text-lg mr-2">{cat.icon}</span>
                           {cat.label}
                         </button>
                       ))}
                     </div>
                   </div>

                   {/* Feedback Text */}
-                  <div>
-                    <label className="block text-white font-semibold mb-3">
+                  <div className="animate-in slide-in-from-left duration-800 delay-900">
+                    <label className="block text-white font-semibold mb-3 transition-all duration-300">
                       Tell us more about your experience
                     </label>
                     <textarea
                       value={feedback}
                       onChange={(e) => setFeedback(e.target.value)}
                       placeholder="Share your thoughts, suggestions, or report any issues you encountered..."
-                      className="w-full h-32 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-slate-400 resize-none focus:outline-none focus:border-purple-400 transition-colors duration-200"
+                      className="w-full h-32 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-slate-400 resize-none focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 transform focus:scale-[1.02]"
                     />
                   </div>

                   {/* Submit Button */}
-                  <div className="flex items-center justify-end space-x-3">
+                  <div className="flex items-center justify-end space-x-3 animate-in slide-in-from-bottom duration-800 delay-1000">
                     <button
                       onClick={onClose}
-                      className="px-6 py-3 text-slate-300 hover:text-white transition-colors duration-200"
+                      className="px-6 py-3 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105"
                     >
                       Cancel
                     </button>
                     <button
                       onClick={handleSubmit}
                       disabled={!rating || !category || !feedback.trim()}
-                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
+                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2 animate-pulse"
                     >
                       <Send className="w-4 h-4" />
                       <span>Submit Feedback</span>
                     </button>
                   </div>
                 </div>
               ) : (
-                <div className="text-center py-8">
-                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
+                <div className="text-center py-8 animate-in zoom-in duration-800">
+                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-600 delay-200">
                     <ThumbsUp className="w-8 h-8 text-green-400" />
                   </div>
-                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
-                  <p className="text-slate-300">
+                  <h3 className="text-xl font-semibold text-white mb-2 animate-in slide-in-from-bottom duration-600 delay-400">Thank You!</h3>
+                  <p className="text-slate-300 animate-in slide-in-from-bottom duration-600 delay-600">
                     Your feedback has been submitted successfully. We appreciate your input and will use it to improve the portal.
                   </p>
                 </div>
               )}
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
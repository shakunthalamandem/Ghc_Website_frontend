@@ .. @@
                {/* Key Features */}
                <section>
                  <h3 className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-1200 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    GHC Portal Features
                  </h3>
-                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-1400 ${
+                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-1400 ${
                     isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                   }`}>
-                    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20">
-                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
+                    <div className={`bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 ${
+                      isAnimating ? 'animate-in slide-in-from-left delay-1600' : ''
+                    }`}>
+                      <div className={`w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
+                        isAnimating ? 'animate-in zoom-in delay-1800' : ''
+                      }`}>
                         <Brain className="w-6 h-6 text-purple-400" />
                       </div>
-                      <h4 className="text-lg font-semibold text-white mb-3">Software Product Development</h4>
-                      <p className="text-slate-300 text-sm">
+                      <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2000' : ''
+                      }`}>Software Product Development</h4>
+                      <p className={`text-slate-300 text-sm transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2200' : ''
+                      }`}>
 We design and develop robust fintech platforms using AI and ML technologies to deliver personalized financial services and seamless digital experiences.
                       </p>
                     </div>
-                    <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 rounded-2xl p-6 border border-blue-500/20">
-                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
+                    <div className={`bg-gradient-to-br from-blue-900/30 to-teal-900/30 rounded-2xl p-6 border border-blue-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${
+                      isAnimating ? 'animate-in slide-in-from-bottom delay-1700' : ''
+                    }`}>
+                      <div className={`w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
+                        isAnimating ? 'animate-in zoom-in delay-1900' : ''
+                      }`}>
                         <Zap className="w-6 h-6 text-blue-400" />
                       </div>
-                      <h4 className="text-lg font-semibold text-white mb-3">Decision Making Analytics</h4>
-                      <p className="text-slate-300 text-sm">
+                      <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2100' : ''
+                      }`}>Decision Making Analytics</h4>
+                      <p className={`text-slate-300 text-sm transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2300' : ''
+                      }`}>
 Our analytics tools provide real-time insights and data-driven intelligence to support faster, more accurate financial decision-making.
                       </p>
                     </div>
-                    <div className="bg-gradient-to-br from-teal-900/30 to-green-900/30 rounded-2xl p-6 border border-teal-500/20">
-                      <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center mb-4">
+                    <div className={`bg-gradient-to-br from-teal-900/30 to-green-900/30 rounded-2xl p-6 border border-teal-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 ${
+                      isAnimating ? 'animate-in slide-in-from-right delay-1800' : ''
+                    }`}>
+                      <div className={`w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
+                        isAnimating ? 'animate-in zoom-in delay-2000' : ''
+                      }`}>
                         <Search className="w-6 h-6 text-teal-400" />
                       </div>
-                      <h4 className="text-lg font-semibold text-white mb-3">Research & Analytics</h4>
-                      <p className="text-slate-300 text-sm">
+                      <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2200' : ''
+                      }`}>Research & Analytics</h4>
+                      <p className={`text-slate-300 text-sm transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2400' : ''
+                      }`}>
      Access deep market insights, trend analysis, and intelligent recommendations powered by machine learning and big data.
                       </p>
                     </div>
-                    <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/20">
-                      <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4">
+                    <div className={`bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 ${
+                      isAnimating ? 'animate-in slide-in-from-left delay-1900' : ''
+                    }`}>
+                      <div className={`w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
+                        isAnimating ? 'animate-in zoom-in delay-2100' : ''
+                      }`}>
                         <Shield className="w-6 h-6 text-orange-400" />
                       </div>
-                      <h4 className="text-lg font-semibold text-white mb-3">Visualization Insights</h4>
-                      <p className="text-slate-300 text-sm">
+                      <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2300' : ''
+                      }`}>Visualization Insights</h4>
+                      <p className={`text-slate-300 text-sm transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2500' : ''
+                      }`}>
   Transform complex financial data into intuitive visual dashboards that help stakeholders analyze, interpret, and act with clarity.
                       </p>
                     </div>
-                    <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-6 border border-pink-500/20">
-                      <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-4">
+                    <div className={`bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-6 border border-pink-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 ${
+                      isAnimating ? 'animate-in slide-in-from-bottom delay-2000' : ''
+                    }`}>
+                      <div className={`w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
+                        isAnimating ? 'animate-in zoom-in delay-2200' : ''
+                      }`}>
                         <Clock className="w-6 h-6 text-pink-400" />
                       </div>
-                      <h4 className="text-lg font-semibold text-white mb-3">Data Management & RPA</h4>
-                      <p className="text-slate-300 text-sm">
+                      <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2400' : ''
+                      }`}>Data Management & RPA</h4>
+                      <p className={`text-slate-300 text-sm transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2600' : ''
+                      }`}>
             Automate routine financial operations and ensure secure, structured data flow using robotic process automation and smart data pipelines.
                       </p>
                     </div>
-                    <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
-                      <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
+                    <div className={`bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 ${
+                      isAnimating ? 'animate-in slide-in-from-right delay-2100' : ''
+                    }`}>
+                      <div className={`w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
+                        isAnimating ? 'animate-in zoom-in delay-2300' : ''
+                      }`}>
                         <MessageSquare className="w-6 h-6 text-indigo-400" />
                       </div>
-                      <h4 className="text-lg font-semibold text-white mb-3">Continuous Learning</h4>
-                      <p className="text-slate-300 text-sm">
+                      <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2500' : ''
+                      }`}>Continuous Learning</h4>
+                      <p className={`text-slate-300 text-sm transition-all duration-500 ${
+                        isAnimating ? 'animate-in slide-in-from-bottom delay-2700' : ''
+                      }`}>
 Our AI models continuously evolve through usage and feedback, delivering increasingly relevant financial insights over time.
                       </p>
                     </div>
                   </div>
                 </section>
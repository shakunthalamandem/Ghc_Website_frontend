import React from 'react';
import { X, Clock, Search, ChevronRight, Trash2 } from 'lucide-react';

interface QueryResponse {
  id: string;
  query: string;
  optimizedQuery: string;
  response: string;
  timestamp: Date;
  processingTime: number;
}

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  queryHistory: QueryResponse[];
  onSelectQuery: (query: string) => void;
  onClearHistory: () => void;
}

export const HistorySidebar: React.FC<HistorySidebarProps> = ({ 
  isOpen, 
  onClose, 
  queryHistory, 
  onSelectQuery,
  onClearHistory 
}) => {
  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 animate-in fade-in"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-slate-900/95 backdrop-blur-md border-l border-white/20 z-50 transform transition-all duration-500 ease-out ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Search History</h2>
              <p className="text-slate-400 text-sm">Recent queries and results</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {queryHistory.length > 0 ? (
            <>
              {/* Clear History Button */}
              <div className="p-4 border-b border-white/10">
                <button
                  onClick={onClearHistory}
                  className="w-full bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg px-4 py-2 flex items-center justify-center space-x-2 text-red-400 hover:text-red-300 transition-all duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm">Clear History</span>
                </button>
              </div>

              {/* History Items */}
              <div className="p-4 space-y-3">
                {queryHistory.map((item, index) => (
                  <div
                    key={item.id}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:transform hover:scale-[1.02]"
                    onClick={() => onSelectQuery(item.query)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Search className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-xs text-slate-400 font-medium">
                          Query #{queryHistory.length - index}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-slate-500">
                          {formatTimeAgo(item.timestamp)}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors duration-200" />
                      </div>
                    </div>
                    
                    <h4 className="text-white font-medium mb-2 leading-tight">
                      {truncateText(item.query, 80)}
                    </h4>
                    
                    <div className="text-xs text-slate-400 mb-3">
                      <span className="bg-slate-800/50 rounded px-2 py-1">
                        Optimized: {truncateText(item.optimizedQuery, 60)}
                      </span>
                    </div>
                    
                    <div className="text-sm text-slate-300 mb-3 leading-relaxed">
                      {truncateText(item.response, 120)}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">
                        Processing: {item.processingTime}s
                      </span>
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                        Click to view →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No Search History</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your recent searches will appear here. Start by asking a question about GHC policies, 
                benefits, or procedures to build your search history.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="text-center text-xs text-slate-500">
            <p>History is stored locally and cleared on logout</p>
          </div>
        </div>
      </div>
    </>
  );
};
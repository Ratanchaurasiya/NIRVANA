import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const ToastNotification = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 sm:right-6 z-50 animate-fadeIn">
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-panel border shadow-2xl backdrop-blur-xl ${
        type === 'error' 
          ? 'border-red-500/50 text-red-200 bg-red-950/80' 
          : 'border-amber-500/50 text-amber-200 bg-[#0B132B]/90'
      }`}>
        {type === 'error' ? (
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
        ) : (
          <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
        )}
        <span className="text-xs sm:text-sm font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;

import React from 'react';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  description?: string;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full no-print">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="p-4 bg-[#1A1815] text-[#F6F3EC] border border-[#C5A059]/40 shadow-2xl rounded-xs flex items-start justify-between space-x-3 animate-fade-in font-sans-ui"
        >
          <div className="flex items-start space-x-2.5">
            {t.type === 'success' && <CheckCircle className="w-4 h-4 text-[#C5A059] flex-none mt-0.5" />}
            {t.type === 'info' && <Info className="w-4 h-4 text-[#C5A059] flex-none mt-0.5" />}
            {t.type === 'warning' && <AlertCircle className="w-4 h-4 text-amber-400 flex-none mt-0.5" />}

            <div className="space-y-0.5">
              <h4 className="font-mono-spec text-xs font-bold text-[#FAF8F5] uppercase">
                {t.title}
              </h4>
              {t.description && (
                <p className="text-[11px] text-[#D4CDC0] font-light">
                  {t.description}
                </p>
              )}
            </div>
          </div>

          <button onClick={() => onDismiss(t.id)} className="text-[#9E9689] hover:text-[#FAF8F5] p-0.5">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

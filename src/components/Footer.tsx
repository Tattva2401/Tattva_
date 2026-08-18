import React from 'react';
import type { ViewMode } from '../types/car';
import { Printer, ArrowUp } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1815] text-[#F6F3EC] border-t border-hairline pt-12 pb-8 mt-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-sm border border-[#C5A059]/40 flex items-center justify-center bg-[#121110] text-[#C5A059] font-archival font-bold text-sm">
                AI
              </div>
              <h3 className="font-archival text-lg font-bold tracking-widest text-[#FAF8F5] uppercase">
                Automotive Icons
              </h3>
            </div>
            <p className="font-editorial-serif text-sm italic text-[#D4CDC0] leading-relaxed max-w-md">
              A curated digital museum archive cataloging automotive icons across history — where photography and typography carry the experience and UI chrome disappears.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2 font-mono-spec text-xs">
            <span className="text-[#C5A059] uppercase block font-bold tracking-wider">EXHIBITION VIEWS</span>
            <ul className="space-y-1.5 text-[#A0988C]">
              <li>
                <button onClick={() => onViewChange('grid')} className="hover:text-[#FAF8F5] transition-colors">
                  • Gallery Grid View
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('timeline')} className="hover:text-[#FAF8F5] transition-colors">
                  • Chronological Timeline
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('compare')} className="hover:text-[#FAF8F5] transition-colors">
                  • Spec Comparison Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('about')} className="hover:text-[#FAF8F5] transition-colors">
                  • Curatorial Philosophy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Actions & Print */}
          <div className="space-y-2 font-mono-spec text-xs">
            <span className="text-[#C5A059] uppercase block font-bold tracking-wider">ACTIONS & UTILITIES</span>
            <div className="space-y-2">
              <button
                onClick={() => window.print()}
                className="flex items-center space-x-2 px-3 py-1.5 bg-[#2A2723] hover:bg-[#38342F] text-[#E2DCCE] border border-hairline rounded-xs transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Print Physical Catalog</span>
              </button>

              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-3 py-1.5 bg-[#2A2723] hover:bg-[#38342F] text-[#E2DCCE] border border-hairline rounded-xs transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Legal & Citation */}
        <div className="pt-6 border-t border-[#2A2723] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-spec text-[#7A7367] gap-3">
          <p>© 2026 Automotive Icons Museum Archive • Editorial Quality Curation</p>
          <p>Restraint & Objectivity in Automotive History</p>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import type { CategoryId, FilterLogic } from '../types/car';
import { CATEGORIES } from '../data/categories';
import { Tag, RefreshCw } from 'lucide-react';

interface CategoryFilterBarProps {
  selectedCategories: CategoryId[];
  onToggleCategory: (catId: CategoryId) => void;
  filterLogic: FilterLogic;
  onToggleFilterLogic: () => void;
  onClearCategories: () => void;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  selectedCategories,
  onToggleCategory,
  filterLogic,
  onToggleFilterLogic,
  onClearCategories,
}) => {
  return (
    <div className="w-full bg-[#F6F3EC] dark:bg-[#121110] border-b border-hairline py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Controls Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          
          <div className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#7A7367] dark:text-[#9E9689] uppercase">
            <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>SIGNIFICANCE CATEGORIES</span>
            {selectedCategories.length > 0 && (
              <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-[#C5A059] text-[#121110] font-bold rounded-xs">
                {selectedCategories.length} ACTIVE
              </span>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* AND/OR Filter Logic Switch */}
            <div className="flex items-center space-x-2 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] px-2 py-1 rounded-xs border border-hairline text-xs font-mono-spec">
              <span className="text-[10px] text-[#7A7367] dark:text-[#9E9689] uppercase">MATCH MODE:</span>
              <button
                onClick={onToggleFilterLogic}
                className="px-2 py-0.5 rounded-xs text-[10px] font-bold tracking-wider bg-[#1A1815] text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#2A2723] transition-colors"
                title="Click to toggle between AND (Must match all selected tags) and OR (Match any selected tag)"
              >
                {filterLogic === 'AND' ? 'MATCH ALL (AND)' : 'MATCH ANY (OR)'}
              </button>
            </div>

            {/* Clear All Categories */}
            {selectedCategories.length > 0 && (
              <button
                onClick={onClearCategories}
                className="flex items-center space-x-1 text-xs font-mono-spec text-[#C5A059] hover:underline"
              >
                <RefreshCw className="w-3 h-3" />
                <span>CLEAR TAGS</span>
              </button>
            )}
          </div>

        </div>

        {/* Vintage Typographic Category Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategories.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => onToggleCategory(cat.id)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-xs text-xs font-sans-ui transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#1B3B2B] text-[#F6F3EC] border-[#C5A059] shadow-xs'
                    : 'bg-[#EAE5D9]/50 dark:bg-[#1C1A17] text-[#4A443B] dark:text-[#B8B0A2] border-hairline hover:border-[#C5A059]/50 hover:bg-[#E2DCCE] dark:hover:bg-[#25221F]'
                }`}
              >
                <span className="text-xs opacity-75">{cat.symbol}</span>
                <span className="font-mono-spec text-[11px] tracking-wider uppercase font-medium">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

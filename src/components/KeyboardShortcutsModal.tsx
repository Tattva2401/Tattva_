import { X, Keyboard } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '⌘ + K', desc: 'Open Typography-Forward Quick Search' },
    { key: '1 — 7', desc: 'Switch Navigation Views (Gallery, Map, Compare, etc.)' },
    { key: '⌘ + D', desc: 'Toggle Dark Mode / Cream Paper Theme' },
    { key: '⌘ + M', desc: 'Mute / Unmute Engine Sound Synthesizer' },
    { key: 'Esc', desc: 'Dismiss Active Inspection Studio or Modal' },
    { key: '⌘ + P', desc: 'Print Exhibition Catalog or Wall Poster' },
    { key: '?', desc: 'Open Keyboard Shortcut Cheat Sheet' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/85 backdrop-blur-md flex justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#F6F3EC] dark:bg-[#161412] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline shadow-2xl rounded-xs overflow-hidden flex flex-col my-auto">
        
        <div className="px-6 py-4 bg-[#1A1815] text-[#F6F3EC] border-b border-[#C5A059]/40 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono-spec">
            <Keyboard className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#C5A059] font-bold uppercase">
              KEYBOARD SHORTCUT COMMAND CENTER
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-[#9E9689] hover:text-[#FAF8F5]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-3 font-mono-spec text-xs">
          {shortcuts.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-[#EAE5D9]/40 dark:bg-[#1C1A17] border border-hairline rounded-xs">
              <span className="text-[#615B52] dark:text-[#A0988C]">{s.desc}</span>
              <kbd className="px-2.5 py-1 bg-[#1A1815] text-[#C5A059] font-bold border border-[#C5A059]/30 rounded-xs">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

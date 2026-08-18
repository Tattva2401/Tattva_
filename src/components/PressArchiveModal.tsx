import React from 'react';
import type { Car, Citation } from '../types/car';
import { X, Layers, FileText, CheckCircle2 } from 'lucide-react';

interface PressArchiveModalProps {
  car: Car | null;
  onClose: () => void;
}

export const PressArchiveModal: React.FC<PressArchiveModalProps> = ({ car, onClose }) => {
  if (!car) return null;

  const defaultCitations: Citation[] = car.citations || [
    {
      claim: 'Verified top speed record for production road cars.',
      verifyingBody: 'Guinness World Records / Technical Inspection Audit',
      year: car.startYear.toString(),
      notes: 'GPS and radar verified telemetry on closed proving grounds.'
    },
    {
      claim: 'Official FIA Motorsport Homologation Certification.',
      verifyingBody: 'Fédération Internationale de l’Automobile (FIA)',
      year: car.startYear.toString(),
      notes: 'Required minimum production units verified by racing commission.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/85 backdrop-blur-md flex justify-center p-4 animate-fade-in">
      
      <div className="relative w-full max-w-4xl bg-[#F6F3EC] dark:bg-[#161412] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline shadow-2xl rounded-xs overflow-hidden flex flex-col my-auto max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#1A1815] text-[#F6F3EC] border-b border-[#C5A059]/40 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono-spec">
            <Layers className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#C5A059] font-bold uppercase">
              PERIOD PRESS & CITATIONS AUDIT ARCHIVE
            </span>
            <span className="text-[#9E9689]">• {car.make} {car.model}</span>
          </div>
          <button onClick={onClose} className="p-1 text-[#9E9689] hover:text-[#FAF8F5]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Verified Citations Panel */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] font-bold uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>VERIFIED HISTORICAL CLAIMS & CITATIONS</span>
            </div>

            <div className="space-y-3 font-mono-spec text-xs">
              {defaultCitations.map((cit, i) => (
                <div key={i} className="p-4 bg-[#EAE5D9]/40 dark:bg-[#1C1A17] border border-hairline rounded-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[#C5A059] font-bold">
                    <span>CLAIM #{i + 1}: {cit.claim}</span>
                    <span className="text-[10px] text-[#7A7367]">{cit.year}</span>
                  </div>
                  <div className="text-[#615B52] dark:text-[#A0988C]">
                    VERIFYING BODY: <span className="font-bold text-[#1C1A17] dark:text-[#E8E3D8]">{cit.verifyingBody}</span>
                  </div>
                  {cit.notes && (
                    <p className="text-[11px] font-sans-ui text-[#7A7367] italic pt-1">
                      "{cit.notes}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Period Press & Advertising Material */}
          <div className="space-y-4 border-t border-hairline pt-6">
            <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] font-bold uppercase">
              <FileText className="w-4 h-4" />
              <span>PERIOD PRINT ADVERTISING & FACTORY PRESS RELEASES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#EAE5D9]/40 dark:bg-[#1C1A17] border border-hairline rounded-xs space-y-2">
                <div className="aspect-[4/3] bg-[#121110] overflow-hidden rounded-xs border border-hairline">
                  <img src={car.galleryImages[0] || car.heroImage} alt="Period press" className="w-full h-full object-cover saturate-90" />
                </div>
                <h4 className="font-archival text-sm font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
                  Official Factory Debut Press Release
                </h4>
                <p className="font-sans-ui text-xs text-[#7A7367]">
                  Archival announcement distributed to international motoring journalists at launch.
                </p>
              </div>

              <div className="p-4 bg-[#EAE5D9]/40 dark:bg-[#1C1A17] border border-hairline rounded-xs space-y-2">
                <div className="aspect-[4/3] bg-[#121110] overflow-hidden rounded-xs border border-hairline">
                  <img src={car.galleryImages[1] || car.heroImage} alt="Period press" className="w-full h-full object-cover saturate-90" />
                </div>
                <h4 className="font-archival text-sm font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
                  Period Magazine Road Test Citation
                </h4>
                <p className="font-sans-ui text-xs text-[#7A7367]">
                  Original road test telemetry published during period manufacturing runs.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

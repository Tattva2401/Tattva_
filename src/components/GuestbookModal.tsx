import React, { useState, useEffect } from 'react';
import { CARS } from '../data/carsData';
import { X, Award, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface GuestbookEntry {
  id: string;
  name: string;
  cityCountry: string;
  votedCarId: string;
  message: string;
  timestamp: string;
}

interface GuestbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuestbookModal: React.FC<GuestbookModalProps> = ({ isOpen, onClose }) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    const saved = localStorage.getItem('automotive_icons_guestbook');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return [
      {
        id: 'g1',
        name: 'Lord Montagu of Beaulieu',
        cityCountry: 'Hampshire, United Kingdom',
        votedCarId: 'mercedes-300sl-gullwing',
        message: 'A superlative exhibition. The direct fuel injection telemetry on the 300SL is masterfully cataloged.',
        timestamp: '2026-08-10'
      },
      {
        id: 'g2',
        name: 'Dr. Wolfgang Porsche',
        cityCountry: 'Stuttgart, Germany',
        votedCarId: 'porsche-959',
        message: 'Restraint in design lets the engineering achievements carry the experience.',
        timestamp: '2026-08-09'
      }
    ];
  });

  const [name, setName] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [votedCarId, setVotedCarId] = useState(CARS[0]?.id || '');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('automotive_icons_guestbook', JSON.stringify(entries));
  }, [entries]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: `entry-${Date.now()}`,
      name: name.trim(),
      cityCountry: cityCountry.trim() || 'Global Patron',
      votedCarId,
      message: message.trim(),
      timestamp: new Date().toISOString().split('T')[0]
    };

    setEntries((prev) => [newEntry, ...prev]);
    setName('');
    setCityCountry('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Calculate Car of the Century Vote Tallies
  const voteCounts: Record<string, number> = {};
  entries.forEach((e) => {
    voteCounts[e.votedCarId] = (voteCounts[e.votedCarId] || 0) + 1;
  });

  const sortedVotes = Object.entries(voteCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/90 backdrop-blur-md flex justify-center p-4 animate-fade-in">
      
      <div className="relative w-full max-w-4xl bg-[#F6F3EC] dark:bg-[#161412] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline shadow-2xl rounded-xs overflow-hidden flex flex-col my-auto max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#1A1815] text-[#F6F3EC] border-b border-[#C5A059]/40 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono-spec">
            <MessageSquare className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#C5A059] font-bold uppercase">
              MUSEUM VISITOR REGISTRY & CAR OF THE CENTURY BALLOT
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-[#9E9689] hover:text-[#FAF8F5]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guestbook Sign Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-hairline pb-2">
                <h3 className="font-archival text-xl font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
                  Sign the Exhibition Guestbook
                </h3>
                <p className="font-editorial-serif text-xs italic text-[#7A7367]">
                  Cast your ballot for "Car of the Century" and record your curatorial notes.
                </p>
              </div>

              {submitted && (
                <div className="p-3 bg-[#1B3B2B] text-[#E8E3D8] text-xs font-mono-spec rounded-xs border border-[#C5A059]/40 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Thank you! Your entry and vote have been logged into the museum ledger.</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono-spec text-[#7A7367] uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jean Bugatti"
                  className="w-full p-2 bg-[#EAE5D9]/50 dark:bg-[#1C1A17] border border-hairline text-sm focus:outline-none focus:border-[#C5A059] rounded-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono-spec text-[#7A7367] uppercase mb-1">City & Country</label>
                <input
                  type="text"
                  value={cityCountry}
                  onChange={(e) => setCityCountry(e.target.value)}
                  placeholder="e.g. Paris, France"
                  className="w-full p-2 bg-[#EAE5D9]/50 dark:bg-[#1C1A17] border border-hairline text-sm focus:outline-none focus:border-[#C5A059] rounded-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-spec text-[#7A7367] uppercase mb-1">
                  Vote for "Car of the Century"
                </label>
                <select
                  value={votedCarId}
                  onChange={(e) => setVotedCarId(e.target.value)}
                  className="w-full p-2 bg-[#EAE5D9]/50 dark:bg-[#1C1A17] border border-hairline text-sm font-mono-spec focus:outline-none focus:border-[#C5A059] rounded-xs"
                >
                  {CARS.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.make} {car.model} ({car.startYear})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-spec text-[#7A7367] uppercase mb-1">Curatorial Note / Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts on the exhibition..."
                  className="w-full p-2 bg-[#EAE5D9]/50 dark:bg-[#1C1A17] border border-hairline text-sm focus:outline-none focus:border-[#C5A059] rounded-xs h-24"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#C5A059] hover:bg-[#D4AF66] text-[#121110] font-mono-spec text-xs font-bold uppercase rounded-xs transition-colors flex items-center justify-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Guestbook Entry</span>
              </button>
            </form>

            {/* Car of the Century Live Leaderboard */}
            <div className="space-y-4 bg-[#EAE5D9]/40 dark:bg-[#1C1A17] p-5 border border-hairline rounded-xs">
              <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] font-bold uppercase border-b border-hairline pb-2">
                <Award className="w-4 h-4" />
                <span>CAR OF THE CENTURY • VISITOR POLL TALLIES</span>
              </div>

              <div className="space-y-2 font-mono-spec text-xs">
                {sortedVotes.slice(0, 5).map(([carId, count], idx) => {
                  const car = CARS.find((c) => c.id === carId);
                  if (!car) return null;
                  return (
                    <div key={carId} className="flex justify-between items-center p-2 bg-[#F6F3EC] dark:bg-[#161412] border border-hairline rounded-xs">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-[#C5A059]">#{idx + 1}</span>
                        <span className="text-[#1C1A17] dark:text-[#E8E3D8]">{car.make} {car.model}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-[#1A1815] text-[#C5A059] font-bold rounded-xs text-[10px]">
                        {count} VOTES
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Recent Guest Entries Ledger */}
          <div className="space-y-3 border-t border-hairline pt-6">
            <h4 className="font-archival text-lg font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
              Recent Visitor Log Entries
            </h4>

            <div className="space-y-3 font-mono-spec text-xs">
              {entries.map((entry) => {
                const votedCar = CARS.find((c) => c.id === entry.votedCarId);
                return (
                  <div key={entry.id} className="p-4 bg-[#EAE5D9]/30 dark:bg-[#1C1A17] border border-hairline rounded-xs space-y-1">
                    <div className="flex justify-between items-center text-[#C5A059] font-bold">
                      <span>{entry.name} ({entry.cityCountry})</span>
                      <span className="text-[10px] text-[#7A7367]">{entry.timestamp}</span>
                    </div>
                    {votedCar && (
                      <p className="text-[11px] text-[#7A7367]">
                        Voted for: <span className="font-bold text-[#1C1A17] dark:text-[#E8E3D8]">{votedCar.make} {votedCar.model}</span>
                      </p>
                    )}
                    <p className="font-sans-ui text-xs text-[#524B42] dark:text-[#A8A092] italic pt-1">
                      "{entry.message}"
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

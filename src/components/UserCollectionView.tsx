import React, { useState } from 'react';
import type { Car, UserCollection } from '../types/car';
import { CARS } from '../data/carsData';
import { CarCard } from './CarCard';
import { Bookmark, Plus, Download, Printer, Trash2 } from 'lucide-react';

interface UserCollectionViewProps {
  collections: UserCollection[];
  onCreateCollection: (name: string, description: string) => void;
  onDeleteCollection: (id: string) => void;
  onRemoveCarFromCollection: (collectionId: string, carId: string) => void;
  onSelectCar: (car: Car) => void;
}

export const UserCollectionView: React.FC<UserCollectionViewProps> = ({
  collections,
  onCreateCollection,
  onDeleteCollection,
  onRemoveCarFromCollection,
  onSelectCar,
}) => {
  const [activeCollectionId, setActiveCollectionId] = useState<string>(collections[0]?.id || '');
  const [newCollName, setNewCollName] = useState('');
  const [newCollDesc, setNewCollDesc] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const activeCollection = collections.find((c) => c.id === activeCollectionId) || collections[0];

  const collectionCars = activeCollection
    ? CARS.filter((car) => activeCollection.carIds.includes(car.id))
    : [];

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollName.trim()) return;
    onCreateCollection(newCollName.trim(), newCollDesc.trim());
    setNewCollName('');
    setNewCollDesc('');
    setIsCreating(false);
  };

  const handleExportJSON = () => {
    if (!activeCollection) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeCollection, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${activeCollection.name.toLowerCase().replace(/\s+/g, '_')}_manifest.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-hairline pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#C5A059] uppercase">
            <Bookmark className="w-4 h-4" />
            <span>CUSTOM EXHIBITION COLLECTION MANAGER</span>
          </div>
          <h2 className="font-archival text-3xl sm:text-4xl text-[#1C1A17] dark:text-[#E8E3D8] font-bold tracking-wide mt-1">
            My Curated Museum Collections
          </h2>
          <p className="font-editorial-serif text-base italic text-[#615B52] dark:text-[#A0988C] mt-1">
            Curate bespoke exhibition portfolios, organize thematic archives, and export custom museum catalogs.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsCreating(true)}
            className="px-3.5 py-2 bg-[#C5A059] hover:bg-[#D4AF66] text-[#121110] font-mono-spec text-xs font-bold uppercase rounded-xs transition-colors flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>New Collection</span>
          </button>
        </div>
      </div>

      {/* Create Modal */}
      {isCreating && (
        <form onSubmit={handleCreate} className="p-6 bg-[#EAE5D9]/50 dark:bg-[#1C1A17] border border-hairline rounded-xs space-y-4 max-w-xl">
          <h3 className="font-archival text-lg font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
            Create Custom Exhibition Collection
          </h3>
          <div>
            <label className="block text-xs font-mono-spec text-[#7A7367] uppercase mb-1">Collection Title</label>
            <input
              type="text"
              value={newCollName}
              onChange={(e) => setNewCollName(e.target.value)}
              placeholder="e.g., 200 MPH Club or Italian Design Masterpieces"
              className="w-full p-2 bg-[#F6F3EC] dark:bg-[#121110] border border-hairline text-sm focus:outline-none focus:border-[#C5A059] rounded-xs"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono-spec text-[#7A7367] uppercase mb-1">Description / Curatorial Premise</label>
            <textarea
              value={newCollDesc}
              onChange={(e) => setNewCollDesc(e.target.value)}
              placeholder="Brief description of why these vehicles belong together..."
              className="w-full p-2 bg-[#F6F3EC] dark:bg-[#121110] border border-hairline text-sm focus:outline-none focus:border-[#C5A059] rounded-xs h-20"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="px-3 py-1.5 font-mono-spec text-xs text-[#7A7367]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#C5A059] text-[#121110] font-mono-spec text-xs font-bold uppercase rounded-xs"
            >
              Create Collection
            </button>
          </div>
        </form>
      )}

      {/* Collection Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-hairline">
        {collections.map((coll) => {
          const isSelected = activeCollection?.id === coll.id;
          return (
            <button
              key={coll.id}
              onClick={() => setActiveCollectionId(coll.id)}
              className={`px-4 py-2 font-mono-spec text-xs uppercase transition-all rounded-xs border flex items-center space-x-2 ${
                isSelected
                  ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059] font-bold shadow-xs'
                  : 'bg-[#EAE5D9]/40 dark:bg-[#1E1C1A] text-[#615B52] border-hairline'
              }`}
            >
              <span>{coll.name}</span>
              <span className="px-1.5 py-0.5 bg-[#C5A059] text-[#121110] text-[10px] font-bold rounded-xs">
                {coll.carIds.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Collection Header & Export Actions */}
      {activeCollection && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#EAE5D9]/30 dark:bg-[#181614] p-6 border border-hairline rounded-xs">
            <div>
              <span className="font-mono-spec text-[10px] text-[#C5A059] uppercase font-bold tracking-widest block">
                ACTIVE EXHIBITION MANIFEST
              </span>
              <h3 className="font-archival text-2xl font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
                {activeCollection.name}
              </h3>
              {activeCollection.description && (
                <p className="font-editorial-serif text-sm italic text-[#615B52] dark:text-[#A0988C] mt-1">
                  "{activeCollection.description}"
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2 font-mono-spec text-xs">
              <button
                onClick={() => onDeleteCollection(activeCollection.id)}
                className="px-3 py-1.5 bg-[#5A1827] text-[#FAF8F5] border border-red-500/40 rounded-xs hover:bg-red-900 flex items-center space-x-1.5"
                title="Delete Collection"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>DELETE</span>
              </button>
              <button
                onClick={handleExportJSON}
                className="px-3 py-1.5 bg-[#1A1815] text-[#C5A059] border border-[#C5A059]/40 rounded-xs hover:bg-[#25221F] flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>EXPORT JSON</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 bg-[#1A1815] text-[#E8E3D8] border border-hairline rounded-xs hover:bg-[#25221F] flex items-center space-x-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT CATALOG</span>
              </button>
            </div>
          </div>

          {/* Grid of Cars in Collection */}
          {collectionCars.length === 0 ? (
            <div className="py-12 text-center bg-[#EAE5D9]/30 dark:bg-[#1A1815] border border-hairline rounded-xs space-y-2 font-mono-spec text-xs text-[#7A7367]">
              <p>No vehicles added to "{activeCollection.name}" yet.</p>
              <p>Browse the main gallery grid and click "Add to Collection" on any exhibit placard.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionCars.map((car) => (
                <div key={car.id} className="relative group">
                  <CarCard car={car} onSelectCar={onSelectCar} />
                  <button
                    onClick={() => onRemoveCarFromCollection(activeCollection.id, car.id)}
                    className="absolute top-3 right-3 z-30 p-1.5 bg-[#121110]/90 text-red-400 hover:text-red-300 border border-hairline rounded-xs"
                    title="Remove from collection"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

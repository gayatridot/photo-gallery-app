import React, { useState, useReducer, useMemo, useCallback } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { favouritesReducer, initialState, ACTION_TYPES } from '../reducer/favouritesReducer';
import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { PhotoCard } from './PhotoCard';

export const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  // Requirement 7: useCallback for search filter handler
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_FAVOURITE, payload: photoId });
  }, []);

  // Requirement 7: useMemo to compute filtered photo list efficiently
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) return photos;
    const query = searchTerm.toLowerCase().trim();
    return photos.filter((photo) => photo.author.toLowerCase().includes(query));
  }, [photos, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Discover Photos</h2>
            <p className="text-sm text-slate-500">Explore curated photographs from Picsum</p>
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-600 font-medium animate-pulse">Loading stunning photographs...</p>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto my-16 p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center shadow-sm">
            <div className="inline-flex p-3 bg-rose-100 text-rose-600 rounded-xl mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-rose-900 mb-1">Failed to Load Photos</h3>
            <p className="text-sm text-rose-700">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500 font-medium">
                Showing <span className="font-bold text-slate-800">{filteredPhotos.length}</span> of {photos.length} photos
              </p>
              <div className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-semibold border border-indigo-100">
                Favourites saved: {state.favourites.length}
              </div>
            </div>

            {filteredPhotos.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 font-medium text-base">No authors found matching "{searchTerm}"</p>
               <button
                  onClick={() => setSearchTerm('')}
                  className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all duration-200"
                >
                  Clear Search Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPhotos.map((photo) => {
                  const isFavourite = state.favourites.includes(photo.id);
                  return (
                    <PhotoCard
                      key={photo.id}
                      photo={photo}
                      isFavourite={isFavourite}
                      onToggleFavourite={handleToggleFavourite}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};
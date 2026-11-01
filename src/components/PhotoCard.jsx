import React, { memo } from 'react';

export const PhotoCard = memo(({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <button
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 shadow-md ${
            isFavourite
              ? 'bg-rose-500 text-white scale-110 shadow-rose-200'
              : 'bg-white/80 text-slate-600 hover:bg-white hover:text-rose-500'
          }`}
        >
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isFavourite ? 'fill-current scale-110' : 'none'}`}
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 flex items-center justify-between gap-2 mt-auto bg-white border-t border-slate-100">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Author</p>
          <h3 className="text-sm font-bold text-slate-800 truncate" title={photo.author}>
            {photo.author}
          </h3>
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${isFavourite ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-slate-100 text-slate-600'}`}>
          {isFavourite ? 'Favourite' : 'Standard'}
        </span>
      </div>
    </div>
  );
});

PhotoCard.displayName = 'PhotoCard';
export const STORAGE_KEY = 'celebrare_gallery_favourites';

export const initialState = {
  favourites: (() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to parse favourites from localStorage', error);
      return [];
    }
  })(),
};

export const ACTION_TYPES = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
};

export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_FAVOURITE: {
      const photoId = action.payload;
      const exists = state.favourites.includes(photoId);

      const updatedFavourites = exists
        ? state.favourites.filter((id) => id !== photoId)
        : [...state.favourites, photoId];

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavourites));
      } catch (error) {
        console.error('Failed to save favourites to localStorage', error);
      }

      return {
        ...state,
        favourites: updatedFavourites,
      };
    }
    default:
      return state;
  }
};
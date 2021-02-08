import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from './favoriteConstants'

const initialState = {
  items: [],
};

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      let productInFavorites = false;
      const updatedFavorites = state.items.map((fave) => {
        if (fave.id === action.payload.item.id) {
          productInFavorites = true;
          return {
            ...fave
          };
        } else {
          return fave
        }
      });

      if (!productInFavorites) {
        productInFavorites = true
        return Object.assign({}, state, {
          items: [
            ...state.items,
            {
              ...action.payload.item
            },
          ],
        });
      } else {
        return { ...state, items: updatedFavorites};
      }

    case REMOVE_FROM_FAVORITES:
      console.log(action.payload)
      return {
        ...state,
        items: state.items.filter(
          (item) => {
            console.log(item)
            return item.id !== action.payload.item.id }
        ),
      }
    default:
      return state;
  }
}

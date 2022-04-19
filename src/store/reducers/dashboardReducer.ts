import {
  ALL_BREEDS_REQUEST,
  ALL_BREEDS_SUCCESS,
  ALL_BREEDS_FAIL,
  FILTER_BREEDS,
  CLEAR_FILTER,
  BREED_IMAGE_FAIL,
  BREED_IMAGE_REQUEST,
  BREED_IMAGE_SUCCESS,
  BREED_SUB_BREED_REQUEST,
  BREED_SUB_BREED_SUCCESS,
  CLEAR_BREED_INFO,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from 'store/actionTypes/dashboardTypes';

// Home Reducer
const initialState: DashboardState = {
  loading: false,
  error: '',
  breeds: [],
  filteredBreeds: null,
  favorites: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_BREEDS_REQUEST:
      return {...state, loading: true};
    case ALL_BREEDS_SUCCESS:
      return {...state, loading: false, breeds: action.payload};
    case ALL_BREEDS_FAIL:
      return {...state, loading: false, error: action.payload};
    case FILTER_BREEDS:
      return {
        ...state,
        filteredBreeds: state.breeds?.length
          ? state.breeds.filter(brd => {
              const val = action.payload?.toLowerCase();
              return (
                brd[0].toLowerCase().includes(val) ||
                (brd[1] &&
                  brd[1].findIndex(name => name.toLowerCase().includes(val)) !==
                    -1)
              );
            })
          : null,
      };
    case CLEAR_FILTER:
      return {...state, filteredBreeds: null};
    case ADD_TO_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav !== action.payload),
      };

    default:
      return state;
  }
};

// Breed Info Reducer

const initialBreedState: BreedState = {
  loading: false,
  error: '',
  image: '',
  subBreedLoading: false,
  subBreedImages: [],
};

export const breedInfoReducer = (state = initialBreedState, action) => {
  switch (action.type) {
    case BREED_IMAGE_REQUEST:
      return {...state, loading: true};
    case BREED_IMAGE_SUCCESS:
      return {...state, loading: false, image: action.payload};
    case BREED_SUB_BREED_REQUEST:
      return {...state, subBreedLoading: true};
    case BREED_SUB_BREED_SUCCESS:
      return {...state, subBreedLoading: false, subBreedImages: action.payload};
    case CLEAR_BREED_INFO:
      return {...state, subBreedImages: [], image: ''};
    case BREED_IMAGE_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

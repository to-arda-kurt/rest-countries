import {
  SET_THEME,
  SET_ALL_COUNTRIES,
  SET_COUNTRY,
  SET_LOADING,
} from './types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case SET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        result: action.payload,
      };

    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      return state;
  }
};

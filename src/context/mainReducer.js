import {
  SET_THEME,
  SET_ALL_COUNTRIES,
  SET_COUNTRY,
  SET_LOADING,
  SET_FILTER,
  SEARCH_COUNTRY,
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

    case SET_FILTER:
      return {
        ...state,
        result: state.countries.filter(
          (country) => country.region === action.payload
        ),
      };

    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case SEARCH_COUNTRY:
      return {
        ...state,
        result: state.countries.filter((country) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return country.name.match(regex);
        }),
      };
    default:
      return state;
  }
};

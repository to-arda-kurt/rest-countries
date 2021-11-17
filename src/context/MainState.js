import MainContext from './mainContext';
import mainReducer from './mainReducer';

import {
  SET_THEME,
  SET_ALL_COUNTRIES,
  SET_COUNTRY,
  SET_LOADING,
  FIND_COUNTRY,
  SET_FILTER,
  SEARCH_COUNTRY
} from './types';
import { useReducer } from 'react';
import axios from 'axios';

const MainState = (props) => {
  const initialState = {
    theme: 'light',
    apiUri: 'https://restcountries.com/v2',
    filterOptions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    region: 'all',
    countries: [],
    result: [],
    country: [],
    loading: false,
    ctrDetail: null,
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  //CHANGE THE THEME
  const setTheme = (userTheme) => {
    dispatch({
      type: SET_THEME,
      payload: userTheme,
    });
  };

  //GET ALL DATA
  const getAllCountries = async () => {
    await axios
      .get(`${state.apiUri}/${state.region}`)
      .then((res) =>
        dispatch({
          type: SET_ALL_COUNTRIES,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  // GET COUNTRY DATA
  const getCountry = async (code) => {
    setLoading();
    await axios
      .get(`${state.apiUri}/alpha/${code}`)
      .then((res) => {
        dispatch({
          type: SET_COUNTRY,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    setLoading();
  };

  // Manage Loading
  const setLoading = (loading) => {
    dispatch({
      type: SET_LOADING,
      payload: loading,
    });
  };

  // SET FILTER
  const setFilter = (region) => {
    dispatch({
      type: SET_FILTER,
      payload: region,
    });
  };

  // Search
  const searchCountry = (searchText) => {
    dispatch({
      type: SEARCH_COUNTRY,
      payload: searchText,
    });
  };

  return (
    <MainContext.Provider
      value={{
        theme: state.theme,
        filterOptions: state.filterOptions,
        countries: state.countries,
        result: state.result,
        country: state.country,
        loading: state.loading,
        ctrDetail: state.ctrDetail,
        setTheme,
        getAllCountries,
        getCountry,
        setLoading,
        setFilter,
        searchCountry,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

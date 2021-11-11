import MainContext from './mainContext';
import mainReducer from './mainReducer';

import {
  SET_THEME,
  SET_ALL_COUNTRIES,
  SET_COUNTRY,
  SET_LOADING,
} from './types';
import { useReducer } from 'react';
import axios from 'axios';

const MainState = (props) => {
  const initialState = {
    theme: 'light',
    apiUri: 'https://restcountries.com/v2',
    filterOptions: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    region: 'all',
    countries: [],
    result: [],
    country: [],
    loading: false,
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
  return (
    <MainContext.Provider
      value={{
        theme: state.theme,
        filterOptions: state.filterOptions,
        countries: state.countries,
        result: state.result,
        country: state.country,
        loading: state.loading,
        setTheme,
        getAllCountries,
        getCountry,
        setLoading,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

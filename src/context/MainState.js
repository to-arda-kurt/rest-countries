import MainContext from './mainContext';
import mainReducer from './mainReducer';

import { SET_THEME, SET_ALL_COUNTRIES } from './types';
import { useReducer } from 'react';
import axios from 'axios';

const MainState = (props) => {
  const initialState = {
    theme: 'light',
    filterOptions: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    region: 'all',
    countries: [],
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
      .get(`https://restcountries.com/v2/${state.region}`)
      .then((res) =>
        dispatch({
          type: SET_ALL_COUNTRIES,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <MainContext.Provider
      value={{
        theme: state.theme,
        filterOptions: state.filterOptions,
        countries: state.countries,
        setTheme,
        getAllCountries,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

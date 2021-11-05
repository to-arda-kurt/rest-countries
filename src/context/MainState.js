import MainContext from './mainContext';
import mainReducer from './mainReducer';

import { SET_THEME } from './types';
import { useReducer } from 'react';

const MainState = (props) => {
  const initialState = {
    theme: 'light',
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  //CHANGE THE THEME
  const setTheme = (userTheme) => {
    dispatch({
      type: SET_THEME,
      payload: userTheme,
    });
  };

  return (
    <MainContext.Provider value={{ theme: state.theme, setTheme }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

import MainContext from './mainContext';
import mainReducer from './mainReducer';

// import { SET_THEME } from './types';
import { useReducer } from 'react';

const MainState = (props) => {
  const initialState = {
    theme: 'light',
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ theme: state.theme }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

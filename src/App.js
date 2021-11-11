import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Global.Styled';
import { lightMode, darkMode } from './styles/theme';
import mainContext from './context/mainContext';

import Header from './components/Header';
import SearchFilter from './components/SearchFilter';

import Home from './views/Home';
import CountryDetail from './views/CountryDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const MainContext = useContext(mainContext);
  const { theme, setTheme } = MainContext;

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchFilter />
            <Home />
          </Route>
          <Route path="/countries/:countrySlug">
            <CountryDetail />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;

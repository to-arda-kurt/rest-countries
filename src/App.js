import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Global.Styled';
import { lightMode, darkMode } from './styles/theme';
import mainContext from './context/mainContext';
import Home from './views/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const MainContext = useContext(mainContext);
  const { theme, setTheme } = MainContext;

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;

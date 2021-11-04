import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Global.Styled';
import { lightMode, darkMode } from './styles/theme';
import mainContext from './context/mainContext';
import Header from './views/Header';

function App() {
  const MainContext = useContext(mainContext);
  const { theme, setTheme } = MainContext;

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;

import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { Header, ThemeContext } from './components';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const { theme: color } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={theme[color]}>
        <GlobalStyle />
        <Header />
        <h1>Welcome to TaskPro</h1>
      </ThemeProvider>
    </>
  );
}

export default App;

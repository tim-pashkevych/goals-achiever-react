import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { ThemeContext } from './components';

function App() {
  const { theme: color } = useContext(ThemeContext);
  console.log(color);
  console.log(theme);
  return (
    <ThemeProvider theme={theme[color]}>
      <h1>Welcome to TaskPro</h1>
    </ThemeProvider>
  );
}

export default App;

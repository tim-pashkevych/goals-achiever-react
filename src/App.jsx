import { lazy, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { Layout, ThemeContext } from './components';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));

function App() {
  const { theme: color } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme[color]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

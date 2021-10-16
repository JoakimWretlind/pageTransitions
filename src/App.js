import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { mainTheme, GlobalStyle } from './globalStyle';
import Navbar from './Navbar/Navbar';
import { Home, About, Settings } from './pages/index';

function App() {
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Navbar />
        <main style={{ position: "relative" }}>
          {/**   <AnimatePresence exitBeforeEnter>  */}
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/settings" exact component={Settings} />
            </Switch>
          </AnimatePresence>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

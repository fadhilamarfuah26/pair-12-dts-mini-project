import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import theme from './themes/theme';
import WallBar from './components/WallBar';
import Home from './container/Home';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <WallBar/>
        <Home/>
        <Outlet/>
      </div>
    </ThemeProvider>
  );
}

export default App;
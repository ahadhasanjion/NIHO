import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { createContext, useState } from 'react';
import Switch from "react-switch";

export const themeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((curr) =>(curr === 'light' ? 'dark' : "'light" ));
  }
  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <RouterProvider router={routes}><App /></RouterProvider>
      <div className='switch text-teal-600'>
                 <Switch onChange={toggleTheme} checked={theme ==='dark'} />
          </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;

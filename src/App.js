import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import SingleCountry from './components/SingleCountry';
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import SingleCountryCode from './components/SingleCountryCode';

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <>
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <BrowserRouter>
     
        <NavBar />
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/single" element={<SingleCountry />} />  
            <Route path="/singlecode" element={<SingleCountryCode />} />         
          </Routes>
      </BrowserRouter>
      
      
      </div>
    </>
  );
}

export default App;

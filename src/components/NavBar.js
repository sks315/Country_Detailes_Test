import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { FaMoon, FaSun } from "react-icons/fa";

function NavBar() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  var well ={
    boxShadow: "1px 3px 1px #9E9E9E"
}
  return (
    <div className="app"
    style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navbar style={well}>
      <Container>
        <Navbar.Brand  style={{color: theme.color }}>Where in the world?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <button type="button" onClick={toggleTheme} style ={{backgroundColor :'transparent', color : theme.color, border: '0px'}}>
                    {isDark? (<><FaMoon /> Dark Mode</>) : (<><FaSun /> Light Mode</>)}
      </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar

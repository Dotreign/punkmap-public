import React from 'react'
import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap'
import logo from '../Media/PUNKMAP.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegLog from '../Pages/RegLog'
import Map from '../Pages/Map'
import PersAcc from '../Pages/PersAcc'
import { useState } from 'react'

export function checkAuthentication() {
  const accessToken = sessionStorage.getItem("access_token");
  return !!accessToken; // Вернет true, если токен доступа существует, иначе - false
}

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuthentication());

  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    setIsAuthenticated(false);
  };

  return (
    <>
      <Navbar className='header'>
        <Container>
          <Navbar.Brand href='/map'>
            <img
              src={logo}
              className='header-logo'
              alt='Logo'
            />
          </Navbar.Brand>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link href='/persacc' className='header__link'>ЛК</Nav.Link>
                <Nav.Link href='/reglog' onClick={handleLogout} className='header__link'>Выйти</Nav.Link>
              </>
            ) : (
              <Nav.Link href='/reglog' className='header__link'>Регистрация</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route exaxt path='/map' Component={Map} />
          <Route exaxt path='/reglog' Component={RegLog} />
          <Route exaxt path='/persacc' Component={PersAcc} />
        </Routes>
      </Router>
    </>
  )
}

export default Header
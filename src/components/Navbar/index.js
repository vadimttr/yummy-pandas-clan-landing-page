import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../image/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/services' activeStyle>
            Story
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Roadmap
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Rarity
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Discord</NavBtnLink>
          <NavBtnLink to='/signin'>Twitter</NavBtnLink>
          <NavBtnLink to='/signin'>Instagram</NavBtnLink>
          <NavBtnLink to='/signin'>OpenSea</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

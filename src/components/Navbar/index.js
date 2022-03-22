import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  ImgLogo,
  SocialImg
} from './NavbarElements';

import twitter from '../../image/twitterCircle.png'
import discord from '../../image/discordCircle.png'
import OpenSea from '../../image/opensea.png'
import instagram from '../../image/instagramCircle.png'
import imglogo from '../../image/logopanda.png'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>
          <ImgLogo src={imglogo} /> Yummy Panda's Clan
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/story' activeStyle>
            STORY
          </NavLink>
          <NavLink to='/roadmap' activeStyle>
            ROADMAP
          </NavLink>
          <NavLink to='/rarity' activeStyle>
            RARITY
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>
            <SocialImg src={twitter}>
            </SocialImg>
           </NavBtnLink>
         
          <NavBtnLink to='/signin'>
            <SocialImg src={discord}>
            </SocialImg>
           </NavBtnLink>
         
          <NavBtnLink to='/signin'>
            <SocialImg src={OpenSea}>
            </SocialImg>
           </NavBtnLink>
         
          <NavBtnLink to='/signin'>
            <SocialImg src={instagram}>
            </SocialImg>
           </NavBtnLink>
         
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

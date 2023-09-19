import { useState } from "react";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenuIcon,
  HeaderList,
  HeaderNav,
  HeaderMenu,
} from "./Header.styled";

import logo from "../../assets/logo/logo-2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // console.log("isMenuOpen", isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="" />
      <HeaderNav>
        <HeaderMenuIcon onClick={toggleMenu} />

        <HeaderMenu isMenuOpen={isMenuOpen}>
          <HeaderList>
            <li onClick={toggleMenu}>
              <a href="#company">Про нас</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#about">Переваги</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#services">Пропозиція</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contacts">Контакти</a>
            </li>
          </HeaderList>
        </HeaderMenu>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;

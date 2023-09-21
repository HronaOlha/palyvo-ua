import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenuIcon,
  HeaderCloseIcon,
  HeaderList,
  HeaderMenu,
} from "./Header.styled";

import logo from "../../assets/logo/logo-2.png";
import HeaderContacts from "../HeaderContacts/HeaderContacts";
// import HeaderContacts from "../HeaderContacts/HeaderContacts";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderLogo src={logo} alt="" />
      <nav>
        {isMenuOpen ? (
          <HeaderCloseIcon onClick={toggleMenu} />
        ) : (
          <HeaderMenuIcon onClick={toggleMenu} />
        )}

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
        {/* <HeaderContacts /> */}
      </nav>
      {isDesktop && <HeaderContacts />}
    </HeaderContainer>
  );
};

export default Header;

import styled from "styled-components";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

export const HeaderContainer = styled.section`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #000;
`;

export const HeaderLogo = styled.img`
  height: 60px;
`;
export const HeaderText = styled.img`
  height: 20px;
`;
export const HeaderMenuIcon = styled(VscMenu)`
  height: 29px;
  width: 29px;
  color: #fff;
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const HeaderCloseIcon = styled(VscChromeClose)`
  height: 29px;
  width: 29px;
  color: #fff;
`;

export const HeaderMenu = styled.div`
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
  position: absolute;

  top: 80px;
  background-color: #000;
  left: 0;
  width: 100%;
  padding: 15px;

  @media (min-width: 1280px) {
    display: block;
    position: static;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 30px;

  color: #fff;
  font-family: Ubuntu, sans-serif;
  font-size: 18px;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContact = styled.div`
  color: #fff;
  font-size: 17px;
`;

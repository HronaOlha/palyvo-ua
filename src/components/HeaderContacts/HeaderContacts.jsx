// import { FooterContainer } from "./Footer.styled";

import phone from "../../assets/phone.png";
import message from "../../assets/message.png";

import {
  HeaderContact,
  HeaderContactList,
  HeaderItem,
  HeaderIcons,
  HeaderLink,
  TextContainer,
  HeaderItemText,
} from "./HeaderContacts.styled";

const HeaderContacts = () => {
  return (
    <HeaderContact>
      <HeaderContactList>
        <HeaderItem>
          <HeaderIcons src={phone} alt="" />
          <TextContainer>
            <HeaderItemText>Зателефонувати нам:</HeaderItemText>
            <HeaderLink href="tel:+3800000000000">+3800000000000</HeaderLink>
          </TextContainer>
        </HeaderItem>
        <HeaderItem>
          <HeaderIcons src={message} alt="" />
          <TextContainer>
            <HeaderItemText>Написати нам:</HeaderItemText>
            <HeaderLink href="mailto:info@olisoil.com.ua">
              info@olisoil.com.ua
            </HeaderLink>
          </TextContainer>
        </HeaderItem>
      </HeaderContactList>
    </HeaderContact>
  );
};

export default HeaderContacts;

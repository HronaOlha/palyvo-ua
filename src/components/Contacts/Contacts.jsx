import {
  ContactsContainer,
  ContactsTitle,
  ContactsList,
  ContactsItem,
  ContactsIcons,
  ContactsLink,
} from "./Contacts.styled";
import phone from "../../assets/phone.png";
import message from "../../assets/message.png";

const Contacts = () => {
  return (
    <ContactsContainer id="contacts">
      <ContactsTitle>Контакти</ContactsTitle>

      <ContactsList>
        <ContactsItem>
          <ContactsIcons src={phone} alt="" />
          <ContactsLink href="tel:+3800000000000">+3800000000000</ContactsLink>
        </ContactsItem>
        <ContactsItem>
          <ContactsIcons src={message} alt="" />
          <ContactsLink href="mailto:info@olisoil.com.ua">
            info@olisoil.com.ua
          </ContactsLink>
        </ContactsItem>
      </ContactsList>
    </ContactsContainer>
  );
};

export default Contacts;

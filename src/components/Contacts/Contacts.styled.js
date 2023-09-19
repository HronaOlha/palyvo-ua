import styled from "styled-components";

export const ContactsContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

export const ContactsTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
  /* margin-bottom: 30px; */

  @media (min-width: 1280px) {
    font-size: 45px;
  }
`;

export const ContactsList = styled.ul`
  @media (min-width: 1280px) {
    display: flex;
    gap: 80px;
  }
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContactsIcons = styled.img`
  height: 40px;
`;

export const ContactsLink = styled.a`
  font-size: 25px;
  font-weight: 700;
`;

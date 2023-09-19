import styled from "styled-components";

export const HeaderContact = styled.div`
  color: #fff;
  font-size: 17px;
`;

export const HeaderContactList = styled.ul`
  @media (min-width: 1280px) {
    display: flex;
    gap: 80px;
  }
`;

export const HeaderItem = styled.li`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 10px;
`;

export const HeaderIcons = styled.img`
  height: 22px;
`;

export const HeaderLink = styled.a`
  font-size: 10px;
  font-weight: 700;
`;

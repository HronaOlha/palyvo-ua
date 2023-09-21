import styled from "styled-components";

export const HeaderContact = styled.div`
  font-family: Ubuntu, sans-serif;
  letter-spacing: normal;
  color: #fff;
  font-size: 17px;
`;

export const HeaderContactList = styled.ul`
  display: flex;
  gap: 80px;
  margin-right: 50px;
`;

export const HeaderItem = styled.li`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 10px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const HeaderItemText = styled.p`
  font-size: 8px;
`;

export const HeaderIcons = styled.img`
  height: 22px;
`;

export const HeaderLink = styled.a`
  font-size: 12px;
  font-weight: 700;
`;

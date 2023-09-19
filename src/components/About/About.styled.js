import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  padding: 20px;

  @media (min-width: 1280px) {
    padding: 100px 20px;
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  height: 45px;
  width: 45px;

  @media (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;

export const AboutList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const AboutItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  font-weight: 700;

  @media (min-width: 768px) {
    flex-direction: column;
    width: calc(100% / 4);
    padding: 20px;
    text-align: center;
  }
  @media (min-width: 1280px) {
    padding: 25px;

    font-size: 25px;
  }
`;

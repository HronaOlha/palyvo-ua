import styled from "styled-components";

export const ServicesContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;

  background-color: #fbfbfb;

  @media (min-width: 768px) {
    padding: 100px 20px;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;

  @media (min-width: 1280px) {
    font-size: 45px;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ServicesItem = styled.li`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.11);
`;

export const ServicesImage = styled.img`
  height: 160px;

  @media (min-width: 768px) {
    height: 126px;
  }
  @media (min-width: 1280px) {
    height: 222px;
  }
`;

export const ServicesThumb = styled.div`
  padding: 36px 0 16px;
  text-align: center;
`;

export const ServicesThumbText = styled.p`
  font-size: 18px;
  font-weight: 700;
  @media (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const ServicesText = styled.p`
  font-family: Ubuntu, sans-serif;
  line-height: 1.4;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1280px) {
    padding: 0 60px;
  }
`;

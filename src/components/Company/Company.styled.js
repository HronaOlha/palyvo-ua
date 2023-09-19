import styled from "styled-components";
import bwTruck from "../../assets/bgob.jpg";

export const CompanyBackground = styled.div`
  width: 100%;
  background-image: url(${bwTruck});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const CompanyContainer = styled.section`
  padding: 40px 20px;
  background-color: #000000;
  opacity: 0.85;

  @media (min-width: 768px) {
    padding: 100px 80px;
  }
`;

export const CompanyTitle = styled.h2`
  font-size: 35px;
  margin-bottom: 40px;
  color: #fff;
`;

export const CompanyText = styled.p`
  font-family: Ubuntu, sans-serif;
  line-height: 1.4;
  text-align: justify;
  color: #fff;

  @media (min-width: 768px) {
    text-align: left;

    columns: 2;
  }
`;

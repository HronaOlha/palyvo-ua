import styled from "styled-components";
import heroBg from "../../assets/pole.jpg";

export const HeroBackground = styled.div`
  /* display: flex;
  justify-content: center; */
  width: 100%;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: 104px 8px;
  font-family: "Cuprum", sans-serif;
  color: #fff;

  text-align: center;

  @media (min-width: 768px) {
    width: 768px;
    padding: 150px 12px;
  }
  @media (min-width: 1280px) {
    /* max-width: 1600px; */
    width: 1280px;
    padding: 64px 12px;
  }
`;

export const HeroOverlay = styled.div`
  background-color: #1c1601;
  opacity: 0.68;
`;

export const Title = styled.h1`
  font-size: 27px;
  font-weight: 700;
  line-height: 0.97;
  letter-spacing: -1px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 74px;
  }
`;

export const TruckImg = styled.img`
  /* padding: 10px; */
  height: 140px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    height: 280px;
  }
  @media (min-width: 1280px) {
    height: 400px;
    position: relative;
    top: 150px;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 24px;

  font-weight: 700;
  font-size: 24px;
  line-height: 0.97;
  letter-spacing: -1px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 36px;
    text-align: ${(props) => props.align};
  }
  @media (min-width: 1280px) {
    width: 530px;
    font-size: 40px;
    text-align: right;
  }
`;

export const HeroSecondaryText = styled.p`
  font-size: 17px;

  text-align: center;

  @media (min-width: 768px) {
    width: 285px;
    margin-left: auto;
    text-align: left;
  }
  @media (min-width: 1280px) {
    width: 424px;
    margin-left: auto;
    margin-right: auto;

    /* text-align: right; */
  }
`;

export const FlexContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1280px) {
    padding: 50px 100px 0px 0px;
  }
`;

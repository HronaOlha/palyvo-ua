// import React from 'react'
// import heroBg from "../../assets/pole.jpg";
import truckImg from "../../assets/truck.png";

import {
  HeroSection,
  TruckImg,
  Title,
  HeroText,
  HeroSecondaryText,
  FlexContainer,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      {/* <HeroBg src={heroBg} alt="landscape with a wheat field" /> */}
      <Title>Власний імпорт нафтопродуктів з Європи</Title>

      <FlexContainer>
        <TruckImg src={truckImg} alt="red truck" />

        <div>
          <HeroText>
            Доставка дизельного палива та бензину за найкращими цінами
          </HeroText>
          <HeroText align={"right"}>Доставка від 1000л до 30 000л</HeroText>
          <HeroSecondaryText>
            Гарантуємо точний налив завдяки електронним лічильникам які
            встановлені у кожному автомобілі компанії «Оліс Оіл» Тільки
            сертифіковане паливо EURO-5 без сюрпризів!
          </HeroSecondaryText>
        </div>
      </FlexContainer>
    </HeroSection>
  );
};

export default Hero;

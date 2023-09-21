// import React from 'react'
// import heroBg from "../../assets/pole.jpg";
import truckImg from "../../assets/truck.png";
// import { useInView } from "react-intersection-observer";

import {
  HeroBackground,
  HeroSection,
  TruckImg,
  Title,
  HeroText,
  HeroSecondaryText,
  FlexContainer,
} from "./Hero.styled";

const Hero = () => {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });

  return (
    <HeroBackground>
      <HeroSection>
        {/* <HeroBg src={heroBg} alt="landscape with a wheat field" /> */}
        <Title>Власний імпорт нафтопродуктів з Європи</Title>

        <FlexContainer>
          <div ref={ref}>
            <TruckImg src={truckImg} alt="red truck" />
          </div>

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
    </HeroBackground>
  );
};

export default Hero;

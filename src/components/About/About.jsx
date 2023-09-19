import { ReactComponent as Quality } from "../../assets/svg/quality.svg";
import { ReactComponent as Taxes } from "../../assets/svg/taxes.svg";
import { ReactComponent as Logistics } from "../../assets/svg/logistics.svg";
import { ReactComponent as Prices } from "../../assets/svg/prices.svg";
import { ReactComponent as Assortment } from "../../assets/svg/assortment.svg";
import { ReactComponent as Recommendations } from "../../assets/svg/recommendations.svg";
import { ReactComponent as Imports } from "../../assets/svg/import.svg";
import { ReactComponent as Profit } from "../../assets/svg/profit.svg";

import {
  AboutContainer,
  AboutItem,
  AboutList,
  IconContainer,
} from "./About.styled";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutList>
        <AboutItem>
          <IconContainer>
            <Quality />
          </IconContainer>
          <p>Відмінна якість пального</p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <Taxes />
          </IconContainer>
          <p>Швидка реєстрація ПДВ</p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <Logistics />
          </IconContainer>
          <p>Свій автотранспорт</p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <Prices />
          </IconContainer>
          <p>Найкращі ціни</p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <Assortment />
          </IconContainer>
          <p>Різноманітний асортимент</p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <Recommendations />
          </IconContainer>
          <p>Наявність рекомендацій</p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <Imports />
          </IconContainer>
          <p>Власний імпорт</p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <Profit />
          </IconContainer>
          <p>Вигідні умови зберігання</p>
        </AboutItem>
      </AboutList>
    </AboutContainer>
  );
};

export default About;

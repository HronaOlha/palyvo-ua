import petrol from "../../assets/petrol.jpg";
import scale from "../../assets/scale.jpg";
import reductor from "../../assets/gas-reductor.jpg";

import {
  ServicesContainer,
  ServicesTitle,
  ServicesList,
  ServicesImage,
  ServicesItem,
  ServicesThumb,
  ServicesThumbText,
  ServicesText,
} from "./Services.styled";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Ми пропонуємо</ServicesTitle>
      <ServicesList>
        <ServicesItem>
          <ServicesImage src={petrol} alt="refueServicesItemng car" />
          <ServicesThumb>
            <ServicesThumbText>Дизельне пальне</ServicesThumbText>
          </ServicesThumb>
        </ServicesItem>
        <ServicesItem>
          <ServicesImage src={scale} alt="fuel scale" />
          <ServicesThumb>
            <ServicesThumbText>Бензин</ServicesThumbText>
          </ServicesThumb>
        </ServicesItem>
        <ServicesItem>
          <ServicesImage src={reductor} alt="gas reductor" />
          <ServicesThumb>
            <ServicesThumbText>Зріджений газ</ServicesThumbText>
          </ServicesThumb>
        </ServicesItem>
      </ServicesList>

      <ServicesText>
        Наша компанія, активно розвивається в сфері нафтопродуктів (дизельне
        пальне, бензини, зріджений газ), безводного аміаку і щебню, та вже зараз
        займає лідируюче місце на ринку України. У нас найкращі умови для
        співпраці, найрізноманітніший асортимент товару високої якості, ми
        можемо запропонувати доставку будь якого об’єму по всій території
        України!
      </ServicesText>
    </ServicesContainer>
  );
};

export default Services;

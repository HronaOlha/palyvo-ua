import "./App.css";
import { Container } from "./components/Container/Container.styled";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Services />
      <Company />
      <Contacts />
      <Footer />
    </Container>
  );
}

export default App;

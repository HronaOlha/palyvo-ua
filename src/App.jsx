import "./App.css";
import About from "./components/About";
import { Container } from "./components/Container/Container.styled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Footer />
    </Container>
  );
}

export default App;

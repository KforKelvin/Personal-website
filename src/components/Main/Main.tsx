// import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
// import { Contact } from "../Contact/Contact";
// import { Project } from "../Project/Project";
import { Assignment1 } from "../Assignment1/Assignment1";
import { Assignment2 } from "../Assignment2/Assignment2";

// import wordpress from "../../assets/wordpress.svg";
// import shopify from "../../assets/shopify.svg";
// import htmlIcon from "../../assets/html-icon.svg";
// import cssIcon from "../../assets/css-icon.svg";
// import sassIcon from "../../assets/sass-icon.svg";
// import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
// import reactIcon from "../../assets/react-icon.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
// import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      <Assignment1></Assignment1>
      <Assignment2></Assignment2>
      {/* <Project></Project> */}
      {/* <Contact></Contact> */}
    </Container>
  );
}

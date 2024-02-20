// import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
// import { Contact } from "../Contact/Contact";
// import { Project } from "../Project/Project";
import { Assignment1 } from "../Assignment1/Assignment1";
import { Assignment2 } from "../Assignment2/Assignment2";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      {/* <Assignment1></Assignment1>
      <Assignment2></Assignment2> */}
      {/* <Project></Project> */}
      {/* <Contact></Contact> */}
    </Container>
  );
}

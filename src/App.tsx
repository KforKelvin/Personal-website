import React from "react";
import { Container } from "./components/Main/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
// import { Hero } from "./components/Hero/Hero";
// import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { Assignment2 } from "./components/Assignment2/Assignment2";

import "react-toastify/dist/ReactToastify.css";
import { Assignment1 } from "./components/Assignment1/Assignment1";
function App() {
  // return (
  //   <>
  //     <GlobalStyle></GlobalStyle>
  //     <Header></Header>
  //     <Main></Main>
  //     <Footer></Footer>
  //   </>
  //   // <>
  //   // <Assignment2></Assignment2>
  //   // </>
  // );
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Header />
              <About />
              <Footer />
            </Container>
          }
        />
        <Route
          path="/assignment1"
          element={
            <Container>
              <Header />
              <Assignment1 />
              <Footer />
            </Container>
          }
        />
        <Route
          path="/assignment2"
          element={
            <Container>
              <Header />
              <Assignment2 />
              <Footer />
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

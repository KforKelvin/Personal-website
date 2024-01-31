import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Content() {
  return (
    <Container id="content">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Assignment #1</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>Why am I taking this class?</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I am eager to take this class to delve into how interactive media is
            transforming storytelling and narrative consumption. As a student
            with computer science background(and a gamer), I want to learn how
            technology and media shape the entertainment industry.{" "}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>List of media that I frequently use:</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I use my phone and my computer a lot. I like to watch Netflix shows
            (Blue Eye Samurai, One Piece), gaming videos, and cooking videos
            with my phone. I also play some video games. Such as Diablo 4,
            Overwatch, and the dark souls series.
          </p>
          <p>
            I am mainly a consumer of the content. I don't really create
            contents.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>Challenge with the tools: </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            One of the difficulty I encounter when playing videos game or
            watching a show would be internet stability. I live in a townhouse
            with three other roommates, and the internet bandwith is not enough
            for all of us. Sometimes, when I am playing a game, my ping would
            spike up to 2000ms, and I would get disconnected from the game. It
            is very frustrating.{" "}
          </p>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Assignment2() {
  return (
    <Container id="assignment2">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Assignment #2</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>Part 1 Common Theme:</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Vast amounts of content, no matter what kind of media it is.
            Students were mentioning there are too many choices at the
            consumption end.
            <br />
            <br />
            Everyone is doing everything, which means most of the students were
            actively using different types of new media. <br />
            <br />
            Due to the popularity of Tik Tok, students complain that so-called
            “short-form media” is causing them to have shorter and shorter
            attention spans.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>Part 2:</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I would need to further divide my media down into categories. For
            example, I put "Netflix shows, gaming videos, and cooking videos" as
            one category. I can restructure it like: <br /> <br />
            <h3>TV shows/Drama: </h3> Blue Eyes Samurai, One Piece <br /> <br />
            <h3>Youtube Videos:</h3> Gaming videos, Cooking videos
            <br /> <br />
            <h3>Video Games:</h3> Diablo 4, Overwatch, Dark Souls series <br />{" "}
            <br /> <br />I do agree nowadays there are too many choices at the
            consumption end. There are simply too many shows to watch, and games
            to play with. I spend a lot of time looking for content that I
            actually enjoy.
          </p>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

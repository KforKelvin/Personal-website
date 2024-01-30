import { Container } from "./styles";
import pythonIcon from "../../assets/python-icon.svg";
import pandaIcon from "../../assets/pandas-icon.svg";
import linuxIcon from "../../assets/linux-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
// import KG from "../../assets/prof";
import KG from "../../assets/KG.jpg";

import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";

import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Kaiyuan "Kelvin" Gao is an accomplished computer engineering
            graduate from Texas A&M University with a strong academic
            background, holding both a Bachelor of Science in Computer
            Engineering and pursuing a Master of Computer Science. With
            technical expertise in languages like Python, C++, and Typescript,
            as well as experience in full-stack development, data analysis, and
            deep learning, Kaiyuan has a diverse skill set. He has applied these
            skills in various roles, including an Information System Internship
            at EOG Resources and a Student Technician position at SPACEcraft VR.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        ></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>Currently looking for a Intern position as a software engineer.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={pythonIcon} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={pandaIcon} alt="pandas" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={linuxIcon} alt="linux" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img
            src={KG}
            alt="Kaiyuan Gao"
            style={{ width: "50%", height: "50%" }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

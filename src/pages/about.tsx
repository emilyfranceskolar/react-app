import SectionBottom from "../components/section-bottom";
import SectionMiddle from "../components/section-middle";
import SectionTop from "../components/section-top";
import "./about.css";
import Container from "./container";
export default function AboutPage() {
  return (
    <>
      <section className="about">
        <Container>
          <SectionTop />
        </Container>
      </section>
      <section className="skills">
        <Container>
          <SectionMiddle />
        </Container>
      </section>
      <section className="hobbies">
        <Container>
          <SectionBottom />
        </Container>
      </section>
    </>
  );
}

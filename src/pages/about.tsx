import "./about.css";
import Container from "./container";
export default function AboutPage() {
  return (
    <>
      <main>
        <section className="about">
          <Container>
            <h1>I am, who am I?</h1>
          </Container>
        </section>
        <section className="skills">
          <Container>
            <h1>My skill set </h1>
          </Container>
        </section>
        <section className="hobbies">
          <Container>
            <h1>What I enjoy </h1>
          </Container>
        </section>
      </main>
    </>
  );
}

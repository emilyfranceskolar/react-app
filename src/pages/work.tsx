import Container from "./container";
import "./work.css";

export default function WorkPage() {
  return (
    <>
      <h3 className="work-title">
        Example of a web-api call to
        <span className="api-name"> openweathermap.org</span>
      </h3>
      <Container>
        <p>Search bar here.. </p>
      </Container>
    </>
  );
}

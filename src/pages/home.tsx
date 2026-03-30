import Container from "./container";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <h3 className="greeting"> Hello and Welcome!</h3>
      <div className="hero">
        <Container>
          <div className="text">
            <div className="top-text">
              <h1 className="currently">
                I'm Emily, and I'm currently studying frontend development.
              </h1>
            </div>
            <div>
              <a
                className="btn"
                href="https://www.linkedin.com/in/emily-kolar-08727272/"
                target="_blank"
              >
                Connect with me →
              </a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8fDA%3D"
            alt="picture of HTML tag"
            className="coding"
          />
        </Container>
      </div>
    </>
  );
}

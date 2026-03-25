import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <h1 className="title">Home Page</h1>
        <Link to="/next">
          <button type="button">Click me</button>
        </Link>
      </div>
    </>
  );
}

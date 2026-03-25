import { Link } from "react-router";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <h1 className="title">Home Page</h1>
        <Link to="/next">
          <button className="btn" type="button">
            Next Page
          </button>
        </Link>
      </div>
    </>
  );
}

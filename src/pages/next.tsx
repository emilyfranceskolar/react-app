import { Link } from "react-router";
import "./next.css";

export default function NextPage() {
  return (
    <>
      <div className="container">
        <h1>Next Page</h1>
        <Link to="/">
          <button className="btn" type="button">
            Home
          </button>
        </Link>
      </div>
    </>
  );
}

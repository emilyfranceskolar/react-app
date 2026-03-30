import { Link } from "react-router";

export default function NextPage() {
  return (
    <>
      <div className="container">
        <h1>Next Page</h1>
        <Link to="/">
          <button type="button">Click me</button>
        </Link>
      </div>
    </>
  );
}

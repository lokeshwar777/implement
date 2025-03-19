import { Link } from "react-router";

export default function Missing() {
  return (
    <main>
      <>
        <h2>Post Not Found</h2>
        <Link to="/">Go to Home</Link>
      </>
    </main>
  );
}

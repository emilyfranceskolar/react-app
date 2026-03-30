import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import "./layout.css";

export default function Layout() {
  return (
    <>
      <div className="page-shell">
        <Header />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

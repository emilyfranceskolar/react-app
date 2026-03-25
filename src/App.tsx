import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import Layout from "./pages/layout";
import NextPage from "./pages/next";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/next" element={<NextPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { Route, Routes } from "react-router-dom";
import Home, { HomeView } from "../pages/home";
import Content from "../pages/content";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<Content />} />
      <Route path="/mangas" element={<Content />} />
    </Routes>
  );
}

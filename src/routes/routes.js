import { Route, Routes } from "react-router-dom";
import Content from "../pages/content";
import Home from "../pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<Content type={"anime"} secondPage={"Mangás"} title={"Animes"} />} />
      <Route path="/mangas" element={<Content type={"manga"} secondPage={"Animes"} title={"Mangás"} />} />
    </Routes>
  );
}

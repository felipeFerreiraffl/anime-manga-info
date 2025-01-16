import { Route, Routes } from "react-router-dom";
import Content from "../pages/content";
import Home from "../pages/home";
import Detail from "../pages/detail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<Content type={"anime"} secondPage={"Mangás"} title={"Animes"} />} />
      <Route path="/mangas" element={<Content type={"manga"} secondPage={"Animes"} title={"Mangás"} />} />
      <Route path="/anime/:id" element={<Detail type={"anime"} secondPage={"Mangás"} />} />
      <Route path="/manga/:id" element={<Detail type={"manga"} secondPage={"Animes"} />} />
    </Routes>
  );
}

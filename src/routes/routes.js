import { Route, Routes } from "react-router-dom";
import Content from "../pages/content";
import Home from "../pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<Content secondPage={"Mangás"} title={"Animes"} />} />
      <Route path="/mangas" element={<Content secondPage={"Animes"} title={"Mangá"} />} />
    </Routes>
  );
}

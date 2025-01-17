import { Route, Routes } from "react-router-dom";
import Contacts from "../pages/contact";
import Content from "../pages/content";
import Detail from "../pages/detail";
import Genre from "../pages/gender";
import Home from "../pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type" element={<Content />} />
      <Route path="/:type/:id" element={<Detail />} />
      <Route path="/:type/genero/:genre" element={<Genre />} />
      <Route path="/contatos" element={<Contacts />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import Home, { HomeView } from "../pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

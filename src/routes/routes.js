import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Contacts from "../pages/contact";
import Content from "../pages/content";
import Detail from "../pages/detail";
import Genre from "../pages/gender";
import Home from "../pages/home";

export default function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Simula um carregamento ao trocar de página
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1,y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/:type" element={<Content />} />
            <Route path="/:type/:id" element={<Detail />} />
            <Route path="/:type/genero/:genre" element={<Genre />} />
            <Route path="/contatos" element={<Contacts />} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

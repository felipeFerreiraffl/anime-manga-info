import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/global/GlobalStyle";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

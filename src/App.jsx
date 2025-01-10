import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/global/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

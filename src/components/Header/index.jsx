import {
  Container,
  HomeContainer,
  Logo,
  PageText,
} from "../../styles/components/header";
import logo from "../../assets/logos/symbol-jap.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ secondPage }) {
  const navigate = useNavigate();

  return (
    <Container>
      <HomeContainer onClick={() => navigate("/")}>
        <Logo src={logo} alt="Logo" />
        <PageText>Home</PageText>
      </HomeContainer>

      <PageText
        onClick={() =>
          secondPage === "Animes" ? navigate("/animes") : navigate("/mangas")
        }
      >
        {secondPage}
      </PageText>

      <PageText>Contatos</PageText>
    </Container>
  );
}

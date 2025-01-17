import {
  Container,
  HomeContainer,
  Logo,
  PageText,
} from "../../styles/components/header";
import logo from "../../assets/logos/symbol-jap.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ id, secondPage, thirdPage }) {
  const navigate = useNavigate();

  const handleContactPage = () => {
    if (thirdPage === "Contatos") {
      navigate("/contatos");
    } else if (thirdPage === "Animes") {
      navigate("/animes");
    } else {
      navigate("/mangas");
    }
  }

  return (
    <Container id={id}>
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

      <PageText onClick={handleContactPage}>{thirdPage}</PageText>
    </Container>
  );
}

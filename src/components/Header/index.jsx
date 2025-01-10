import {
  Container,
  HomeContainer,
  Logo,
  PageText,
} from "../../styles/components/header";
import logo from "../../assets/logos/symbol-jap.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <HomeContainer onClick={() => navigate("/")}>
        <Logo src={logo} alt="Logo" />
        <PageText>Home</PageText>
      </HomeContainer>

      <PageText>Animangá</PageText>

      <PageText>Contatos</PageText>
    </Container>
  );
}

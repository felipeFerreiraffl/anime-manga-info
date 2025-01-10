import {
  TitleContainer,
  Title,
  Subtitle,
  PageChoiceContainer,
  Logo,
  AnimeImage,
  ImageText,
  MangaImage,
  Container,
} from "../../styles/pages/home";
import logo from "../../assets/logos/symbol-jap.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <TitleContainer>
        <Title>Animes & Mangas</Title>
        <Subtitle>
          Informações sobre diversos animes e mangás, como data de criação,
          sinopse, notas, título, etc.
        </Subtitle>
      </TitleContainer>

      <PageChoiceContainer>
        <Link to={"/animes"} style={{ width: "100%" }}>
          <AnimeImage>
            <ImageText>Anime</ImageText>
          </AnimeImage>
        </Link>

        <Logo src={logo} alt="Logo" />

        <Link to={"/mangas"} style={{ width: "100%" }}>
          <MangaImage>
            <ImageText>Mangá</ImageText>
          </MangaImage>
        </Link>
      </PageChoiceContainer>
    </Container>
  );
}

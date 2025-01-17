import {
  Container,
  GenderImage,
  GenderPhrase,
  GenderTitle,
  PresentationContainer,
  PresentationTextContainer,
} from "../../styles/pages/gender";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { useEffect, useState } from "react";
import acao from "../../assets/images/gender/presentation/action.png";
import comedia from "../../assets/images/gender/presentation/comedy.png";
import drama from "../../assets/images/gender/presentation/drama.png";
import esportes from "../../assets/images/gender/presentation/sports.png";
import horror from "../../assets/images/gender/presentation/horror.png";
import misterio from "../../assets/images/gender/presentation/mystery.png";
import romance from "../../assets/images/gender/presentation/romance.png";
import scifi from "../../assets/images/gender/presentation/sci-fi.png";

export default function Genre() {
  const { type, genre } = useParams();
  const navigate = useNavigate();
  const [genreObj, setGenreObj] = useState({
    title: "",
    explanation: "",
    image: "",
  });

  useEffect(() => {
    const handleInfos = () => {
      switch (genre) {
        case "acao":
          setGenreObj({
            title: "Ação",
            explanation: "Porradaria, explosões, lutas, e muito mais.",
            image: acao,
          });
          break;

        case "comedia":
          setGenreObj({
            title: "Comédia",
            explanation: "Animes para dar uma bela risada... ou não.",
            image: comedia,
          });
          break;

        case "drama":
          setGenreObj({
            title: "Drama",
            explanation: "Acho que caiu um cisco no meu olho.",
            image: drama,
          });
          break;

        case "esportes":
          setGenreObj({
            title: "Esportes",
            explanation: "Lembre-se de fazer exercícios depois desses animes",
            image: esportes,
          });
          break;

        case "horror":
          setGenreObj({
            title: "Horror",
            explanation: "Estou sentindo um frio na espinha.",
            image: horror,
          });
          break;

        case "misterio":
          setGenreObj({
            title: "Mistério",
            explanation: "Hmm... Calma, estou pensando.",
            image: misterio,
          });
          break;

        case "romance":
          setGenreObj({
            title: "Romance",
            explanation:
              "Fofo. Gostaria ter estar na situação desses personagens.",
            image: romance,
          });
          break;

        case "scifi":
          setGenreObj({
            title: "Sci-fi",
            explanation: "Tudo isso é apenas ciência.",
            image: scifi,
          });
          break;

        default:
          setGenreObj({
            title: "",
            explanation: "",
            image: "",
          });
          break;
      }
    };

    handleInfos();
  }, [genre]);

  return (
    <Container>
      <Header
        secondPage={type === "animes" ? "Mangás" : "Animes"}
        thirdPage={"Contatos"}
      />

      <BackButton
        onClick={() =>
          type === "animes" ? navigate("/animes") : navigate("/mangas")
        }
      />

      <PresentationContainer>
        <PresentationTextContainer>
          <GenderTitle>{genreObj.title}</GenderTitle>
          <GenderPhrase>{genreObj.explanation}</GenderPhrase>
        </PresentationTextContainer>

        <GenderImage src={genreObj.image} alt={genreObj.title} />
      </PresentationContainer>

      <Footer />
    </Container>
  );
}

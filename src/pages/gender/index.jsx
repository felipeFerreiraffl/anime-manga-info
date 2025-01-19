import { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import acao from "../../assets/images/gender/presentation/action.png";
import comedia from "../../assets/images/gender/presentation/comedy.png";
import drama from "../../assets/images/gender/presentation/drama.png";
import horror from "../../assets/images/gender/presentation/horror.png";
import misterio from "../../assets/images/gender/presentation/mystery.png";
import romance from "../../assets/images/gender/presentation/romance.png";
import scifi from "../../assets/images/gender/presentation/sci-fi.png";
import esportes from "../../assets/images/gender/presentation/sports.png";
import BackButton from "../../components/BackButton";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getAnimesByFilter, getMangasByFilter } from "../../services/animeAPI";
import colors from "../../styles/colors/colors";
import {
  Container,
  ContentContainer,
  GenderImage,
  GenderLoading,
  GenderPhrase,
  GenderTitle,
  PresentationContainer,
  PresentationTextContainer,
} from "../../styles/pages/gender";

export default function Genre() {
  const { type, genre } = useParams();
  const navigate = useNavigate();
  const [genreObj, setGenreObj] = useState({
    title: "",
    explanation: "",
    image: "",
  });
  const [genreName, setGenreName] = useState("");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;

  // Define a primeira página como zero
  useEffect(() => {
    setCurrentPage(0);
  }, [genreName, type]);

  // Certifica-se que o componente reinicie
  useEffect(() => {
    setContent([]);
  }, [currentPage, type, genreName]);

  // Pega os dados beaseados no gênero (pega a URL e transforma em "genre" na URL)
  useEffect(() => {
    // Define a URL do gênero da API baseado na URL do site
    switch (genre) {
      case "acao":
        setGenreName("action");
        break;

      case "comedia":
        setGenreName("comedy");
        break;

      case "drama":
        setGenreName("drama");
        break;

      case "esportes":
        setGenreName("sports");
        break;

      case "horror":
        setGenreName("horror");
        break;

      case "misterio":
        setGenreName("mystery");
        break;

      case "romance":
        setGenreName("romance");
        break;

      case "scifi":
        setGenreName("scifi");
        break;

      default:
        setGenreName("");
        break;
    }

    // Pega os dados da API
    const fetchContent = async () => {
      if (!genreName) return;
      setLoading(true);

      try {
        const offset = currentPage * itemsPerPage;
        const response =
          type === "animes"
            ? await getAnimesByFilter(
                `filter[genres]=${genreName}`,
                itemsPerPage,
                offset
              )
            : await getMangasByFilter(
                `filter[genres]=${genreName}`,
                itemsPerPage,
                offset
              );

        setContent(response.data);
        setTotalPages(Math.ceil(response.meta.count / itemsPerPage));
      } catch (error) {
        console.error("Erro ao buscar conteúdo por gênero. ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [genreName, type, currentPage]);

  // Define os títulos, imagens e frases do componente inicial
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
            explanation: "Lembre-se de fazer exercícios depois desses animes.",
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

  // Função para mudar a página do Paginate
  const handlePageChange = ({ selected }) => {
    if (selected !== currentPage) {
      setCurrentPage(selected);
    }
  };

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

      {loading ? (
        <ContentContainer>
          <GenderLoading>Carregando...</GenderLoading>
        </ContentContainer>
      ) : (
        <ContentContainer>
          {content.map((cont) => (
            <ContentCard
              key={cont.id}
              title={cont.attributes.canonicalTitle}
              japTitle={cont.attributes.titles.ja_jp}
              image={cont.attributes.posterImage?.original}
              onClick={() =>
                type === "animes"
                  ? navigate(`/anime/${cont.id}`)
                  : navigate(`/manga/${cont.id}`)
              }
            />
          ))}
        </ContentContainer>
      )}

      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel={<HiArrowLeft color={colors.main.pk400} />}
        previousClassName="prev"
        nextLabel={<HiArrowRight color={colors.main.pk400} />}
        nextClassName="next"
      />

      <Footer />
    </Container>
  );
}

import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import finalAnime from "../../assets/images/final/anime-final.png";
import finalManga from "../../assets/images/final/manga-final.png";
import Alphabet from "../../components/Alphabet";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import GenderSlider from "../../components/GenderSlider";
import Header from "../../components/Header";
import SliderContent from "../../components/Slider";
import { getAnimesByFilter, getMangasByFilter } from "../../services/animeAPI";
import handleScrollEvent from "../../services/scripts/scrollEvent";
import {
  ButtonContainer,
  Container,
  FinalButtonContainer,
  FinalContainer,
  FinalContentContainer,
  FinalContentTitle,
  FinalImage,
  FinalTextContainer,
  FinalTitle,
  InitialPart,
  Results,
  Search,
  SearchArea,
  SectionContainer,
  SectionTitle,
  SubSection,
  SubSectionContainer,
  SubSectionTitle,
  SuggestionContainer,
  SuggestionError,
  SuggestionImage,
  SuggestionTitle,
  Title,
} from "../../styles/pages/content";
const cache = {};

export default function Content() {
  const { type } = useParams();

  const [content, setContent] = useState([]); // Estado para os cards dos animes
  const [selectedLetter, setSelectedLetter] = useState(""); // Estado para selecionar as letras
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Estados para a barra de pesquisa
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focused, setFocused] = useState(false);

  // Funções para a pesquisa
  // Buscar os animes
  const fetchSuggestions = async (input) => {
    const cachedResult = cache[input];
    if (cachedResult) {
      return cachedResult;
    }

    try {
      const response =
        type === "anime"
          ? await getAnimesByFilter(`filter[text]=${input}`)
          : await getMangasByFilter(`filter[text]=${input}`);

      cache[input] = response.data;

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar conteúdo. ", error);
      return [];
    }
  };

  // Evento onChange do input
  const handleSearchChange = async (event) => {
    const input = event.target.value;
    setSearch(input);

    if (input.length > 2) {
      setLoading(true);

      let allSuggestions = [];
      allSuggestions = await fetchSuggestions(input);

      setSuggestions(allSuggestions);

      setLoading(false);
    } else {
      setSuggestions([]);
    }
  };

  // Ir para as informações do anime ao clicar em um dos cards
  const handleSearchClick = (id) => {
    type === "anime" ? navigate(`/anime/${id}`) : navigate(`/manga/${id}`);
  };

  // Foque e desfoque do input da pesquisa
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setTimeout(() => setFocused(false), 200); // Demora um tempo até sair do input para poder clicar nos cards

  return (
    <Container id="start">
      <Header
        secondPage={type === "animes" ? "Mangás" : "Animes"}
        thirdPage={"Contatos"}
      />

      <InitialPart>
        <Title>{type === "animes" ? "Animes" : "Mangás"}</Title>

        <ButtonContainer>
          <Button
            text={"Mais populares"}
            onClick={() => handleScrollEvent("#pop")}
          />
          <Button text={"Melhores"} onClick={() => handleScrollEvent("#mel")} />
          <Button
            text={`${type === "animes" ? "Animes" : "Mangás"} da temporada`}
            onClick={() => handleScrollEvent("#temp")}
          />
          <Button text={"Gêneros"} onClick={() => handleScrollEvent("#gen")} />
          <Button
            text={"Ordem alfabética"}
            onClick={() => handleScrollEvent("#alf")}
          />
        </ButtonContainer>
      </InitialPart>

      <SearchArea>
        <Search
          placeholder="Pesquisar"
          value={search}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {focused && (
          <Results className="results">
            {suggestions.length === 0 && !loading && (
              <SuggestionError>Nada foi encontrado 😢</SuggestionError>
            )}
            {suggestions.length > 0 &&
              suggestions.map((content) => (
                <SuggestionContainer
                  key={content.id}
                  onClick={() => handleSearchClick(content.id)}
                >
                  <SuggestionImage
                    src={content.attributes.posterImage?.original}
                  />

                  <SuggestionTitle>
                    {content.attributes.canonicalTitle}
                  </SuggestionTitle>
                </SuggestionContainer>
              ))}
          </Results>
        )}

        <HiSearch className="search" />
      </SearchArea>

      <SectionContainer id="pop">
        <SectionTitle>Mais populares</SectionTitle>
        <SliderContent
          type={type === "animes" ? "anime" : "manga"}
          separator={"-"}
          filter={"sort=popularityRank"}
          contentLength={10}
        />
      </SectionContainer>

      <SectionContainer id="mel">
        <SectionTitle>Melhores</SectionTitle>

        <SliderContent
          type={type === "animes" ? "anime" : "manga"}
          separator={"-"}
          filter={"sort=ratingRank"}
          contentLength={10}
        />
      </SectionContainer>

      <SectionContainer id="temp">
        <SectionTitle>
          {type === "animes" ? "Animes" : "Mangás"} da temporada
        </SectionTitle>

        <SubSection>
          <SubSectionContainer>
            <SubSectionTitle>Melhores avaliados</SubSectionTitle>

            <SliderContent
              type={type === "animes" ? "anime" : "manga"}
              separator={"-"}
              filter={"sort=-averageRating&filter[status]=current"}
              contentLength={10}
            />
          </SubSectionContainer>

          <SubSectionContainer>
            <SubSectionTitle>Recentes</SubSectionTitle>

            <SliderContent
              type={type === "animes" ? "anime" : "manga"}
              filter={"sort=-startDate&filter[status]=current"}
              contentLength={20}
            />
          </SubSectionContainer>
        </SubSection>
      </SectionContainer>

      <SectionContainer id="gen">
        <SectionTitle>Gêneros</SectionTitle>

        <GenderSlider type={type} />
      </SectionContainer>

      <SectionContainer id="alf">
        <SectionTitle>Ordem alfabética</SectionTitle>

        <Alphabet
          selectedLetter={selectedLetter}
          onClick={(letter) => setSelectedLetter(letter)}
        />
      </SectionContainer>

      <FinalContainer>
        <FinalImage
          src={type === "animes" ? finalAnime : finalManga}
          alt={
            type === "animes"
              ? "Marin Kitagawa (Sono Bisque)"
              : "Nami (One Piece)"
          }
        />

        <FinalTextContainer>
          <FinalTitle>Fim da página!</FinalTitle>

          <FinalContentContainer>
            <FinalContentTitle>O que gostaria de ver agora?</FinalContentTitle>

            <FinalButtonContainer>
              <Button
                text={"Voltar ao início"}
                onClick={() => handleScrollEvent("#start")}
              />
              <Button
                text={type === "animes" ? "Mangás" : "Animes"}
                onClick={() =>
                  type === "animes" ? navigate("/mangas") : navigate("/animes")
                }
              />
              <Button text={"Contatos"} onClick={() => navigate("/contatos")} />
            </FinalButtonContainer>
          </FinalContentContainer>
        </FinalTextContainer>
      </FinalContainer>

      <Footer />
    </Container>
  );
}

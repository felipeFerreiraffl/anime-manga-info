import { useCallback, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import finalAnime from "../../assets/images/final/anime-final.png";
import finalManga from "../../assets/images/final/manga-final.png";
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
import { debounce } from "lodash";

export default function Content() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Estados para a barra de pesquisa
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focused, setFocused] = useState(false);

  // Buscar os animes/mangás para pesquisa
  const fetchSuggestions = async (input) => {
    try {
      const response =
        type === "animes"
          ? await getAnimesByFilter(`filter[text]=${input}`)
          : await getMangasByFilter(`filter[text]=${input}`);

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar conteúdo. ", error);
      return [];
    }
  };

  // Evento para debounce
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFetch = useCallback(
    debounce(async (input) => {
      setLoading(true);

      if (input.length > 1) {
        let allSuggestions = [];
        allSuggestions = await fetchSuggestions(input);

        setSuggestions(allSuggestions);
      } else {
        setSuggestions([]);
      }

      setLoading(false);
    }, 500), 
    [] 
  ); 

  // Evento onChange do input
  const handleSearchChange = async (event) => {
    const input = event.target.value;
    setSearch(input);
    debounceFetch(input);
  };

  // Ir para as informações do anime ao clicar em um dos cards
  const handleSearchClick = (id) => {
    type === "animes" ? navigate(`/anime/${id}`) : navigate(`/manga/${id}`);
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

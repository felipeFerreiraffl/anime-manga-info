import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Alphabet from "../../components/Alphabet";
import Button from "../../components/Button";
import GenderSlider from "../../components/GenderSlider";
import Header from "../../components/Header";
import SliderContent from "../../components/Slider";
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
  SuggestionImage,
  SuggestionTitle,
  Title,
} from "../../styles/pages/content";
import finalAnime from "../../assets/images/final/anime-final.png";
import finalManga from "../../assets/images/final/manga-final.png";
import Footer from "../../components/Footer";
import handleScrollEvent from "../../services/scripts/scrollEvent";
import {
  getAnime,
  getAnimesByFilter,
  getManga,
  getMangasByFilter,
} from "../../services/animeAPI";
const cache = {};

export default function Content({ type, secondPage, title }) {
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
    const input = event.target.value.trim();
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
  const handleBlur = () => setTimeout(() => setFocused(false), 200);

  return (
    <Container id="start">
      <Header secondPage={secondPage} />

      <InitialPart>
        <Title>{title}</Title>

        <ButtonContainer>
          <Button
            text={"Mais populares"}
            onClick={() => handleScrollEvent("#pop")}
          />
          <Button
            text={`${title} da temporada`}
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

        {focused && suggestions.length > 0 && (
          <Results className="results">
            {suggestions.map((content) => (
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

        <HiSearch
          style={{ position: "absolute", top: 12, left: 15 }}
          size={25}
        />
      </SearchArea>

      <SectionContainer id="pop">
        <SectionTitle>Mais populares</SectionTitle>
        <SliderContent
          type={type}
          separator={"-"}
          filter={"sort=popularityRank"}
          contentLength={10}
        />
      </SectionContainer>

      <SectionContainer id="temp">
        <SectionTitle>{title} da temporada</SectionTitle>

        <SubSection>
          <SubSectionContainer>
            <SubSectionTitle>Melhores avaliados</SubSectionTitle>

            <SliderContent
              type={type}
              separator={"-"}
              filter={"sort=-averageRating&filter[status]=current"}
              contentLength={10}
            />
          </SubSectionContainer>

          <SubSectionContainer>
            <SubSectionTitle>Recentes</SubSectionTitle>

            <SliderContent
              type={type}
              filter={"sort=-startDate"}
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
          src={type === "anime" ? finalAnime : finalManga}
          alt={
            type === "anime"
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
                text={type === "anime" ? "Mangás" : "Animes"}
                onClick={() =>
                  type === "anime" ? navigate("/mangas") : navigate("/animes")
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

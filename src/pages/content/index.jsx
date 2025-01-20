import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import finalAnime from "../../assets/images/final/anime-final.png";
import finalManga from "../../assets/images/final/manga-final.png";
import Alphabet from "../../components/Alphabet";
import Button from "../../components/Button";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import GenderSlider from "../../components/GenderSlider";
import Header from "../../components/Header";
import SliderContent from "../../components/Slider";
import { getAnimesByFilter, getMangasByFilter } from "../../services/animeAPI";
import handleScrollEvent from "../../services/scripts/scrollEvent";
import colors from "../../styles/colors/colors";
import {
  ButtonContainer,
  Container,
  ContentCardContainer,
  ContentCardLoading,
  ContentCardLoadingText,
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

export default function Content() {
  const { type } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState([]); // Estado para os cards dos animes
  const [selectedLetter, setSelectedLetter] = useState(null); // Estado para selecionar as letras
  const [loading, setLoading] = useState(true);

  // Estados para o Paginate
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;

  // Estados para a barra de pesquisa
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focused, setFocused] = useState(false);

  // Buscar animes/mangás pelo alfabeto
  const fetchContentLetter = async (letter, page) => {
    setLoading(true);

    try {
      const offset = page * itemsPerPage;

      const filter =
        letter === "#" ? `filter[text]=[0-9]` : `filter[text]=${letter}`;

      const response =
        type === "animes"
          ? await getAnimesByFilter(filter, itemsPerPage, offset)
          : await getMangasByFilter(filter, itemsPerPage, offset);

      setContent(response.data);
      setTotalPages(Math.ceil(response.meta.count / itemsPerPage));
    } catch (error) {
      console.error(`Erro ao buscar contéudo pela letra ${letter}. `, error);
      setContent([]);
    } finally {
      setLoading(false);
    }
  };

  // Ao selecionar a letra, define o estado com os animes buscados
  useEffect(() => {
    if (selectedLetter) {
      fetchContentLetter(selectedLetter, currentPage);
    }
  }, [selectedLetter, currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  // Seleciona a letra e define o Paginate para 0
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }) => {
    if (selected !== currentPage) {
      setCurrentPage(selected);
    }
  };

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
          onClick={(letter) => handleLetterClick(letter)}
        />

        {!selectedLetter && (
          <ContentCardLoading>
            <ContentCardLoadingText>
              Selecione uma letra...
            </ContentCardLoadingText>
          </ContentCardLoading>
        )}

        {loading && selectedLetter && (
          <ContentCardLoading>
            <ContentCardLoadingText>Carregando...</ContentCardLoadingText>
          </ContentCardLoading>
        )}

        <ContentCardContainer>
          {content.map((cont) => (
            <ContentCard
              key={cont.id}
              title={cont.attributes.canonicalTitle}
              japTitle={cont.attributes.titles.ja_jp}
              image={cont.attributes.posterImage.original}
              onClick={() =>
                type === "animes"
                  ? navigate(`/anime/${cont.id}`)
                  : navigate(`/manga/${cont.id}`)
              }
            />
          ))}

          <ReactPaginate
            key={selectedLetter}
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
        </ContentCardContainer>
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

import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import Alphabet from "../../components/Alphabet";
import AnimeCard from "../../components/ContentCard";
import Button from "../../components/Button";
import GenderSlider from "../../components/GenderSlider";
import Header from "../../components/Header";
import SliderContent from "../../components/Slider";
import { getAnimesByFilter, getMangasByFilter } from "../../services/animeAPI";
import {
  AnimeCardContainer,
  AnimeCardLoading,
  AnimeCardLoadingText,
  ButtonContainer,
  Container,
  ContentCardContainer,
  ContentCardLoading,
  ContentCardLoadingText,
  InitialPart,
  Search,
  SearchArea,
  SectionContainer,
  SectionTitle,
  SubSection,
  SubSectionContainer,
  SubSectionTitle,
  Title,
} from "../../styles/pages/content";
import ContentCard from "../../components/ContentCard";

export default function Content({ type, secondPage, title }) {
  const [content, setContent] = useState([]); // Estado para os cards dos animes
  const [selectedLetter, setSelectedLetter] = useState(""); // Estado para selecionar as letras
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContentByLetter = async () => {
      if (!selectedLetter) return;

      try {
        const response =
          type === "anime"
            ? await getAnimesByFilter(`filter[text]=${selectedLetter}`)
            : await getMangasByFilter(`filter[text]=${selectedLetter}`);

        const filteredResponse = response.filter((content) =>
          content.attributes.canonicalTitle.toLowerCase().startsWith(selectedLetter.toLowerCase())
        );
        console.log(`Contéudo com a letra ${selectedLetter}`, filteredResponse);

        setContent(filteredResponse);
      } catch (error) {
        console.error("Erro ao buscar o contéudo desejado. ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContentByLetter();
  }, [selectedLetter]);

  return (
    <Container>
      <Header secondPage={secondPage} />

      <InitialPart>
        <Title>{title}</Title>

        <ButtonContainer>
          <Button text={"Mais populares"} />
          <Button text={`${title} da temporada`} />
          <Button text={"Gêneros"} />
          <Button text={"Ordem alfabética"} />
        </ButtonContainer>
      </InitialPart>

      <SearchArea>
        <Search placeholder="Pesquisar" />
        <HiSearch
          style={{ position: "absolute", top: 12, left: 15 }}
          size={25}
        />
      </SearchArea>

      <SectionContainer>
        <SectionTitle>Mais populares</SectionTitle>
        <SliderContent
          type={type}
          separator={"-"}
          filter={"sort=popularityRank"}
          contentLength={10}
        />
      </SectionContainer>

      <SectionContainer>
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

      <SectionContainer>
        <SectionTitle>Gêneros</SectionTitle>

        <GenderSlider type={type} />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Ordem alfabética</SectionTitle>

        <Alphabet selectedLetter={selectedLetter} onClick={(letter) => setSelectedLetter(letter)} />

        {loading ? (
          <ContentCardLoading>
            <ContentCardLoadingText>Selecione uma letra...</ContentCardLoadingText>
          </ContentCardLoading>
        ) : (
          <ContentCardContainer>
            {content.map((content) => (
              <ContentCard
                key={content.id}
                image={content.attributes.posterImage.original}
                japTitle={content.attributes.titles.ja_jp}
                title={content.attributes.canonicalTitle}
              />
            ))}
          </ContentCardContainer>
        )}
      </SectionContainer>
    </Container>
  );
}

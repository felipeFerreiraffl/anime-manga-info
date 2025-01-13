import { HiSearch } from "react-icons/hi";
import Button from "../../components/Button";
import GenderSlider from "../../components/GenderSlider";
import Header from "../../components/Header";
import SliderContent from "../../components/Slider";
import {
  ButtonContainer,
  Container,
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

export default function Content({ type, secondPage, title }) {
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

        <GenderSlider />
      </SectionContainer>
    </Container>
  );
}

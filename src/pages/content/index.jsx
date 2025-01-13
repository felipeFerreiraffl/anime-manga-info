import { HiSearch } from "react-icons/hi";
import Button from "../../components/Button";
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
  Title
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
        <SliderContent type={type} separator={"-"} filter={"sort=popularityRank"} />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>{title} da temporada</SectionTitle>

        <SubSection>
          <SubSectionContainer>
            <SubSectionTitle>Melhores avaliados</SubSectionTitle>

            <SliderContent type={type} separator={"-"} filter={"sort=-averageRating"} />
          </SubSectionContainer>

          <SubSectionContainer>
            <SubSectionTitle>Recentes</SubSectionTitle>

            <SliderContent type={type} />
          </SubSectionContainer>
        </SubSection>
      </SectionContainer>
    </Container>
  );
}

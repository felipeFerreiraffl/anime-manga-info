import { HiSearch } from "react-icons/hi";
import Button from "../../components/Button";
import Header from "../../components/Header";
import SliderContent from "../../components/Slider";
import {
  ButtonContainer,
  Container,
  InitialPart,
  PopularContainer,
  PopularTitle,
  Search,
  SearchArea,
  SectionContainer,
  SectionTitle,
  SubSection,
  SubSectionContainer,
  SubSectionTitle,
  Title,
} from "../../styles/pages/content";

export default function Content({ secondPage, title }) {
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
        <SliderContent ranking={""} separator={""} />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>{title} da temporada</SectionTitle>

        <SubSection>
          <SubSectionContainer>
            <SubSectionTitle>Melhores avaliados</SubSectionTitle>

            <SliderContent ranking={"99.99"} separator={"-"} />
          </SubSectionContainer>

          <SubSectionContainer>
            <SubSectionTitle>Recentes</SubSectionTitle>

            <SliderContent />
          </SubSectionContainer>
        </SubSection>
      </SectionContainer>
    </Container>
  );
}

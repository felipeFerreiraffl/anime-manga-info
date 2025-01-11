import Button from "../../components/Button";
import Header from "../../components/Header";
import { ButtonContainer, Container, InitialPart, Title } from "../../styles/pages/content";

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
   </Container>
 );
}
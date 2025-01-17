import { Container } from "../../styles/pages/gender";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Genre({ type }) {
 return (
   <Container>
    <Header secondPage={type === "anime" ? "Mangás" : "Animes"} thirdPage={"Contatos"} />
   </Container>
 );
}
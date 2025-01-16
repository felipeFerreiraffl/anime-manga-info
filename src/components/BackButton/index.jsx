import { HiArrowCircleLeft } from "react-icons/hi";
import { BackText, Container } from "../../styles/components/backButton";
import colors from "../../styles/colors/colors";

export default function BackButton({ onClick }) {
 return (
   <Container onClick={onClick}>
    <HiArrowCircleLeft size={24} color={colors.main.pk1000} />

    <BackText>Voltar</BackText>
   </Container>
 );
}
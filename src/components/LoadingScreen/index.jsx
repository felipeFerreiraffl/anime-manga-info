import { LoadingContainer, LoadingLogo, LoadingText } from "../../styles/components/loadingScreen";
import logo from "../../assets/logos/symbol-jap.svg";

export default function LoadingScreen() {
 return (
   <LoadingContainer>
    <LoadingLogo src={logo} alt="Carregamento" />

    <LoadingText>Carregando...</LoadingText>
   </LoadingContainer>
 );
}
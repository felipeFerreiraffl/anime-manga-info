import {
  Container,
  Explanation,
  InfosContainer,
  LinksContainer,
  LinksTextContainer,
  LinkText,
  MainContainer,
  MyImage,
  SubtitleContainer,
  TextContainer,
  Welcoming,
} from "../../styles/pages/contact";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HiLink } from "react-icons/hi2";
import colors from "../../styles/colors/colors";
import houtarou from "../../assets/images/contact/my-profile.png";

export default function Contacts() {
  return (
    <Container>
      <Header secondPage={"Animes"} thirdPage={"Mangás"} />

      <MainContainer>
        <MyImage src={houtarou} alt="Oreki Houtarou - Meu perfil" />

        <InfosContainer>
          <TextContainer>
            <Welcoming>Olá, meu nome é Felipe.</Welcoming>

            <SubtitleContainer>
              <Explanation>
                Esse projeto foi feito como aprendizagem para aprender a como
                manipular APIs e usá-las para fazer as aplicações.
              </Explanation>
              <Explanation>Espero que tenha gostado!</Explanation>
            </SubtitleContainer>
          </TextContainer>

          <LinksContainer>
            <HiLink className="link-icn" color={colors.main.pk800} />

            <LinksTextContainer>
              <LinkText href="">Github</LinkText>
              <LinkText href="">Linkedin</LinkText>
              <LinkText href="">Instagram</LinkText>
            </LinksTextContainer>
          </LinksContainer>
        </InfosContainer>
      </MainContainer>

      <Footer />
    </Container>
  );
}

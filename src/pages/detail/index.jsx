import {
  Container,
  ContentAltTitle,
  ContentImage,
  ContentRanking,
  ContentRating,
  ContentRatingColor,
  ContentRatingContainer,
  ContentSection,
  ContentSectionTitle,
  ContentTextContainer,
  ContentTitle,
  ContentTitleContainer,
  Divisor,
  Infos,
  InfosText,
  InitialDetails,
  LoadingContainer,
  Synopsis,
} from "../../styles/pages/detail";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { getAnime, getManga } from "../../services/animeAPI";
import handleRatingColor from "../../services/scripts/ratingColor";

export default function Detail({ type, secondPage }) {
  const { id } = useParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const fetchContent = async () => {
      try {
        const response =
          type === "anime" ? await getAnime(id) : await getManga(id);

        setContent(response);
      } catch (error) {
        console.error("Erro ao buscar o conteúdo. ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <Container>
      <Header secondPage={secondPage} />

      <BackButton
        onClick={() =>
          type === "anime" ? navigate("/animes") : navigate("/mangas")
        }
      />

      {loading ? (
        <LoadingContainer>
          <InfosText>Carregando...</InfosText>
        </LoadingContainer>
      ) : (
        <>
          <InitialDetails
            backgroundImage={content.attributes.coverImage?.original || "none"}
          >
            <ContentImage
              src={content.attributes.posterImage?.original || ""}
              alt={`Capa de ${content.attributes.canonicalTitle}`}
            />

            <ContentTextContainer>
              <ContentRanking>
                Ranking: {content.attributes.ratingRank}
              </ContentRanking>

              <ContentTitle>{content.attributes.canonicalTitle}</ContentTitle>

              <ContentTitleContainer>
                <ContentAltTitle>
                  {content.attributes.titles.en_jp}
                </ContentAltTitle>
                <ContentAltTitle>
                  {content.attributes.titles.ja_jp}
                </ContentAltTitle>
              </ContentTitleContainer>

              <ContentRatingContainer>
                <ContentRating>
                  {content.attributes?.averageRating || "?" }
                </ContentRating>

                <ContentRatingColor
                  style={{
                    backgroundColor: handleRatingColor(
                      content.attributes.averageRating
                    ),
                  }}
                />
              </ContentRatingContainer>
            </ContentTextContainer>
          </InitialDetails>

          <Divisor />

          <ContentSection>
            <ContentSectionTitle>Sinopse</ContentSectionTitle>

            <Synopsis>{content.attributes.synopsis}</Synopsis>
          </ContentSection>

          <ContentSection>
            <ContentSectionTitle>Informações</ContentSectionTitle>

            <Infos>
              {type === "anime" ? (
                <>
                  <InfosText>
                    Data de criação: {content.attributes.startDate || "?"}
                  </InfosText>
                  <InfosText>
                    Episódios: {content.attributes.episodeCount || "?"}
                  </InfosText>
                  <InfosText>
                    Status: {content.attributes.status || "?"}
                  </InfosText>
                  <InfosText>
                    Idade indicativa: {content.attributes.ageRating || "?"}
                  </InfosText>
                  <InfosText>
                    Ranking de popularidade:{" "}
                    {content.attributes.popularityRank || "?"}
                  </InfosText>
                  <InfosText>
                    Ranking de avaliação: {content.attributes.ratingRank || "?"}
                  </InfosText>
                </>
              ) : (
                <>
                  <InfosText>
                    Data de criação: {content.attributes.startDate || "?"}
                  </InfosText>
                  <InfosText>
                    Capítulos: {content.attributes.chapterCount || "?"}
                  </InfosText>
                  <InfosText>
                    Volumes: {content.attributes.volumeCount || "?"}
                  </InfosText>
                  <InfosText>
                    Serialização: {content.attributes.serialization || "?"}
                  </InfosText>
                  <InfosText>
                    Status: {content.attributes.status || "?"}
                  </InfosText>
                  <InfosText>
                    Idade indicativa: {content.attributes.ageRating || "?"}
                  </InfosText>
                  <InfosText>
                    Ranking de popularidade:{" "}
                    {content.attributes.popularityRank || "?"}
                  </InfosText>
                  <InfosText>
                    Ranking de avaliação: {content.attributes.ratingRank || "?"}
                  </InfosText>
                </>
              )}
            </Infos>
          </ContentSection>
        </>
      )}

      <Footer />
    </Container>
  );
}

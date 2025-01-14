import { AnimeJapTitle, AnimeTitle, Card, CardImage, CardTextContainer } from "../../styles/components/animeCard";

export default function AnimeCard({ image, title, japTitle }) {
 return (
   <Card>
    <CardImage src={image} />

    <CardTextContainer>
        <AnimeTitle>{title}</AnimeTitle>

        <AnimeJapTitle>{japTitle}</AnimeJapTitle>
    </CardTextContainer>
   </Card>
 );
}
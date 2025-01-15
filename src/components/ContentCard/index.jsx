import { AnimeJapTitle, AnimeTitle, Card, CardImage, CardTextContainer } from "../../styles/components/contentCard";

export default function ContentCard({ image, title, japTitle, onClick }) {
 return (
   <Card onClick={onClick}>
    <CardImage src={image} />

    <CardTextContainer>
        <AnimeTitle>{title}</AnimeTitle>

        <AnimeJapTitle>{japTitle}</AnimeJapTitle>
    </CardTextContainer>
   </Card>
 );
}
import { Card, Gender } from "../../styles/components/genderCard";

export default function GenderCard({ background, gender, onClick }) {
 return (
   <Card onClick={onClick} backgroundImage={background}>
    <Gender>{gender}</Gender>
   </Card>
 );
}
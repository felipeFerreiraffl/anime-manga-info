import { Card, Gender } from "../../styles/components/genderCard";

export default function GenderCard({ background, gender }) {
 return (
   <Card backgroundImage={background}>
    <Gender>{gender}</Gender>
   </Card>
 );
}
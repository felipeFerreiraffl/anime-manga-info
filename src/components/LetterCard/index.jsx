import { Card, Letter } from "../../styles/components/letterCard";

export default function LetterCard({ letter, onClick }) {
 return (
   <Card onClick={onClick}>
    <Letter>{letter}</Letter>
   </Card>
 );
}
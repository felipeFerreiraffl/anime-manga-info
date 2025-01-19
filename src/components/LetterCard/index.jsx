import { Card, Letter } from "../../styles/components/letterCard";

export default function LetterCard({ letter, onClick, isActive }) {
 return (
   <Card onClick={onClick} className={isActive ? "active" : ""}>
    <Letter>{letter}</Letter>
   </Card>
 );
}
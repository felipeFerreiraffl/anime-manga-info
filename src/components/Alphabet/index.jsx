import LetterCard from "../../components/LetterCard";
import {
  AlphabetArea,
  FirstLine,
  SecondLine,
} from "../../styles/components/alphabet";

export default function Alphabet({ onClick }) {
  const alphabetic = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <AlphabetArea>
      <FirstLine>
        {alphabetic.slice(0, 14).map((letter, index) => (
          <LetterCard key={index} letter={letter} onClick={() => onClick(letter)} />
        ))}
      </FirstLine>

      <SecondLine>
        {alphabetic.slice(14).map((letter, index) => (
          <LetterCard key={index} letter={letter} onClick={() => onClick(letter)} />
        ))}
      </SecondLine>
    </AlphabetArea>
  );
}

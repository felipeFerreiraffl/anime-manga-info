import { useState } from "react";
import LetterCard from "../../components/LetterCard";
import {
  AlphabetArea,
  FirstLine,
  SecondLine,
} from "../../styles/components/alphabet";

export default function Alphabet() {
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
        {alphabetic.filter((_, i) => i <= 13).map((letter, i) => (
          <LetterCard key={i} letter={letter} />
        ))}
      </FirstLine>

      <SecondLine>
        {alphabetic.filter((_, i) => i > 13).map((letter, i) => (
          <LetterCard key={i} letter={letter} />
        ))}
      </SecondLine>
    </AlphabetArea>
  );
}

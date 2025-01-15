import { ButtonText, ButtonView } from "../../styles/components/button";

export default function Button({ text, onClick }) {
 return (
   <ButtonView onClick={onClick}>
    <ButtonText>{text}</ButtonText>
   </ButtonView>
 );
}
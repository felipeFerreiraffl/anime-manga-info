import { ButtonText, ButtonView } from "../../styles/components/button";

export default function Button({ text }) {
 return (
   <ButtonView>
    <ButtonText>{text}</ButtonText>
   </ButtonView>
 );
}
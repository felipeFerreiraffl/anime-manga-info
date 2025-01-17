import colors from "../../styles/colors/colors";

// Função para definir a cor do círculo de acordo com a nota do anime/mangá
const handleRatingColor = (rating) => {
  if (rating >= 80) {
    return colors.auxiliary.gn1000;
  } else if (rating < 80 && rating >= 75) {
    return colors.auxiliary.gn500;
  } else if (rating < 75 && rating >= 60) {
    return colors.auxiliary.yw1000;
  } else {
    return colors.auxiliary.rd1000;
  }
};

export default handleRatingColor;

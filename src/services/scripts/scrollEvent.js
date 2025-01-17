// Função para rolagem até uma parte específica da página
const handleScrollEvent = (pagePart) => {
  const target = document.querySelector(pagePart);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export default handleScrollEvent;

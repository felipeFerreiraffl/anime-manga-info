const handleScrollEvent = (pagePart) => {
  const target = document.querySelector(pagePart);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export default handleScrollEvent;

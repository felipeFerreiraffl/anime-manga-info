const apiURL = "https://kitsu.io/api/edge";

// Animes

// Pegar um anime específico
export const getAnime = async (animeId) => {
  try {
    const response = await fetch(`${apiURL}/anime/${animeId}`);
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Erro ao procurar informações sobre o anime. ", error);
    return [];
  }
};

// FIltrar animes (popularidade, temporada, melhores, ...)
export const getAnimesByFilter = async (filter, limit = 20, offset) => {

  try {
    const response = await fetch(`${apiURL}/anime?${filter}&page[limit]=${limit}&page[offset]=${offset}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao pegar animes com esse filtro. ", error);
    return [];
  }
};

// Mangás

// Pegar um mangá específico
export const getManga = async (mangaId) => {
  try {
    const response = await fetch(`${apiURL}/manga/${mangaId}`);
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Erro ao procurar informações sobre o mangá. ", error);
    return [];
  }
};

// FIltrar mangás (popularidade, temporada, melhores, ...)
export const getMangasByFilter = async (filter, limit = 20, offset) => {
  try {
    const response = await fetch(
      `${apiURL}/manga?${filter}&page[limit]=${limit}&page[offset]=${offset}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao pegar mangás com esse filtro. ", error);
    return [];
  }
};

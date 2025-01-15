const apiURL = "https://kitsu.io/api/edge";

// Animes

// Pegar um anime específico
export const getAnime = async (animeId) => {
  try {
    const response = await fetch(`${apiURL}/anime/${animeId}`);
    const data = await response.data.json();

    return {
      mainTitle: data.attributes.canonicalTitle,
      enjpTitle: data.attributes.titles.en_jp,
      jpTitle: data.attributes.titles.ja_jp,
      posterImage: data.attributes.posterImage.original,
      coverImage: data.attributes.coverImage.original,
      synopsis: data.attributes.synopsis,
      creationDate: data.attributes.startDate,
      episodes: data.attributes.episodeCount,
      ageRating: data.attributes.ageRating,
      rating: data.attributes.averageRating,
      popularityRank: data.attributes.popularityRank,
      ratingRank: data.attributes.ratingRank,
      status: data.attributes.status,
    };
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

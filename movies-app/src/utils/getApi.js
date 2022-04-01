export const getApi = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = process.env.REACT_APP_API_KEY;
  return {
    getMovies: (page, genreforURL) =>
      `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`,
    getSearch: (type, searchText, page) =>
      `${baseUrl}/search/${
        type ? "tv" : "movie"
      }?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`,
    getSeries: (page, genreforURL) =>
      `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`,
    getTrending: (page) =>
      `${baseUrl}/trending/all/day?api_key=${apiKey}&page=${page}`,
    getCredits: (mediaType, id) =>
      `${baseUrl}/${mediaType}/${id}/credits?api_key=${apiKey}&language=en-US`,
    getVideo: (mediaType, id) =>
      `${baseUrl}/${mediaType}/${id}/videos?api_key=${apiKey}&language=en-US`,
    getMovieInfo: (mediaType, id) =>
      `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}&language=en-US`,
  };
};

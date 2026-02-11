import type { Id } from "../../shared/types/common";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2f7d383287512c1ce8b60949dfcb5704";

export const getMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    );
    const data = await response.json();

    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (id: Id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const sortMovies = async (sortBy: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sortBy}`,
    );
    const data = await response.json();

    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export const filterMoviesByGenre = async (genreId: Id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=ru-RU`,
    );
    const data = await response.json();

    return data.results;
  } catch (err) {
    console.log(err);
  }
};

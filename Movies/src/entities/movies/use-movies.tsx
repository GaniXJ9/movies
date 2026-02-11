import { create } from "zustand";
import type { Movie, MovieDetails } from "../../shared/types/movies";

const API_KEY = "2f7d383287512c1ce8b60949dfcb5704";

interface Movies {
  movies: Movie[];
  selectedMovie: MovieDetails | null;
  selectedGenre: number | null;
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchMovieById: (id: number) => Promise<void>;
  fetchSortedMovies: (sortBy: string) => Promise<void>;
  fetchMoviesByGenre: (genreId: number) => Promise<void>;
}

export const useMovies = create<Movies>((set) => ({
  movies: [],
  loading: false,
  selectedMovie: null,
  selectedGenre: null,
  error: null,

  fetchMovies: async () => {
    try {
      set({ loading: true });

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      );
      const data = await response.json();

      set({ movies: data.results, loading: false });
    } catch (err) {
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },
  fetchMovieById: async (id: number) => {
    try {
      set({ loading: true, error: null });

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error("Фильм не найден");
      }

      const data = await response.json();

      set({ selectedMovie: data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Unknown error",
        loading: false,
      });
    }
  },

  fetchSortedMovies: async (sortBy: string) => {
    set({ loading: true });

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${sortBy}`,
      );

      const data = await response.json();

      set({ movies: data.results });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  fetchMoviesByGenre: async (genreId: number) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=ru-RU`,
      );
      const data = await response.json();

      set({ movies: data.results, selectedGenre: genreId });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : "Unknown error" });
    } finally {
      set({ loading: false });
    }
  },
}));

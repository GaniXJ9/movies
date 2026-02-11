import { create } from "zustand";
import type { MovieStore } from "../../../shared/types/movies";
import {
  filterMoviesByGenre,
  getMovieById,
  getMovies,
  sortMovies,
} from "../../api/movies-api";
import type { Id } from "../../../shared/types/common";

export const useMovies = create<MovieStore>((set) => ({
  movies: [],
  loading: false,
  selectedMovie: null,
  selectedGenre: null,
  error: null,

  getAllMovies: async () => {
    try {
      set({ loading: true });
      const moviesData = await getMovies();

      set({ movies: moviesData, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Unknown error",
        loading: false,
      });
    } finally {
      set({ loading: false });
    }
  },
  getOneMovie: async (id: Id) => {
    try {
      set({ loading: true, error: null });

      const selectedMovieData = await getMovieById(id);

      set({ selectedMovie: selectedMovieData, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Unknown error",
        loading: false,
      });
    } finally {
      set({ loading: false });
    }
  },

  getSortedMovies: async (sortBy: string) => {
    try {
      set({ loading: true });

      const sortedMoviesData = await sortMovies(sortBy);

      set({ movies: sortedMoviesData, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Unknown error",
        loading: false,
      });
    } finally {
      set({ loading: false });
    }
  },

  getFilteredMovie: async (genreId: Id) => {
    set({ loading: true });

    try {
      const filteredMoviesData = await filterMoviesByGenre(genreId);

      set({
        movies: filteredMoviesData,
        selectedGenre: genreId,
        loading: false,
      });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Unknown error",
        loading: false,
      });
    } finally {
      set({ loading: false });
    }
  },
}));

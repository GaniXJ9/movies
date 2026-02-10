import { create } from "zustand";
import type { Movie } from "../../shared/types/movies";

const API_KEY = "2f7d383287512c1ce8b60949dfcb5704";

interface Movies {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
}

export const useMovies = create<Movies>((set) => ({
  movies: [],
  loading: false,
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
}));

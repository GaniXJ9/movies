import { useMovies } from "../../entities/movies/use-movies";
import { GENRES_MAP, GENRES_COLOR_MAP } from "../../shared/constants/constant";
import SortingOptions from "./sorting/sorting-options";

export const MoviesByGenre = () => {
  const { selectedGenre, fetchMoviesByGenre, loading } = useMovies();

  const genreIds = Object.keys(GENRES_MAP).map(Number); // [28, 12, 16, ...]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Фильтры по жанрам</h1>

      <div className="flex gap-2 flex-wrap mb-6">
        {genreIds.map((id) => {
          const isSelected = selectedGenre === id;
          const colorClass = GENRES_COLOR_MAP[id] || "bg-gray-200";

          return (
            <button
              key={id}
              onClick={() => fetchMoviesByGenre(id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                isSelected
                  ? `${colorClass} text-white`
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {GENRES_MAP[id]}
            </button>
          );
        })}
      </div>

      <SortingOptions />
    </div>
  );
};

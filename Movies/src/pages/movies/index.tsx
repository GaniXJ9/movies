import { useEffect } from "react";
import { useMovies } from "../../entities/movies/use-movies";
import { MoviesHeading } from "../../widgets/movies/movies-heading";
import { MovieCard } from "../../widgets/movies/movie-card";
import SortingOptions from "../../features/movies/sorting/sorting-options";
import { MoviesByGenre } from "../../features/movies/movie-filter";

const Movies = () => {
  const { movies, fetchMovies } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!movies) return <div>Загрузка...</div>;

  return (
    <section className="h-sreen">
      <div className="bg-primary ">
        <MoviesHeading movies={movies} />
      </div>

      <SortingOptions />
      <MoviesByGenre />

      <section className="grid grid-cols-5 gap-6 py-10 px-20">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </section>
  );
};

export default Movies;

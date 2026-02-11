import { useEffect } from "react";
import { useMovies } from "../../entities/store/movies/use-movies";
import { MoviesHeading } from "../../widgets/movies/movies-heading";
import { MovieCard } from "../../widgets/movies/movie-card";
import SortingOptions from "../../features/movies/sorting/sorting-options";
import { MoviesByGenre } from "../../features/movies/movie-filter";
import { Loader } from "../../widgets/common/loader";

const Movies = () => {
  const { movies, getAllMovies } = useMovies();

  useEffect(() => {
    getAllMovies();
  }, []);

  if (!movies) return <Loader />;

  return (
    <section className="h-sreen">
      <div className="bg-primary ">
        <MoviesHeading movies={movies} />
      </div>

      <MoviesByGenre />
      <SortingOptions />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10 px-20">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </section>
  );
};

export default Movies;

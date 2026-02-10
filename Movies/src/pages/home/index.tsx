import { useEffect } from "react";
import { useMovies } from "../../entities/movies/use-movies";
import { MoviesHeading } from "../../widgets/movies/movies-heading";
import { MoviesTable } from "../../widgets/movies/movies-table";
import { useMovieColumns } from "../../app/movies/movies-column";
import { MovieCard } from "../../widgets/movies/movie-card";

const Home = () => {
  const { movies, fetchMovies } = useMovies();
  const columns = useMovieColumns();

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!movies) return <div>Загрузка...</div>;

  return (
    <section className="h-sreen">
      <div className="bg-primary ">
        <MoviesHeading movies={movies} />
      </div>

      <section className="grid grid-cols-5 gap-6 py-10 px-20">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </section>
  );
};

export default Home;

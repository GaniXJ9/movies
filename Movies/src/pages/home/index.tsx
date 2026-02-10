import { useEffect } from "react";
import { useMovies } from "../../entities/movies/use-movies";
import { MoviesHeading } from "../../widgets/movies/movies-heading";

const Home = () => {
  const { movies, fetchMovies } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!movies) return <div>Загрузка...</div>;

  return (
    <section className="px-20 py-10">
      <h2 className="text-2xl font-bold mb-6">Популярные фильмы</h2>
      <MoviesHeading movies={movies} />
    </section>
  );
};

export default Home;

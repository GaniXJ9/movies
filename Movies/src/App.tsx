import { useEffect, useState } from "react";
import { getMovies } from "./entities/movies/getMovies";

function App() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading && !movies) return <div>Загрузка...</div>;

  return (
    <section>
      {/* <h1>Популярные фильмы</h1>

      <ul>
        {movies?.map((movie: any) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
    </section>
  );
}

export default App;

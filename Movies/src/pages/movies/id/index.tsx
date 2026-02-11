import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../../entities/movies/use-movies";
import dayjs from "dayjs";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MoviesDetail = () => {
  const { id } = useParams();
  const { selectedMovie, fetchMovieById } = useMovies();

  useEffect(() => {
    if (id) {
      fetchMovieById(Number(id));
    }
  }, [id]);

  if (!selectedMovie) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Загрузка...
      </div>
    );
  }

  return (
    <section className="relative min-h-screen text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${IMAGE_URL}${selectedMovie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-8 py-16 flex gap-10">
        <img
          src={`${IMAGE_URL}${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
          className="w-92 rounded-2xl shadow-2xl"
        />

        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl font-bold">
              {selectedMovie.title}{" "}
              <span className="text-gray-400 font-normal">
                ({dayjs(selectedMovie.release_date).format("YYYY")})
              </span>
            </h1>

            <p className="text-gray-400 italic mt-1">{selectedMovie.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span>
              {dayjs(selectedMovie.release_date).format("DD MMMM YYYY")}
            </span>
            <span>⏱ {selectedMovie.runtime} мин</span>
            <span>🌎 {selectedMovie.original_language.toUpperCase()}</span>
            <span>⭐ {selectedMovie?.vote_average?.toFixed(1)} / 10</span>
          </div>

          <div className="flex gap-2 flex-wrap">
            {selectedMovie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Описание</h2>
            <p className="text-gray-300 leading-relaxed">
              {selectedMovie.overview}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <p className="text-gray-400 text-sm">Бюджет</p>
              <p className="text-lg font-semibold">
                ${selectedMovie.budget.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Сборы</p>
              <p className="text-lg font-semibold">
                ${selectedMovie.revenue.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Статус</p>
              <p className="text-lg font-semibold">{selectedMovie.status}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Страна</p>
              <p className="text-lg font-semibold">
                {selectedMovie.production_countries
                  .map((c) => c.name)
                  .join(", ")}
              </p>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-xl font-semibold mb-3">Production Companies</h2>
            <div className="flex flex-wrap gap-4">
              {selectedMovie.production_companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white/10 px-4 py-2 rounded-lg text-sm"
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesDetail;

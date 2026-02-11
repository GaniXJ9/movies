import { useEffect } from "react";
import dayjs from "dayjs";
import { useMovies } from "../../../entities/store/movies/use-movies";
import BackDrop from "../../../shared/back-drop";
import { Loader } from "../../../widgets/common/loader";
import { Button } from "../../../components/ui/button";
import { IMAGE_URL_1 } from "../../../shared/constants/constant";

interface MoviesDetailProps {
  id: number;
  onOpenChange: (open: boolean) => void;
}

const MoviesDetail = ({ id, onOpenChange }: MoviesDetailProps) => {
  const { selectedMovie, getOneMovie } = useMovies();

  const handleClose = () => {
    onOpenChange(false);
  };

  useEffect(() => {
    if (id) {
      getOneMovie(Number(id));
    }
  }, [id]);

  if (!selectedMovie) {
    return <Loader />;
  }

  return (
    <section className="relative text-white overflow-auto">
      <BackDrop img={selectedMovie.backdrop_path} />

      <div className="relative container mx-auto px-8 py-16 flex flex-col md:flex-row gap-10">
        <img
          src={`${IMAGE_URL_1}${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
          className="w-32 lg:w-92 rounded-2xl shadow-2xl"
        />

        <div className="flex-1 md:space-y-6">
          <div>
            <h1 className="text-xl lg:text-4xl font-bold">
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
            <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
              {selectedMovie.overview}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <p className="text-gray-400 text-sm">Бюджет</p>
              <p className="text-sm md:text-lg font-semibold">
                ${selectedMovie.budget.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Сборы</p>
              <p className="text-sm md:text-lg font-semibold">
                ${selectedMovie.revenue.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Статус</p>
              <p className="text-sm md:text-lg font-semibold">
                {selectedMovie.status}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Страна</p>
              <p className="text-sm md:text-lg font-semibold">
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

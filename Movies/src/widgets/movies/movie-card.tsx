import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { GENRES_COLOR_MAP, GENRES_MAP } from "../../shared/constants/constant";
import type { Movie } from "../../shared/types/movies";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  const toMovieDetails = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Card
      className="relative w-60 hover:scale-105 transition-all duration-300 cursor-pointer group"
      onClick={toMovieDetails}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className=""
      />
      <CardContent className="p-4">
        <h3 className="text-md font-bold mb-2">{movie.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          Rating: {movie.vote_average.toFixed(1)} ⭐
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {movie.genre_ids.map((id) => (
            <span
              key={id}
              className={`text-xs ${GENRES_COLOR_MAP[id]} text-white px-2 py-1 rounded-full`}
            >
              {GENRES_MAP[id]}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

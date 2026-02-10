import { Card } from "../../components/ui/card";
import type { Movie } from "../../shared/types/movies";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Card className="relative w-60 transition-shadow">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className=""
      />
    </Card>
  );
};

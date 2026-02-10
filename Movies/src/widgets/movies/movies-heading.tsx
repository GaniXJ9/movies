import type { Movie } from "../../shared/types/movies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const MoviesHeading = ({ movies }: { movies: Movie[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="bg-primary"
    >
      <CarouselContent>
        {movies?.map((movie: Movie) => (
          <CarouselItem key={movie.id} className="basis-1/5">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="relative"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

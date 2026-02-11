import type { Movie } from "../../shared/types/movies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IMAGE_URL_2 } from "../../shared/constants/constant";

export const MoviesHeading = ({ movies }: { movies: Movie[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="bg-primary"
    >
      <CarouselContent>
        {movies?.map((movie: Movie) => (
          <CarouselItem key={movie.id} className="basis-1/8">
            <img
              src={`${IMAGE_URL_2}${movie.poster_path}`}
              alt={movie.title}
              className="relative"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

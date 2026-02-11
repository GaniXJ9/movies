import clsx from "clsx";
import { MovieDialog } from "../../widgets/movies/movie-modal";
import type { Movie } from "../types/movies";

const MovieModal = ({
  open,
  movie,
  setOpen,
}: {
  open: boolean;
  movie: Movie | null;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div
      className={clsx(
        "fixed flex justify-center items-center z-10 w-full h-full top-0 left-0 bg-black/50",
        open ? "block" : "hidden",
      )}
    >
      <div className="">
        <MovieDialog movie={movie} open={open} onOpenChange={setOpen} />
      </div>
    </div>
  );
};

export default MovieModal;

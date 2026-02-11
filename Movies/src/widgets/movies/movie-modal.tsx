import type { Movie } from "../../shared/types/movies";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import MoviesDetail from "../../pages/movies/id";

export const MovieDialog = ({
  movie,
  open,
  onOpenChange,
}: {
  movie: Movie | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  if (!movie) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <MoviesDetail id={movie.id} onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  );
};

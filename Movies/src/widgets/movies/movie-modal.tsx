// import { Badge } from "@/components/ui/badge";
import type { Movie } from "../../shared/types/movies";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import MoviesDetail from "../../pages/movies/id";

interface MovieDialogProps {
  movie: Movie | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MovieDialog = ({
  movie,
  open,
  onOpenChange,
}: MovieDialogProps) => {
  if (!movie) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <MoviesDetail id={movie.id} />
      </DialogContent>
    </Dialog>
  );
};

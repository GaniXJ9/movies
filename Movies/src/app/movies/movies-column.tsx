import type { ColumnDef } from "@tanstack/react-table";
import type { Movie } from "../../shared/types/movies";
import { MovieRating } from "../../widgets/movies/movie-rating";

export const useMovieColumns = () => {
  const columns: ColumnDef<Movie>[] = [
    {
      accessorKey: "poster_path",
      header: "Title",
      cell: ({ row }) => {
        const { title, poster_path, vote_average } = row.original;

        return (
          <div className="font-bold flex gap-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className="w-30"
            />

            <div>
              <span className="text-lg">{title}</span>
              <MovieRating rating={vote_average} />
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "release_date",
      header: "Release Date",
    },
  ];

  return columns;
};

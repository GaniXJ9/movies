import { useState } from "react";
import { useMovies } from "../../../entities/movies/use-movies";

const SortingOptions = () => {
  const { fetchSortedMovies } = useMovies();

  const [sortField, setSortField] = useState("popularity");
  const [order, setOrder] = useState("desc");

  const handleSort = (field: string, direction: string) => {
    fetchSortedMovies(`${field}.${direction}`);
  };

  return (
    <div className="flex gap-4">
      <select
        value={sortField}
        onChange={(e) => {
          const value = e.target.value;
          setSortField(value);
          handleSort(value, order);
        }}
        className="p-2 rounded bg-zinc-800 text-white"
      >
        <option value="popularity">Most popular</option>
        <option value="vote_average">Raiting</option>
        <option value="release_date">Release date</option>
      </select>

      <select
        value={order}
        onChange={(e) => {
          const value = e.target.value;
          setOrder(value);
          handleSort(sortField, value);
        }}
        className="p-2 rounded bg-zinc-800 text-white"
      >
        <option value="desc"> ↓</option>
        <option value="asc"> ↑</option>
      </select>
    </div>
  );
};

export default SortingOptions;

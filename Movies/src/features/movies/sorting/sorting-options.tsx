import { useState } from "react";
import { useMovies } from "../../../entities/store/movies/use-movies";
import {
  ORDER_OPTIONS,
  ORDER_OPTIONS_VALUE,
} from "../../../shared/constants/constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const SortingOptions = () => {
  const { getSortedMovies } = useMovies();

  const [sortField, setSortField] = useState(ORDER_OPTIONS_VALUE.popularity);
  const [order, setOrder] = useState(ORDER_OPTIONS_VALUE.desc);

  const handleSort = (field: string, direction: string) => {
    getSortedMovies(`${field}.${direction}`);
  };

  return (
    <div className="flex gap-4 px-5">
      <Select
        value={sortField}
        onValueChange={(value) => {
          setSortField(value);
          handleSort(value, order);
        }}
      >
        <SelectTrigger className="w-45 p-2 rounded bg-zinc-800 text-white">
          <SelectValue placeholder="Сортировка" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-900 text-white">
          <SelectItem value={ORDER_OPTIONS_VALUE.popularity}>
            {ORDER_OPTIONS.popularity}
          </SelectItem>
          <SelectItem value={ORDER_OPTIONS_VALUE.vote_average}>
            {ORDER_OPTIONS.vote_average}
          </SelectItem>
          <SelectItem value={ORDER_OPTIONS_VALUE.release_date}>
            {ORDER_OPTIONS.release_date}
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={order}
        onValueChange={(value) => {
          setOrder(value);
          handleSort(sortField, value);
        }}
      >
        <SelectTrigger className="w-30 p-2 rounded bg-zinc-800 text-white">
          <SelectValue placeholder="SORTING" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-900 text-white">
          <SelectItem value={ORDER_OPTIONS_VALUE.desc}>
            {ORDER_OPTIONS.desc}
          </SelectItem>
          <SelectItem value={ORDER_OPTIONS_VALUE.asc}>
            {ORDER_OPTIONS.asc}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingOptions;

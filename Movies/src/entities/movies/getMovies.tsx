const API_KEY = "2f7d383287512c1ce8b60949dfcb5704"; // вставь сюда свой ключ

export const getMovies = async () => {
  const m = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  ).then((res) => res.json());

  return m;
};

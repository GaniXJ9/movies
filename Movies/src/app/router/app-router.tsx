import { useRoutes } from "react-router-dom";
import Movies from "../../pages/movies";
import MoviesDetail from "../../pages/movies/id";

export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Movies /> },
    { path: "/movies/:id", element: <MoviesDetail /> },
  ]);

  return routes;
}

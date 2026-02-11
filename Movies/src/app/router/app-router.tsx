import { useRoutes } from "react-router-dom";
import Movies from "../../pages/movies";

export default function AppRouter() {
  const routes = useRoutes([{ path: "/", element: <Movies /> }]);

  return routes;
}

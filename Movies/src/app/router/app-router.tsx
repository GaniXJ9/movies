import { useRoutes } from "react-router-dom";
import Home from "../../pages/home";

export default function AppRouter() {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
}

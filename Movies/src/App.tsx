import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/app-router";
import Header from "./widgets/header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

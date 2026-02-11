import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 bg-primary flex items-center justify-center sticky top-0 z-10">
      <Link to="/" className="text-white text-2xl font-bold">
        TMDB Tech project
      </Link>
    </header>
  );
};

export default Header;

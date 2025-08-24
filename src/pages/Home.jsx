import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../context/MoviesContext";

export default function Home() {
  const { movies } = useMovies();

  return (
    <div className="page-container">
      <h1>Explorador de Películas Pokémon 🎬</h1>
      <SearchBar />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem", color: "#ff1c1c" }}>
          No se encontraron películas...
        </p>
      )}
    </div>
  );
}

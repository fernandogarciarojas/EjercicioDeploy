import { useState, useEffect } from "react";
import { useMovies } from "../context/MoviesContext";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { setMovies, searchMovies } = useMovies();

  // Cada vez que el usuario escribe, actualiza la lista
  useEffect(() => {
    const filtered = searchMovies(query);
    setMovies(filtered);
  }, [query]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "250px",
          borderRadius: "8px",
          border: "2px solid #3b4cca",
        }}
      />
    </div>
  );
}

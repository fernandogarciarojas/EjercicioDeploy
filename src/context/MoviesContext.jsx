import { createContext, useContext, useState } from "react";
import moviesData from "../data/movies.json";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(moviesData);

  const searchMovies = (query) => {
    if (!query) return moviesData;
    return moviesData.filter((m) =>
      m.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <MoviesContext.Provider value={{ movies, setMovies, searchMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => useContext(MoviesContext);

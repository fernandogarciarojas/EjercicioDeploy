import { useParams } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";

export default function Detail() {
  const { id } = useParams();
  const { movies } = useMovies();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Pelicula no encontrada</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
    </div>
  );
}

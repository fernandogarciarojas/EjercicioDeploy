import { useParams, Link } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";

export default function MovieDetail() {
  const { id } = useParams();
  const { movies } = useMovies();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Película no encontrada</p>;

  return (
    <div className="page-container">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} style={{ width: "300px", borderRadius: "10px" }} />
      <p style={{ marginTop: "1rem" }}>{movie.description}</p>
      <Link to="/">
        <button style={{ marginTop: "2rem" }}>Volver a Home</button>
      </Link>
    </div>
  );
}

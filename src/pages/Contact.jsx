export default function Contact() {
  return (
    <div className="page-container">
      <h1>Contacto Pokémon 📨</h1>
      <p style={{ textAlign: "center", marginBottom: "1rem" }}>
        Envíanos tus sugerencias de películas Pokémon.
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "0 auto",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("¡Gracias por tu sugerencia!");
        }}
      >
        <input
          type="text"
          placeholder="Tu nombre"
          required
          style={{
            padding: "0.5rem",
            borderRadius: "10px",
            border: "2px solid #3b4cca",
            fontFamily: "inherit",
          }}
        />
        <input
          type="email"
          placeholder="Tu correo"
          required
          style={{
            padding: "0.5rem",
            borderRadius: "10px",
            border: "2px solid #3b4cca",
            fontFamily: "inherit",
          }}
        />
        <textarea
          placeholder="Tu mensaje"
          rows="4"
          required
          style={{
            padding: "0.5rem",
            borderRadius: "10px",
            border: "2px solid #3b4cca",
            fontFamily: "inherit",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#ff1c1c",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontFamily: "inherit",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

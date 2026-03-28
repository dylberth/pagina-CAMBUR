export default function Banner() {
  return (
    <section style={{
      height: "80vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      color: "#fff"
    }}>
      <div style={{
        background: "rgba(0,0,0,0.6)",
        padding: "40px",
        width: "100%"
      }}>
        {/* badges */}
        <div style={{ marginBottom: "20px" }}>
          <span style={{
            background: "#1e3a8a",
            padding: "8px 12px",
            borderRadius: "20px",
            marginRight: "10px"
          }}>
            Jardim Guedala, São Paulo
          </span>

          <span style={{
            background: "#1e3a8a",
            padding: "8px 12px",
            borderRadius: "20px"
          }}>
            Estação Morumbi a 7 min
          </span>
        </div>

        {/* título */}
        <h1 style={{ fontSize: "48px", margin: "10px 0" }}>
          Vista Jd. Guedala
        </h1>

        <h3 style={{ color: "#38bdf8" }}>
          Mais que um endereço. Um novo estilo de vida.
        </h3>

        <p style={{ maxWidth: "500px" }}>
          Viva a poucos passos do metrô em um projeto que une design moderno,
          lazer completo e conveniência.
        </p>

        {/* botões */}
        <div style={{ marginTop: "20px" }}>
          <button style={{
            background: "#ef4444",
            border: "none",
            padding: "12px 20px",
            color: "#fff",
            borderRadius: "20px",
            marginRight: "10px"
          }}>
            Agendar Visita
          </button>

          <button style={{
            background: "transparent",
            border: "2px solid #fff",
            padding: "12px 20px",
            color: "#fff",
            borderRadius: "20px"
          }}>
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
}
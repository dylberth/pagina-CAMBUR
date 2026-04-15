import Header from "@/app/Components/Header";
import Banner from "@/app/Components/Banner";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <Header />
      <Banner />

      <div
        style={{
          display: "flex",
          gap: 10,
          padding: 20,
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Residencial
        </button>
        <button
          style={{
            padding: "10px 18px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Estúdios
        </button>
        <button
          style={{
            padding: "10px 18px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Apartamentos
        </button>
        <button
          style={{
            padding: "10px 18px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Fachada
        </button>
      </div>
    </main>
  );
}

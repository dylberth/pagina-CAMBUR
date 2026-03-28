import Header from "@/app/Components/Header";
import Banner from "@/app/Components/Banner";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />

      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "20px"
        }}
      >
        <button style={{ background: "red", color: "white" }}>
          Residencial
        </button>
        <button>Studios</button>
        <button>Apartamentos</button>
        <button>Fachada</button>
      </div>

    </main>
  );
}
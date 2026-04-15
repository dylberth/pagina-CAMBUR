import Header from "@/app/Components/Header";
import Banner from "@/app/Components/Banner";

export default function Home() {
  return (
    <main className="p-5">
      <Header />
      <Banner />

      <div className="category-buttons animate-fade-in-up delay-500">
        <button className="btn-primary hover-glow">
          Residencial
        </button>
        <button className="btn-outline hover-lift">
          Estúdios
        </button>
        <button className="btn-outline hover-lift">
          Apartamentos
        </button>
        <button className="btn-outline hover-lift">
          Fachada
        </button>
      </div>
    </main>
  );
}

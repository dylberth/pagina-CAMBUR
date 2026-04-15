export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-overlay animate-fade-in-up">
        {/* badges */}
        <div className="mb-5 animate-slide-in-left delay-200">
          <span className="banner-badge mr-2.5 hover-lift">
            Jardim Guedala, São Paulo
          </span>
          <span className="banner-badge hover-lift">
            Estação Morumbi a 7 min
          </span>
        </div>

        {/* título */}
        <h1 className="banner-title animate-slide-in-right delay-300">
          Vista Jd. Guedala
        </h1>

        <h3 className="banner-subtitle animate-slide-in-left delay-500">
          Mais que um endereço. Um novo estilo de vida.
        </h3>

        <p className="banner-description animate-fade-in-up delay-500">
          Viva a poucos passos do metrô em um projeto que une design moderno,
          lazer completo e conveniência.
        </p>

        {/* botões */}
        <div className="mt-5 animate-fade-in-up delay-500">
          <button className="btn-primary mr-2.5 hover-glow">
            Agendar Visita
          </button>
          <button className="btn-secondary hover-glow">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
}
export default function Banner() {
  return (
    <section className="h-[80vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6')] flex items-center text-white">
      <div className="bg-black bg-opacity-60 p-10 w-full">
        {/* badges */}
        <div className="mb-5">
          <span className="bg-blue-800 px-3 py-2 rounded-full mr-2.5">
            Jardim Guedala, São Paulo
          </span>
          <span className="bg-blue-800 px-3 py-2 rounded-full">
            Estação Morumbi a 7 min
          </span>
        </div>

        {/* título */}
        <h1 className="text-5xl my-2.5">
          Vista Jd. Guedala
        </h1>

        <h3 className="text-sky-400">
          Mais que um endereço. Um novo estilo de vida.
        </h3>

        <p className="max-w-[500px]">
          Viva a poucos passos do metrô em um projeto que une design moderno,
          lazer completo e conveniência.
        </p>

        {/* botões */}
        <div className="mt-5">
          <button className="bg-red-500 border-none px-5 py-3 text-white rounded-full mr-2.5 hover:bg-red-600 transition-colors">
            Agendar Visita
          </button>
          <button className="bg-transparent border-2 border-white px-5 py-3 text-white rounded-full hover:bg-white hover:bg-opacity-10 transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
}
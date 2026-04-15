import Header from "@/app/Components/Header";
import Banner from "@/app/Components/Banner";

export default function Home() {
  return (
    <main className="p-5">
      <Header />
      <Banner />

      <div className="flex gap-2.5 p-5 flex-wrap">
        <button className="bg-red-500 text-white border-none px-4.5 py-2.5 rounded-md cursor-pointer hover:bg-red-600 transition-colors">
          Residencial
        </button>
        <button className="px-4.5 py-2.5 rounded-md cursor-pointer border border-gray-300 hover:bg-gray-50 transition-colors">
          Estúdios
        </button>
        <button className="px-4.5 py-2.5 rounded-md cursor-pointer border border-gray-300 hover:bg-gray-50 transition-colors">
          Apartamentos
        </button>
        <button className="px-4.5 py-2.5 rounded-md cursor-pointer border border-gray-300 hover:bg-gray-50 transition-colors">
          Fachada
        </button>
      </div>
    </main>
  );
}

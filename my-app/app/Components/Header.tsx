export default function Header() {
  return (
    <>
      {/* Topo vermelho */}
      <div className="bg-gradient-to-r from-red-800 to-red-600 text-white px-5 py-2.5 flex justify-end items-center gap-5 text-sm">
        <span className="flex items-center gap-1.5">
          📞 (11) 3079-4979
        </span>
        <span className="flex items-center gap-1.5">
          ✉ atendimento@empresa.com
        </span>
        <a
          href="https://api.whatsapp.com/send/?phone=5511970721959&text&type=phone_number&app_absent=0"
          target="_blank"
          className="flex items-center"
        >
          🟢
        </a>
      </div>

      {/* Navbar */}
      <header className="bg-gradient-to-b from-gray-100 to-white px-3.75 py-3.75 flex justify-between items-center">
        <h2 className="text-red-800">CAMBUR</h2>
        <div className="text-2xl">☰</div>
      </header>
    </>
  );
}
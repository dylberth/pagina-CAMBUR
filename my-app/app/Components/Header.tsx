export default function Header() {
  return (
    <>
      {/* Topo vermelho */}
      <div className="header-top animate-fade-in-up">
        <span className="flex items-center gap-1.5">
          📞 (11) 3079-4979
        </span>
        <span className="flex items-center gap-1.5">
          ✉ atendimento@empresa.com
        </span>
        <a
          href="https://api.whatsapp.com/send/?phone=5511970721959&text&type=phone_number&app_absent=0"
          target="_blank"
          className="flex items-center hover-lift"
        >
          🟢
        </a>
      </div>

      {/* Navbar */}
      <header className="header-nav animate-slide-in-left delay-100">
        <h2 className="text-red-800 font-bold text-xl">CAMBUR</h2>
        <div className="text-2xl cursor-pointer hover:text-red-600 transition-colors">☰</div>
      </header>
    </>
  );
}
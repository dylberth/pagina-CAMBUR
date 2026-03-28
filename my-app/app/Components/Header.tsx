export default function Header() {
  return (
    <>
      {/* Topo vermelho */}
    <div
  style={{
    background: "linear-gradient(to right, #8B2C2C, #b32525)",
    color: "#ffffff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "flex-end", 
    alignItems: "center",
    gap: "20px",
    fontSize: "14px"
  }}
>
  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    📞 (11) 3079-4979
  </span>

  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    ✉ atendimento@empresa.com
  </span>

  <a
    href="https://api.whatsapp.com/send/?phone=5511970721959&text&type=phone_number&app_absent=0"
    target="_blank"
    style={{ display: "flex", alignItems: "center" }}
  >
    🟢
  </a>
</div>
     {/* Navbar */}
      <header style={{
        background: "linear-gradient(to bottom, #e9e2e2, #ffffff)",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#8B2C2C" }}>CAMBUR</h2>
        <div style={{ fontSize: "24px" }}>☰</div>
      </header>
    </>
  );
}
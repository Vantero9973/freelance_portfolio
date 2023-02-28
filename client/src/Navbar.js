export default function Navbar() {
  return (
    <nav
      style={{
        width: "100vw",
        height: "8vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        backgroundColor: "#1c1c1e",
      }}
    >
      <div style={{ padding: "10px" }}>
        <a
          href="/"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          Vantero Web Dev
        </a>
      </div>
      <div style={{ padding: "10px" }}>
        <a
          href="/"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

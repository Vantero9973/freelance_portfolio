export default function Footer() {
  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          background: "#2c2c2e",
          minHeight: "10vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <a href="/">Growth Tips</a>
        <a href="/">About Me</a>
        <a href="/">Contact Me</a>
      </div>
      <div style={{ textAlign: "center", padding: "2vh" }}>
        © Alex Van Vleet
      </div>
    </div>
  );
}

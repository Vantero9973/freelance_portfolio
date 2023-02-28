import denver from "./media/denver.jpg";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${denver})`,
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        width: "100vw",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px black",
        }}
      >
        I help local Denver businesses get more customers
      </p>
    </div>
  );
}

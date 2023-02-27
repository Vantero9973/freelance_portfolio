import denver from "./media/denver.jpg";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${denver})`,
        objectFit: "cover",
        width: "100vw",
        height: "50vh",
      }}
    >
      I help local Denver businesses get more customers.
    </div>
  );
}

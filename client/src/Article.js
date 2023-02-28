import smallBusinessBlogPhoto from "./media/denver_small_business_blog.jpg";

export default function Article() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10vw",
        minHeight: "50vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={smallBusinessBlogPhoto}
          alt="How Small Businesses in Denver Can Create an Online Presence"
          style={{
            height: "300px",
            width: "500px",
            objectFit: "cover",
            borderRadius: "5%",
          }}
        />
        <p style={{ color: "white" }}>
          How Small Businesses in Denver Can Create an Online Presence
        </p>
      </div>
      <button
        style={{
          width: "175px",
          height: "50px",
          fontSize: "20px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        Read the Article
      </button>
    </div>
  );
}

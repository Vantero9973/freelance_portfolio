export default function Project() {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        padding: "5vh",
      }}
    >
      <p style={{ textAlign: "center" }}>Some of my work:</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "25vw", textAlign: "center" }}>
          <p>
            "Lorem ipsum blah blah blah testimonial stuff Lorem ipsum blah blah
            blah testimonial stuff Lorem ipsum blah blah blah testimonial stuff"
          </p>
        </div>
        <div style={{ maxWidth: "25vw", textAlign: "center" }}>
          <p>
            "Lorem ipsum blah blah blah testimonial stuff Lorem ipsum blah blah
            blah testimonial stuff Lorem ipsum blah blah blah testimonial stuff"
          </p>
        </div>
      </div>
      <div
        style={{
          color: "white",
          background: "#2c2c2e",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ width: "250px", height: "150px", background: "white" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ width: "250px", height: "150px", background: "white" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ width: "250px", height: "150px", background: "white" }}
          />
        </div>
      </div>
    </div>
  );
}

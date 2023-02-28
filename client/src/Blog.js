import seoBlogPhoto from "./media/seo_blog.jpg";
import googleAdsBlogPhoto from "./media/google_ads_blog.jpg";
import webDesignBlogPhoto from "./media/web_design_blog.png";

export default function Blog() {
  return (
    <div
      style={{
        color: "white",
        background: "#1c1c1e",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <p style={{ textAlign: "center" }}>
        This is how I can help you get more customers
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <a
          href="https://dev.to/vantero/what-is-seo-and-why-do-you-need-it-2nj2"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={seoBlogPhoto}
            alt="What is SEO and Why Do You Need It?"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5%",
            }}
          />
          <p style={{ maxWidth: "250px", textAlign: "center", margin: "2vh" }}>
            What is SEO and Why Do You Need It?
          </p>
        </a>
        <a
          href="https://dev.to/vantero/what-is-web-design-and-why-do-you-need-it-4nja"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={webDesignBlogPhoto}
            alt="What is Web Design and Why Do You Need It?"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5%",
            }}
          />
          <p style={{ maxWidth: "250px", textAlign: "center", margin: "2vh" }}>
            What is Web Design and Why Do You Need It?
          </p>
        </a>
        <a
          href="https://dev.to/vantero/what-is-google-ads-and-how-can-it-help-your-small-business-grow-4eep"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--y7XED3UC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j79lwqekvxw89alfj8tb.jpg"
            alt="What is Google Ads and How Can It Help Your Small Business Grow?"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5%",
            }}
          />
          <p style={{ maxWidth: "250px", textAlign: "center", margin: "2vh" }}>
            What is Google Ads and How Can It Help Your Small Business Grow?
          </p>
        </a>
      </div>
    </div>
  );
}

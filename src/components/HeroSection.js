import "./HeroSection.css";

function HeroSection() {
  const heroTitle =
    "We design and develop high-quality software for the modern web.";
  const heroDescription =
    "We design and develop custom software solutions for your business with a strong focus on usability, quality, and aesthetics. Our modern stack and agile team enable fast iterations with a tight feedback loop.";
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="primary-heading">{heroTitle}</h1>
          <p className="hero-description">{heroDescription}</p>
          <a href="#" className="btn btn--main mr-right">
            Get our Services
          </a>
          <a href="#" className="btn btn--secondary">
            Contact with us
          </a>
        </div>
        <div className="hero-img-box">
          <img
            src="/image/hero-img-1.jpg"
            alt="Hero image"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

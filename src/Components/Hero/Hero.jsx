import "./Hero.scss";
import HeroImage from "../../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero-parent-wrapper">
      <div className="hero-left-side">
        <div className="hero-text-wrapper">
          <h1>Martin</h1>
          <h1>Friščić</h1>
          <h3>Student, Fullstack developer, Gym Fan</h3>
          <p>Passionate developer primarily working on web projects</p>
        </div>
      </div>
      <div className="hero-right-side">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;

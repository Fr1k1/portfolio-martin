import "./Hero.scss";
import HeroImage from "../../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero-parent-wrapper">
      <div className="hero-left-side">
        <h1>Martin Friščić</h1>
        <h3>Student, Fullstack developer, Gym Fan</h3>
        <p>I enjoy programming</p>
      </div>
      <div className="hero-right-side">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;

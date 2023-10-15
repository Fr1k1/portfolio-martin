import "./NavbarDesktop.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const NavbarDesktop = () => {
  return (
    <div className="navbar-desktop-wrapper">
      <img src={Logo} alt="" />

      <nav className="desktop-navbar">
        <ul>
          <li>
            <Link to="projects" smooth={true} duration={800}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="tech-stack" smooth={true} duration={800}>
              Tech stack
            </Link>
          </li>

          <li>
            <Link to="services" smooth={true} duration={800}>
              Services
            </Link>
          </li>

          <li>
            <Link to="experience" smooth={true} duration={800}>
              Experience
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={800}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-icons-wrapper">
          <GithubLogo
            size={32}
            onClick={() => window.open("https://github.com/Fr1k1", "_blank")}
            cursor={"pointer"}
          />

          <LinkedinLogo
            size={32}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/martin-fri%C5%A1%C4%8Di%C4%87-6164ab202/",
                "_blank"
              )
            }
            cursor={"pointer"}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesktop;

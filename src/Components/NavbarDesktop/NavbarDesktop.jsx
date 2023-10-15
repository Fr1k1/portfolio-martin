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

        <GithubLogo size={32} />
        <LinkedinLogo size={32} />
      </nav>
    </div>
  );
};

export default NavbarDesktop;

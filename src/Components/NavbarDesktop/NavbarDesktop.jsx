import "./NavbarDesktop.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const NavbarDesktop = () => {
  return (
    <div className="navbar-desktop-wrapper">
      <img src={Logo} alt="" />

      <nav className="desktop-navbar">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tech-stack">Tech stack</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <GithubLogo size={32} />
        <LinkedinLogo size={32} />
      </nav>
    </div>
  );
};

export default NavbarDesktop;

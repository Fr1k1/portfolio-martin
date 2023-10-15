import { useState } from "react";
import { Link } from "react-scroll";
import { List } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react/dist/ssr";
import "./NavbarMobile.scss";

const NavbarMobile = () => {
  const [openNav, setOpenNav] = useState(false);
  const navHandler = () => {
    console.log("close");
    setOpenNav(!openNav);
  };
  const closeNav = () => {
    console.log("close");

    setOpenNav(false);
  };

  return (
    <div>
      <div className="icons">
        <List
          onClick={navHandler}
          className={openNav ? "hidden" : "iconBar"}
          size={32}
          color="white"
          style={{ cursor: "pointer" }}
        />
        <X
          onClick={navHandler}
          className={openNav ? "iconBar " : "hidden"}
          size={32}
          color="white"
          style={{ cursor: "pointer" }}
        ></X>
      </div>
      <nav className={openNav ? "nav-bar" : "hidden"} onClick={closeNav}>
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
      </nav>
    </div>
  );
};

export default NavbarMobile;

import { useState } from "react";
import { Link } from "react-router-dom";
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
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
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
      </nav>
    </div>
  );
};

export default NavbarMobile;

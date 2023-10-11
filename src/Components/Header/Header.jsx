import { useEffect, useState } from "react";
import "./Header.scss";
import NavbarDesktop from "../NavbarDesktop/NavbarDesktop";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

const Header = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="header-wrapper">
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
    </div>
  );
};

export default Header;

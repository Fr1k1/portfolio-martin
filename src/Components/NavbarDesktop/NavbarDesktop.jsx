import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollLink from "../ScrollLink/ScrollLink";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import "./NavbarDesktop.scss";

const links = [
  { label: "Projects",   to: "projects"    },
  { label: "Tech Stack", to: "tech-stack"  },
  { label: "Expertise",  to: "services"    },
  { label: "Experience", to: "experience"  },
  { label: "Contact",    to: "contact"     },
];

const NavbarDesktop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav-desktop ${scrolled ? "nav-desktop--solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <div className="nav-logo">MF.</div>

        <ul className="nav-links">
          {links.map(({ label, to }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="nav-link--active"
                className="nav-link"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="nav-socials">
          <a
            href="https://github.com/Fr1k1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="nav-icon"
          >
            <GithubLogo size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-fri%C5%A1%C4%8Di%C4%87-928bb2247/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="nav-icon"
          >
            <LinkedinLogo size={19} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarDesktop;

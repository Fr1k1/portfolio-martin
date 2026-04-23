import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import ScrollLink from "../ScrollLink/ScrollLink";
import "./NavbarMobile.scss";

const links = [
  { label: "Projects",   to: "projects"   },
  { label: "Tech Stack", to: "tech-stack" },
  { label: "Expertise",  to: "services"   },
  { label: "Experience", to: "experience" },
  { label: "Contact",    to: "contact"    },
];

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="nav-mobile-bar">
        <div className="nav-mobile-logo">MF.</div>
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <ul className="nav-mobile-links">
              {links.map(({ label, to }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                >
                  <ScrollLink
                    to={to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={close}
                    className="nav-mobile-link"
                  >
                    <span className="link-num">0{i + 1}</span>
                    {label}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="nav-mobile-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <a
                href="https://github.com/Fr1k1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                onClick={close}
              >
                <GithubLogo size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-fri%C5%A1%C4%8Di%C4%87-928bb2247/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                onClick={close}
              >
                <LinkedinLogo size={22} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;

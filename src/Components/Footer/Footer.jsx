import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner content-wrapper">
        <div className="footer-logo">MF.</div>

        <p className="footer-copy">
          Martin Friščić · {new Date().getFullYear()}
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/Fr1k1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubLogo size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-fri%C5%A1%C4%8Di%C4%87-928bb2247/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinLogo size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

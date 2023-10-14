import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import "./Footer.scss";

const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

const Footer = () => {
  return (
    <div className="footer-parent-wrapper">
      <div className="footer-inner">
        <div className="footer-text-wrapper">
          <h3>Martin Friščić, {getCurrentYear()} </h3>
          <h3>Back to top</h3>
        </div>

        <div className="footer-icons-wrapper">
          <GithubLogo size={64} />
          <LinkedinLogo size={64} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
        </div>

        <div className="footer-icons-wrapper">
          <GithubLogo
            size={64}
            onClick={() => window.open("https://github.com/Fr1k1", "_blank")}
            cursor={"pointer"}
          />
          <LinkedinLogo
            size={64}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/martin-fri%C5%A1%C4%8Di%C4%87-6164ab202/",
                "_blank"
              )
            }
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

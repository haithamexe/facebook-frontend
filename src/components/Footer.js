import { langs, links } from "./footerArrays";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-box">
        <div className="footer-content">
          <div className="footer-content-langs">
            {langs.map((lang, index) => (
              <Link key={index} to="/">
                {lang}
              </Link>
            ))}
            <button>+</button>
          </div>
          <div className="footer-content-links">
            {links.map((link, index) => (
              <Link key={index} to="/">
                {link}
                {link === "AdChoices" && <i className="adChoices_icon"></i>}
              </Link>
            ))}
          </div>
          <p>Haitham &copy; 2023</p>
        </div>
      </section>
    </>
  );
};

export default Footer;

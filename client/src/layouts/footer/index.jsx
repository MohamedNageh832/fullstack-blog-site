import { Link } from "react-router-dom";
import "./styles.css";
import { Container } from "../../components";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <Link className="footer__logo" to="/">
          Logo
        </Link>

        <span className="footer__small">
          Developed by{" "}
          <a href="" target="_blank">
            Mohamed Nageh
          </a>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;

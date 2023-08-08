import { Link } from "react-router-dom";
import "./styles.css";
import { Button, Container } from "../../components";

const navLinks = [
  {
    to: "/?category=Art",
    text: "Art",
  },
  {
    to: "/?category=Technology",
    text: "Technology",
  },
  {
    to: "/?category=Science",
    text: "Science",
  },
  {
    to: "/?category=Food",
    text: "Food",
  },
  {
    to: "/?category=Design",
    text: "Design",
  },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <Container className="navbar__container">
        <Link to="/" className="navbar__logo">
          Logo
        </Link>

        <nav className="navbar__nav">
          {navLinks.map((link, i) => (
            <Link key={`navLink-${i}`} to={link.to} className="navbar__link">
              {link.text}
            </Link>
          ))}

          <span className="navbar__user">Ultra</span>
          <Link to="/auth/login">Logout</Link>
          <Link to="/blogs/create">
            <Button color="green" variant="outline">
              Create Blog
            </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

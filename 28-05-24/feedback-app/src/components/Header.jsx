import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Header({
  text = "Default Header",
  bgColor = "#202142",
  textColor = "#000000",
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "#ff6a95" }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

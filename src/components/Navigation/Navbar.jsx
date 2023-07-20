import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const loc = useLocation().pathname;
  return (
    <nav className="flex justify-between navbar">
      <Link to="/" className={loc === "/" ? "chosen" : ""}>
        Traduction
      </Link>
      <Link to="/Contexte" className={loc === "/Contexte" ? "chosen" : ""}>
        Contexte
      </Link>
      <Link
        to="/Conjugaison"
        className={loc === "/Conjugaison" ? "chosen" : ""}
      >
        Conjugaison
      </Link>
    </nav>
  );
}

export default Navbar;

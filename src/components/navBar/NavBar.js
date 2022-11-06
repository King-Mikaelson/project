import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

function NavBar() {
  const [isNavOpen, setIsNavopen] = useState(false);
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <h1>Alucard</h1>
      </div>
      {isNavOpen ? (
        <AiOutlineClose
          className="hamburger"
          onClick={() => setIsNavopen((prevValue) => !prevValue)}
          size={25}
        ></AiOutlineClose>
      ) : (
        <HiOutlineMenuAlt2
          className="hamburger"
          onClick={() => setIsNavopen((prevValue) => !prevValue)}
          size={25}
        />
      )}
      <div
        className={isNavOpen ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li onClick={() => setIsNavopen(false)}>
            <Link className="navigation__tags" to="/">
              Home
            </Link>
          </li>

          <li onClick={() => setIsNavopen(false)}>
            <Link className="navigation__tags" to="/aboutus">
              About Us
            </Link>
          </li>
        

          <li>
            <Link className="navigation__tags" to="/repo" onClick={() => setIsNavopen(false)}>
              My Github Repo
            </Link>
          </li>
          <li>
            <Link className="navigation__tags border" to="/error" onClick={() => setIsNavopen(false)}>
              Error Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

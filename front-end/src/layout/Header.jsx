import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Tissatout.png";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      {/*-- #masthead --*/}
      <div className="header__masthead">
        <div className="header__masthead__social">
          <a href="">
            <FaFacebook size={30} />
          </a>
          <a href="">
            <FaXTwitter size={30} />
          </a>
          <a href="">
            <FaPinterest size={30} />
          </a>
        </div>
        <nav className="header__masthead__nav-main">
          <div className="header__masthead__nav-main__logo">
            <img src={Logo} style={{ width: "180px" }} alt="Logo Tissatout" />
          </div>
          <h1 className="header__masthead__nav-main__title">Tissatout</h1>
          <form
            className="header__masthead__nav-main__input"
            action="#"
            method="get"
          >
            <input type="text" name="Rechercher" placeholder="Rechercher" />
            <button type="submit">
              <span>
                <FaMagnifyingGlass size={20} />
              </span>
            </button>
          </form>
        </nav>
      </div>
      {/*-- #sub-masthead --*/}
      <div className="header__sub-masthead">
        <nav className="header__sub-masthead__nav">
          <div className="header__sub-masthead__nav__container">
            <ul className="header__sub-masthead__nav__container__navbar">
              <li className="header__sub-masthead__nav__container__navbar-menu">
                <NavLink exact="true" to="#" onClick={handleClick}>
                  Title
                </NavLink>
              </li>
              <li className="header__sub-masthead__nav__container__navbar-menu">
                <NavLink exact="true" to="#" onClick={handleClick}>
                  Title
                </NavLink>
              </li>
              <li className="header__sub-masthead__nav__container__navbar-menu">
                <NavLink exact="true" to="#" onClick={handleClick}>
                  Title
                </NavLink>
              </li>
              <li className="header__sub-masthead__nav__container__navbar-menu">
                <NavLink exact="true" to="#" onClick={handleClick}>
                  Title
                </NavLink>
              </li>
              <li className="header__sub-masthead__nav__container__navbar-menu">
                <NavLink exact="true" to="#" onClick={handleClick}>
                  Title
                </NavLink>
              </li>
              <li className="header__sub-masthead__nav__container__navbar-menu">
                <NavLink exact="true" to="#" onClick={handleClick}>
                  Title
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;

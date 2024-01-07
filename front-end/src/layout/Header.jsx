import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "../assets/Tissatout.png";

function Header() {
  return (
    <header>
      <div className="header__content">
        <div className="header__content__social">
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
        <div className="header__content__nav-main">
          <div className="header__content__nav-main__logo">
            <img src={Logo} style={{ width: "180px" }} alt="Logo Tissatout" />
          </div>
          <h1 className="header__content__nav-main__title">Tissatout</h1>
          <form
            className="header__content__nav-main__input"
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
        </div>
      </div>
    </header>
  );
}
export default Header;

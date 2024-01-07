import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  return (
    <header>
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
    </header>
  );
}
export default Header;

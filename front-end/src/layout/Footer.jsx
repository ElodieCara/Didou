import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="container__footer__social">
        <Link to="/facebook">
          <FaFacebook size={30} />
        </Link>
        <Link to="/instagram">
          <FaInstagram size={30} />
        </Link>
        <Link to="/pinterest">
          <FaPinterest size={30} />
        </Link>
      </div>
      <div className="container__footer__legacy">
        <p>Copyright</p>
        <p> Cookie | Modifier les cookies | Charte utilisateur</p>
      </div>
      <div className="container__footer__information">
        <div className="container__footer__information__navigation">
          <ul className="container__footer__information__navigation--liens">
            <h3>Liens Utiles</h3>
            <li>Contact</li>
            <li>Politique de confidentialité</li>
            <li>Mentions légales</li>
          </ul>
          <ul className="container__footer__information__navigation--liens">
            <h3>Informations</h3>
            <li>Qui suis-je ?</li>
            <li>Blog</li>
            <li>Testimonials</li>
          </ul>
          <ul className="container__footer__information__navigation--liens">
            <h3>Avec vous !</h3>
            <li>Remarques ?</li>
            <li>Vos Idées !</li>
            <li>Partenaires ?</li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import { sections } from "../data/home.js";

const Overview = () => {
  const [content, setContent] = useState(sections[0].title);
  // const [backgroundColor, setBackgroundColor] = useState(sections[0].color);
  // const [panelImage, setPanelImage] = useState(sections[0].buttonImage); // Nouvel état pour l'image du panneau
  const [cardImage, setCardImage] = useState(sections[0].imageCard); // Nouvel état pour l'image du panneau

  const handleSidebarClick = (section) => {
    setContent(section.title);
    // setBackgroundColor(section.color);
    // setPanelImage(section.buttonImage); // Met à jour l'image du panneau
    setCardImage(section.imageCard);
  };
  return (
    <div className="container__section">
      <div className="container__section__card-1">
        <ul className="container__section__card-1__sidebar">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`container__section__card-1__sidebar__button container__section__card-1__sidebar__button--${section.title
                .replace(/\s+/g, "")
                .toLowerCase()}`}
              style={{
                backgroundColor: section.color,
                backgroundImage: `url(${section.buttonImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
                backgroundPosition: "right bottom",
              }}
              onClick={() => handleSidebarClick(section)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="container__section__card-2">
        <div className="container__section__card-2__content-panel">
          <div className="container__section__card-2__content-panel__text">
            <h3>{content}</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              {content}
            </p>
          </div>
          <div
            className="container__section__card-2__content-panel__img"
            style={{
              backgroundImage: `url(${cardImage})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

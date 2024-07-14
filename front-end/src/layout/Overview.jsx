import { useState } from "react";

const Overview = () => {
  const [content, setContent] = useState("Tout-petits");

  const handleSidebarClick = (newContent) => {
    setContent(newContent);
  };
  return (
    <div className="container__section">
      <div className="container__section__card-1">
        <ul className="container__section__card-1__sidebar">
          <li
            className="container__section__card-1__sidebar__button container__section__card-1__sidebar__button--tp"
            onClick={() => handleSidebarClick("Tout-petits")}
          >
            Tout-petits
          </li>
          <li
            className="container__section__card-1__sidebar__button container__section__card-1__sidebar__button--d3"
            onClick={() => handleSidebarClick("Dès 3 ans")}
          >
            Dès 3 ans
          </li>
          <li
            className="container__section__card-1__sidebar__button container__section__card-1__sidebar__button--d6"
            onClick={() => handleSidebarClick("Dès 6 ans")}
          >
            Dès 6 ans
          </li>
          <li
            className="container__section__card-1__sidebar__button container__section__card-1__sidebar__button--d8"
            onClick={() => handleSidebarClick("Dès 8 ans")}
          >
            Dès 8 ans
          </li>
        </ul>
      </div>
      <div className="container__section__card-2">
        <div className="container__section__card-2__content-panel">
          <h3>{content}</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{content}
          </p>
          <div className="container__section__card-2__content-panel__img"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

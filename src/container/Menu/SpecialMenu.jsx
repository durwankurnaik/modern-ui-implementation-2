import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, idx) => (
            <MenuItem
              key={idx + wine.title}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            >
              {wine.title}
            </MenuItem>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, idx) => (
            <MenuItem
              key={idx + cocktail.title}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            >
              {cocktail.title}
            </MenuItem>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;

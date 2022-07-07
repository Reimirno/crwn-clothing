import React from "react";
import MENU_DATA from "../../data/menu.data";
import MenuItem from "../menu-item/menu-item";
import "./menu-directory.scss";

class MenuDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: MENU_DATA,
    };
  }
  render() {
    return (
      <div className="menu-directory">
        {this.state.sections.map(({ id, ...other }) => (
          <MenuItem key={id} {...other} desc="SHOP NOW" />
        ))}
      </div>
    );
  }
}

export default MenuDirectory;

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item";
import "./menu-directory.scss";

const MenuDirectory = ({ sections }) => (
  <div className="menu-directory">
    {sections.map(({ id, ...other }) => (
      <MenuItem key={id} {...other} desc="SHOP NOW" />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(MenuDirectory);

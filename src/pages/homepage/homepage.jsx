import MenuDirectory from "../../components/menu-directory/menu-directory";
//import "./homepage.scss";
import { HomePageContainerDiv } from "./homepage.styles";

const Homepage = () => {
  return (
    // <div className="homepage">
    //   <MenuDirectory />
    // </div>
    <HomePageContainerDiv>
      <MenuDirectory />
    </HomePageContainerDiv>
  );
};

export default Homepage;

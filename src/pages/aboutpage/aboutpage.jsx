import withRouter from "../../utilities/withRouter";
import "./aboutpage.scss";
import { Link } from "react-router-dom";

const AboutPage = ({ router }) => {
  console.log(router);
  return (
    <div>
      <nav>
        <Link to="..">Home Page</Link>
      </nav>
      <h1>About</h1>
    </div>
  );
};

export default withRouter(AboutPage);

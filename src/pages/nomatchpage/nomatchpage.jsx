import withRouter from "../../utilities/withRouter";
import "./nomatchpage.scss";

const NoMatchPage = ({ router }) => {
  console.log(router);
  return (
    <div>
      <h1>404</h1>
      <button onClick={() => router.navigate("/")}>Main Page</button>
    </div>
  );
};

export default withRouter(NoMatchPage);

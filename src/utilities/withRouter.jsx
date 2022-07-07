import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate(); //use to be useHistory
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};
export default withRouter;

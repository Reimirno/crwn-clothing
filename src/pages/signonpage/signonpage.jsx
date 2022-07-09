import SignIn from "../../components/signin-signup/signin";
import SignUp from "../../components/signin-signup/signup";
import "./signonpage.scss";

const SignOnPage = () => {
  return (
    <div>
      <h1>Sign in and Sign up</h1>
      <div className="signon-board">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default SignOnPage;

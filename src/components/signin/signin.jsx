import React from "react";
import FormInput from "../form-input/form-input";
import GeneralButton from "../general-button/general-button";
import "./signin.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    let { value, name } = event.target;
    console.log(value + " " + name);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span className="title">Sign in with your email and password</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <GeneralButton type="submit"> Sign In </GeneralButton>
          <GeneralButton onClick={signInWithGoogle}>
            {" "}
            Sign In with Google{" "}
          </GeneralButton>
          {/* <input type="submit" value="Submit Form" /> */}
        </form>
      </div>
    );
  }
}

export default SignIn;

import React from "react";
import {
  auth,
  createUserEmailAccount,
  updateUserProfileName,
} from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import GeneralButton from "../general-button/general-button";
import "./signin-signup.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const userCred = await createUserEmailAccount(auth, email, password);
      await updateUserProfileName(userCred.user, displayName);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signin">
        <h2>I do not have an account</h2>
        <span className="title">Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            label="Username"
            required
          />

          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <div className="sign-in-buttons">
            <GeneralButton type="submit"> Sign Up </GeneralButton>
          </div>

          {/* <input type="submit" value="Submit Form" /> */}
        </form>
      </div>
    );
  }
}

export default SignUp;

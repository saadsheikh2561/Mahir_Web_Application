import React from "react";
import "./styles/WorkerSignup.css";
import NavBar from "./NavBarLogin&SignUp.js";
import axios from "axios";

class WorkerSignUp extends React.Component {
  state = {
    fName: "",
    lName: "",
    dob: "",
    pNumber: "",
    domain: "",
    services: "",
    hNo: "",
    street: "",
    sector: "",
    city: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  updateFirstName = (e) => {
    this.setState({ fName: e.target.value });
  };

  updateLastName = (e) => {
    this.setState({ lName: e.target.value });
  };
  updateDate = (e) => {
    this.setState({ dob: e.target.value });
  };
  updatePhoneNumber = (e) => {
    this.setState({ pNumber: e.target.value });
  };
  updateDomain = (e) => {
    this.setState({ domain: e.target.value });
  };
  updateServices = (e) => {
    this.setState({ services: e.target.value });
  };
  updateHnumber = (e) => {
    this.setState({ hNo: e.target.value });
  };
  updateStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  updateSector = (e) => {
    this.setState({ sector: e.target.value });
  };
  updateCity = (e) => {
    this.setState({ city: e.target.value });
  };
  updateUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  updateConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    // perform checks
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password does not match");
    } else if (this.state.password.length < 4) {
      alert("Password must have atleast 4 characters");
    } else {
      // create worker object

      const worker = {
        username: this.state.username,
        fname: this.state.fName,
        lname: this.state.lName,
        dob: this.state.dob,
        pNumber: this.state.pNumber,
        domain: this.state.domain,
        services: this.state.services,
        hNo: this.state.hNo,
        street: this.state.street,
        sector: this.state.sector,
        city: this.state.city,
        password: this.state.password,
        banned: false,
      };

      // send object to backend
      console.log(worker);

      try {
        await axios
          .post("http://localhost:3001/worker/add", worker)
          .then((res) => {
            console.log(res.data);
          });
        alert("Sign up was successful");
      } catch (e) {
        console.log(e.response);

        alert("this worker already exists or Error has occurred");
      }
    }
  };

  render() {
    return (
      <div className="background-div">
        <NavBar />
        <div className="center-div">
          <form onSubmit={this.onSubmit}>
            <div className="signup">
              <h1>Sign Up</h1>
            </div>
            <div className="inner-center">
              <div>
                <h3>First Name:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="First Name"
                  required
                  value={this.state.fName}
                  onChange={this.updateFirstName}
                />
                <h3>Last Names:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={this.state.lName}
                  onChange={this.updateLastName}
                />
                <h3>Date of Birth:</h3>
                <input
                  className="signup-textfield"
                  type="date"
                  placeholder="Date"
                  required
                  value={this.state.dob}
                  onChange={this.updateDate}
                />
                <h3>Phone Number:</h3>
                <input
                  className="signup-textfield"
                  type="number"
                  placeholder="Phone Number"
                  required
                  value={this.state.pNumber}
                  onChange={this.updatePhoneNumber}
                />
                <h3>Choose your domain:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="Domain"
                  required
                  value={this.state.domain}
                  onChange={this.updateDomain}
                />
                <h3>Services you will provide:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="Services"
                  required
                  value={this.state.services}
                  onChange={this.updateServices}
                />
                <h3>House no./Unit:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="House no./Unit"
                  required
                  value={this.state.hNo}
                  onChange={this.updateHnumber}
                />
                <h3>Street:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="Street"
                  required
                  value={this.state.street}
                  onChange={this.updateStreet}
                />
                <h3>Sector/Area:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="Sector/Area"
                  required
                  value={this.state.sector}
                  onChange={this.updateSector}
                />
                <h3>City:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="City"
                  required
                  value={this.state.city}
                  onChange={this.updateCity}
                />
                <h3>Username:</h3>
                <input
                  className="signup-textfield"
                  type="text"
                  placeholder="Username"
                  required
                  value={this.state.username}
                  onChange={this.updateUsername}
                />
                <h3>Password:</h3>
                <input
                  className="signup-textfield"
                  type="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.updatePassword}
                />
                <h3>Confirm Password:</h3>
                <input
                  className="signup-textfield"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={this.state.confirmPassword}
                  onChange={this.updateConfirmPassword}
                />
                <button className="submit-button " type="submit">
                  Submit
                </button>
                {/* <input className="submit-button " type="submit"  /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default WorkerSignUp;

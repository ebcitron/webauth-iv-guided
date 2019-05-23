import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "sam",
    password: "pass"
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("this.state: ", this.state);
    //this endpoint could come from env variable
    const endPoint = "http://localhost:5000/api/auth/login";

    axios
    .post(endPoint, this.state)
    .then(res => {
        console.log('response: ', res);
        localStorage.setItem('jwt', res.data.token);

    })
    .catch(error => {
        console.error(error);
    });
};


  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              onChange={this.handleChange}
              id="username"
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              onChange={this.handleChange}
              id="password"
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;

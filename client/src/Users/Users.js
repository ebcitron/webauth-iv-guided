import React, { Component } from "react";
import axios from "axios";
import requiresAuth from "../Auth/requiresAuth";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("/users")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default requiresAuth(Users);

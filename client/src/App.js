import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Users from "./Users/Users";

function App() {
  return (
    <>
      <div>
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </div>
      <Login />
    </>
  );
}

export default App;

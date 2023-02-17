import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import NotFound from "./components/notFound";
import Dashboard from "./components/dashboard";
import UserList from "./components/userList";
import TaskList from "./components/taskList";
import AddTask from "./components/addTask";
import SideBar from "./components/sideBar";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="row">
      {/* side navbar */}
      <div className="col-md-3">
        <SideBar />
      </div>
      <div className="col-md-8">
        {/* top navbar */}
        <NavBar />
        {/* routing container */}
        <div className="container">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/userList" component={UserList} />
            <Route path="/taskList" component={TaskList} />
            <Route path="/addTask" component={AddTask} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/dashboard" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}

export default App;

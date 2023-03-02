import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/notFound";
import Dashboard from "./components/dashboard";
import UserList from "./components/userList";
import TaskList from "./components/taskList";
import AddTask from "./components/addTask";
import SideBar from "./components/sideBar";
import NavBar from "./components/navBar";
import AddUser from "./components/addUser";

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
            <Route path="/addUser" component={AddUser} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/dashboard" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
      <div className="col-md-1"></div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
      />
    </div>
  );
}

export default App;

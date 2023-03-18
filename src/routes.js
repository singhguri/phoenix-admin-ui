import {
  Route,
  BrowserRouter as Router,
  Routes as RRDRoutes,
} from "react-router-dom";
import AddTask from "./components/addTask";
import AddUser from "./components/addUser";
import ClientDashboard from "./components/clientDashboard";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import NotFound from "./components/notFound";
import TaskList from "./components/taskList";
import UserList from "./components/userList";

const Routes = () => {
  // const history = createBrowserHistory();
  return (
    <>
      <Router>
        <RRDRoutes>
          {/* <AdminRoute path="/login" exact component={Login} />
      
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/taskList" component={TaskList} />
      <Route path="/addTask" component={AddTask} />
    <Route path="/not-found" component={NotFound} /> */}

          <Route path="/" Component={Login} />
          <Route path="/addUser" exact Component={AddUser} />
          <Route path="/admin/dashboard" exact Component={Dashboard} />
          <Route path="/dashboard" exact Component={ClientDashboard} />
          <Route path="/userList" exact Component={UserList} />
          <Route path="/taskList" exact Component={TaskList} />
          <Route path="/addTask" exact Component={AddTask} />
          <Route path="/not-found" exact Component={NotFound} />
          {/* <Redirect from="/" exact to="/login" /> */}
          {/* <Redirect to="/not-found" /> */}
        </RRDRoutes>
      </Router>
    </>
  );
};

export default Routes;

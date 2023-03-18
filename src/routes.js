import {
  Route,
  BrowserRouter as Router,
  Routes as RRDRoutes,
} from "react-router-dom";
import AdminRoute from "./auth/helper/adminRoutes";
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
          <Route
            exact
            path="/addUser"
            element={
              <AdminRoute>
                <AddUser />
              </AdminRoute>
            }
          />

          <Route
            path="/addUser"
            element={
              <AdminRoute>
                <AddUser />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/userList"
            element={
              <AdminRoute>
                <UserList />
              </AdminRoute>
            }
          />
          <Route
            path="/taskList"
            element={
              <AdminRoute>
                <TaskList />
              </AdminRoute>
            }
          />
          <Route
            path="/addTask"
            element={
              <AdminRoute>
                <AddTask />
              </AdminRoute>
            }
          />

          <Route path="/" exact Component={Login} />
          <Route path="/dashboard" exact Component={ClientDashboard} />
          <Route path="/not-found" exact Component={NotFound} />
        </RRDRoutes>
      </Router>
    </>
  );
};

export default Routes;

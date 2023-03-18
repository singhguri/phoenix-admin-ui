import {
  Route,
  BrowserRouter as Router,
  Routes as RRDRoutes,
} from "react-router-dom";
import AdminRoute from "./auth/helper/adminRoutes";
import ClientRoute from "./auth/helper/clientRoutes";
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
            path="/addTask"
            element={
              <AdminRoute>
                <AddTask />
              </AdminRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ClientRoute>
                <ClientDashboard />
              </ClientRoute>
            }
          />

          <Route
            path="/taskList"
            element={
              <ClientRoute>
                <TaskList />
              </ClientRoute>
            }
          />

          <Route
            path="/not-found"
            element={
              <ClientRoute>
                <NotFound />
              </ClientRoute>
            }
          />

          <Route path="/" exact Component={Login} />
        </RRDRoutes>
      </Router>
    </>
  );
};

export default Routes;

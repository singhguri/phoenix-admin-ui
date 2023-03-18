import { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import { Roles } from "../constants/constants";

const Menu = () => {
  const history = useNavigate();
  const location = useLocation();

  const currentTab = (history, path) => {
    if (location.pathname === path) {
      return { color: "#28a745" };
    } else {
      return { color: "#FFFFFF" };
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link
            style={currentTab(history, "/")}
            className="nav-link"
            to={
              isAuthenticated()
                ? isAuthenticated().data.role === Roles.ADMIN
                  ? "/admin/dashboard"
                  : "/dashboard"
                : "/"
            }
          >
            Phoenix
          </Link>
        </li>

        {isAuthenticated() && isAuthenticated().data.role === Roles.ADMIN && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/admin/dashboard")}
                className="nav-link"
                to="/admin/dashboard"
              >
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/userList")}
                className="nav-link"
                to="/userList"
              >
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/taskList")}
                className="nav-link"
                to="/taskList"
              >
                Tasks
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && isAuthenticated().data.role === Roles.CLIENT && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/dashboard")}
                className="nav-link"
                to="/dashboard"
              >
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/taskList")}
                className="nav-link"
                to="/taskList"
              >
                Tasks
              </Link>
            </li>
          </Fragment>
        )}

        {/* {isAuthenticated() &&
          isAuthenticated().data.data.role === Roles.CLIENT && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/manager/dashboard")}
                className="nav-link"
                to="/manager/dashboard"
              >
                Manager DashBoard
              </Link>
            </li>
          )} */}
        {/* {isAuthenticated() && isAuthenticated().user.role === 2 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/doctor/dashboard")}
              className="nav-link"
              to="/doctor/dashboard"
            >
              Doctor DashBoard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 3 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              Admin DashBoard
            </Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 4 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/lab/dashboard"
            >
              Lab Attendant DashBoard
            </Link>
          </li>
        )}

        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Sign in
              </Link>
            </li>
          </Fragment>
        )}*/}

        {isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <span
                style={currentTab(history, "/signout")}
                className="nav-link text-warning clickable"
                onClick={() => {
                  signout(() => {
                    history("/");
                  });
                }}
              >
                Sign Out
              </span>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

export default Menu;

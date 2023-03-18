import { Navigate, Route } from "react-router-dom";
import { isAuthenticated } from ".";
import { Roles } from "../../constants/constants";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().user.role === Roles.ADMIN ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AdminRoute;

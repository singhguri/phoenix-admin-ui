import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from ".";
import { Roles } from "../../constants/constants";

const ClientRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().user.role === Roles.CLIENT ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default ClientRoutes;

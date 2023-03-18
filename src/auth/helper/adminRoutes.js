import { Navigate } from "react-router-dom";
import { isAuthenticated } from ".";
import { Roles } from "../../constants/constants";

const AdminRoute = ({ children }) => {
  return isAuthenticated() && isAuthenticated().data.role === Roles.ADMIN ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoute;

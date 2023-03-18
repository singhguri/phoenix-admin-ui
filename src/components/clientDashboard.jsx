import { isAuthenticated } from "../auth/helper";
import { titleCase } from "../utils/titleCase";
import Base from "./base";

const ClientDashboard = (props) => {
  const user = isAuthenticated();

  return (
    <Base
      title="Dashboard"
      description={"Welcome " + titleCase(user.data.name)}
    ></Base>
  );
};

export default ClientDashboard;

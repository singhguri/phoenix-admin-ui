import { isAuthenticated } from "../auth/helper";
import Menu from "./menu";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid bg-dark">
        <div className="jumbotron bg-dark text-white text-center">
          <p className="display-4">{title}</p>
          <p className="lead ">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      {!isAuthenticated() && (
        <footer className="footer bg-dark mt-auto py-3">
          <div className="container-fluid bg-success text-white text-center py-3">
            <h4>If you have any questions, feel free to reach out to us!</h4>
          </div>
          <div className="container text-center mt-3">
            <span className="text-muted"> Team 23</span>
          </div>
        </footer>
      )}
      {isAuthenticated() && (
        <footer className="footer bg-dark mt-auto py-3">
          <div className="container text-center">
            <span className="text-muted">Team 23</span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Base;

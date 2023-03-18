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
            <h4>If you get any questions fell free to reach out!</h4>
            <button className="btn btn-warning btn-lg">Contact Us</button>
          </div>
          <div className="container text-center">
            <span className="text-muted">Team 23</span>
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

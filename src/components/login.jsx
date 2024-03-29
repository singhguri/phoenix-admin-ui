import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate, isAuthenticated } from "../auth/helper";
import { Roles } from "../constants/constants";
import { login } from "../services/userService";
import Base from "./base";
import Loading from "./loader";

const Login = (props) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const performRedirect = () => {
    const user = isAuthenticated();

    if (user) {
      console.log(user.data.role);
      switch (user.data.role) {
        case Roles.ADMIN:
          navigate("/admin/dashboard");
          break;
        case Roles.CLIENT:
          navigate("/dashboard");
          break;
        default:
          navigate("/not-found");
          break;
      }
    }

    // if (isAuthenticated()) navigate("/");
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="row">
          <div className="offset-sm-3 col-md-6 text-left">
            <div className="alert alet-info">
              <h2>Loading...</h2>
            </div>
          </div>
        </div>
      )
    );
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    setIsLoading(true);

    await login({ email, password })
      .then((data) => {
        // console.log({ data });
        setIsLoading(false);
        if (data.data.status) {
          const res = data;
          authenticate(res.data, () => {
            setValues({ ...values, didRedirect: true });
          });
          performRedirect();
        } else {
          setValues({ ...values, error: data.data.message, loading: false });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log({ err });
      });
  };

  const signinForm = () => {
    return (
      <div className="row">
        <div className="offset-sm-3 col-md-6 text-left">
          <form action="" className="">
            <div className="form-group">
              <label className="text-light">E-mail</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group mt-2">
              <label className="text-light">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleChange("password")}
              />
            </div>
            <div className="text-center my-4">
              <button onClick={onSubmit} className="btn btn-success btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="offset-sm-3 col-md-6 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Login" description="">
      {/* {loadingMessage()} */}
      <Loading isLoading={isLoading} />
      {errorMessage()}
      {signinForm()}
      {/* {performRedirect()} */}
    </Base>
  );
};

export default Login;

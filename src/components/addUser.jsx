import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllOAuthUserById } from "../services/userService";
import Base from "./base";
import { RandomPassword } from "../utils/genPassword";
import { addAdminUser } from "../services/adminUserService";
import Loading from "./loader";

const AddUser = (props) => {
  let history = useNavigate();
  const userId = localStorage.getItem("userId");

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({});

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    // console.log(userId);
    if (userId) {
      setIsLoading(true);
      // get user from db
      getAllOAuthUserById(userId)
        .then((res) => {
          console.log({ res });
          if (res)
            if (res.data.status) {
              setUser(res.data.message);
              setIsLoading(false);
            }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [userId]);

  useEffect(() => {
    setValue("userName", user.userName);
    setValue("userDescription", user.userDesc);
  });

  const handleUserFormSubmit = (event) => {
    // console.log(event);
    let body = {
      id: RandomPassword(16),
      name: event.name,
      userName: event.email,
      family_name: event.name,
      given_name: event.name,
      email: event.email,
      password: event.password,
      isAdminUser: true,
      verified_email: true,
      role: 2,
    };

    setIsLoading(true);

    addAdminUser(body)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        toast.success("User added successfully...");
        history("/userList");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error("Some error occured...");
      });
  };

  const genRandomPassword = () => {
    setValue("password", RandomPassword(8));
  };

  return (
    <Base title="Add User" description="">
      <Loading isLoading={isLoading} />
      <form className="w-50" onSubmit={handleSubmit(handleUserFormSubmit)}>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <div className="col-md-6">
              <span className="btn btn-success" onClick={genRandomPassword}>
                Generate Password
              </span>
            </div>
          </div>
        </div>
        {/* <div className="form-group mt-3">
          <label>User Role</label>
          <div className="d-flex">
            <div className="form-check form-switch me-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isAdmin"
                name="isAdmin"
                {...register("isAdmin")}
              />
              <label className="form-check-label" htmlFor="isAdmin">
                Admin
              </label>
            </div>
          </div>
        </div> */}
        {/* <div className="form-group mt-3">
          <label>User Size</label>
          <div className="d-flex">
            <div className="form-check form-switch me-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isUserBig"
                name="isUserBig"
                {...register("isUserBig")}
              />
              <label className="form-check-label" htmlFor="isUserBig">
                Big
              </label>
            </div>
          </div>
        </div> */}
        <div className="d-flex col-6 mt-3">
          <button type="submit" className="btn btn-primary w-50 me-2">
            {userId ? "Update" : "Submit"}
          </button>
          <button
            onClick={() => reset()}
            type="button"
            className="btn btn-danger w-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </Base>
  );
};

export default AddUser;

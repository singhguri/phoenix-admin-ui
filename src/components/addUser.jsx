import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AddOAuthUsers,
  getAllOAuthUserById,
  updateOAuthUsers,
} from "../services/userService";

const AddUser = (props) => {
  let history = useHistory();
  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState({});

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    console.log(userId);
    if (userId)
      // get user from db
      getAllOAuthUserById(userId)
        .then((res) => {
          console.log({ res });
          if (res) if (res.data.status) setUser(res.data.message);
        })
        .catch((err) => console.log(err));
  }, [userId]);

  useEffect(() => {
    setValue("userName", user.userName);
    setValue("userDescription", user.userDesc);
  });

  const handleUserFormSubmit = (event) => {
    // console.log(event);
    let body = {
      userName: event.userName,
      userDesc: event.userDescription,
      userType: event.isOnline
        ? event.isOffline
          ? "both"
          : "online"
        : event.isOffline
        ? "offline"
        : "none",
      userTiming: event.userTiming,
      userSize: event.isUserBig ? "big" : "small",
    };

    if (userId) {
      // update case
      updateOAuthUsers(body, userId)
        .then((res) => {
          console.log(res);
          toast.success("User updated successfully...");
          history.replace("/userList");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Some error occured...");
        });
    } else {
      // add case
      AddOAuthUsers(body)
        .then((res) => {
          console.log(res);
          toast.success("User added successfully...");
          history.replace("/userList");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Some error occured...");
        });
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <form className="" onSubmit={handleSubmit(handleUserFormSubmit)}>
        <div className="form-group mt-3">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            placeholder="User Name"
            {...register("userName")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="userDescription">User Description</label>
          <textarea
            className="form-control"
            placeholder="User Description"
            id="userDescription"
            name="userDescription"
            {...register("userDescription")}
            rows="3"
          ></textarea>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="userTiming">Duration in seconds</label>
          <input
            className="form-control"
            type="number"
            id="userTiming"
            name="userTiming"
            {...register("userTiming")}
          />
        </div>
        <div className="form-group mt-3">
          <label>User type</label>
          <div className="d-flex">
            <div className="form-check form-switch me-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isOnline"
                name="isOnline"
                {...register("isOnline")}
              />
              <label className="form-check-label" htmlFor="isOnline">
                Online
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isOffline"
                name="isOffline"
                {...register("isOffline")}
              />
              <label className="form-check-label" htmlFor="isOffline">
                Offline
              </label>
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
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
        </div>
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
    </div>
  );
};

export default AddUser;

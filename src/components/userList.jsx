import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Base from "./base";
import {
  deleteAdminUsers,
  getAllAdminUsers,
} from "../services/adminUserService";
import { isAuthenticated } from "../auth/helper";
import { Roles } from "../constants/constants";
import Loading from "./loader";

const UserList = (props) => {
  let history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const user = isAuthenticated();

  useEffect(() => {
    if (!user || user.data.role !== Roles.ADMIN) history("/");
    setIsLoading(true);

    getAllAdminUsers()
      .then((res) => {
        console.log(res);
        if (res)
          if (res.data.status) {
            setUsers(res.data.message);
            setIsLoading(false);
          }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("userId", id);
    history("/addUser");
  };

  const handleDelete = async (id) => {
    await deleteAdminUsers(id)
      .then((res) => {
        if (res.data.status) {
          setUsers(users.filter((user) => user.id !== id));
          toast.success("User deleted successfully...");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleNavigate = () => {
    localStorage.removeItem("userId");
    history("/addUser");
  };

  return (
    <Base title="Users" description="">
      <Loading isLoading={isLoading} />
      <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={handleNavigate}
          className="btn btn-primary btn-sm"
          type="button"
        >
          Create User
        </button>
      </div>
      <table className="table text-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Created On</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th>{index + 1}</th>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdminUser
                  ? user.role === 1
                    ? "Super Admin"
                    : "Client"
                  : "Game User"}
              </td>
              <td>{user.createdAt.replace("T", " ").split(".")[0]}</td>
              <td>
                {user.isActive ? (
                  <span className="badge text-bg-success">Active</span>
                ) : (
                  <span className="badge text-bg-danger">In-Active</span>
                )}
              </td>
              <td style={{ paddingTop: 0 }}>
                <div className="d-flex">
                  <button
                    style={{ display: "none" }}
                    onClick={() => handleEdit(user.id)}
                    className="btn btn-primary me-2"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className={`btn btn-danger me-2 ${
                      user.id === "1" ? "d-none" : ""
                    }`}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Base>
  );
};

export default UserList;

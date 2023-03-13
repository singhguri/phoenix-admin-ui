import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteOAuthUsers, getAllOAuthUsers } from "../services/userService";

const UserList = (props) => {
  let history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllOAuthUsers()
      .then((res) => {
        console.log(res);
        if (res)
          if (res.data.status) {
            setUsers(res.data.message);
            localStorage.removeItem("userId");
          }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("userId", id);
    history.replace("/addUser");
  };

  const handleDelete = async (id) => {
    await deleteOAuthUsers(id)
      .then((res) => {
        if (res.data.status) {
          setUsers(users.filter((user) => user.id !== id));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created On</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table">
          {users.map((user, index) => (
            <tr key={user.id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
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
                    onClick={() => handleEdit(user.id)}
                    className="btn btn-primary me-2"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger me-2"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

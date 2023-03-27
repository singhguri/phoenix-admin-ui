import { useEffect, useState } from "react";
import {
  deleteFrTaskById,
  deleteTaskById,
  getAllTasks,
} from "../services/taskService";
import { useNavigate } from "react-router-dom";
import Base from "./base";

const TaskList = (props) => {
  let history = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        if (res)
          if (res.data.status) {
            const data = res.data.message;
            // setTasks(data);
            setTasks(data.filter((d) => d.lang === "en"));
          }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("taskId", id);
    history("/addTask");
  };

  const handleDelete = async (id, lang) => {
    if (lang === "en")
      await deleteTaskById(id)
        .then((res) => {
          if (res.data.status) {
            setTasks(tasks.filter((task) => task._id !== id));
          }
        })
        .catch((err) => console.log(err));
    else if (lang === "fr")
      await deleteFrTaskById(id)
        .then((res) => {
          if (res.data.status) {
            setTasks(tasks.filter((task) => task._id !== id));
          }
        })
        .catch((err) => console.log(err));
  };

  const handleNavigate = () => {
    localStorage.removeItem("taskId");
    history("/addTask");
  };

  return (
    <Base title="Tasks" description="">
      <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={handleNavigate}
          className="btn btn-primary btn-sm"
          type="button"
        >
          Create Task
        </button>
      </div>
      <table className="table text-light">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Task Name</th>
            <th scope="col">Task Language</th>
            <th scope="col">Task Timing</th>
            <th scope="col">Task Type</th>
            <th scope="col">Task Size</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <th>{index + 1}</th>
              <td>{task.taskName}</td>
              <td>{task.lang === "en" ? "English" : "French"}</td>
              <td>{task.taskTiming} sec</td>
              <td>{task.taskType}</td>
              <td>{task.taskSize}</td>
              <td>
                <div className="d-flex">
                  <button
                    type="button"
                    onClick={() => handleEdit(task._id)}
                    className="btn btn-info btn-sm me-2"
                  >
                    <i className="fa fa-edit" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(task._id, task.lang)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa fa-trash" />
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

export default TaskList;

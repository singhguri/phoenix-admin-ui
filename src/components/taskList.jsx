import { useEffect, useState } from "react";
import { getTasksByUser } from "../services/taskService";
import { useNavigate } from "react-router-dom";
import Base from "./base";
import { isAuthenticated } from "../auth/helper";
import { deleteAdminTaskById } from "../services/adminUserService";
import Loading from "./loader";

const TaskList = (props) => {
  let history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [allTasks, setAllTasks] = useState([]);

  const [tasks, setTasks] = useState([]);
  const [taskLang, setTaskLang] = useState("en");

  const user = isAuthenticated();

  useEffect(() => {
    // get user based tasks
    setIsLoading(true);
    getTasksByUser(user.data.id)
      .then((res) => {
        if (res)
          if (res.data.status) {
            const data = res.data.message;
            setAllTasks(data);
            setTasks(data.filter((d) => d.lang === taskLang));
            setIsLoading(false);
          }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("taskId", id);
    localStorage.setItem("taskLang", taskLang);
    history("/addTask");
  };

  const handleDelete = async (id, lang) => {
    await deleteAdminTaskById(id, user.data.id, lang)
      .then((res) => {
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNavigate = () => {
    localStorage.removeItem("taskId");
    history("/addTask");
  };

  const toggleTaskLang = (taskLang) => {
    setTaskLang(taskLang);
    setTasks(allTasks.filter((d) => d.lang === taskLang));
  };

  return (
    <Base title="Tasks" description="">
      <Loading isLoading={isLoading} />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          onClick={handleNavigate}
          className="btn btn-primary btn-sm"
          type="button"
        >
          Create Task
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <ul className="nav">
          <li className="nav-item me-2">
            <span className={`me-2`}>Tasks:</span>
          </li>
          <li className="nav-item me-2" onClick={() => toggleTaskLang("en")}>
            <span
              className={`clickable ${taskLang === "en" ? "text-primary" : ""}`}
            >
              English
            </span>
          </li>
          <li className="nav-item" onClick={() => toggleTaskLang("fr")}>
            <span
              className={`clickable ${taskLang === "fr" ? "text-primary" : ""}`}
            >
              French
            </span>
          </li>
        </ul>
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

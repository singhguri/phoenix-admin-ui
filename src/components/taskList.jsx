import { useEffect, useState } from "react";
import { deleteTaskById, getAllTasks } from "../services/taskService";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        console.log({ res });
        if (res.data.status) setTasks(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {};

  const handleDelete = async (id) => {
    await deleteTaskById(id)
      .then((res) => {
        if (res.data.status) {
          setTasks(tasks.filter((task) => task._id !== id));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Task List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Task</th>
            <th scope="col">Task Type</th>
            <th scope="col">Task Timing (in min)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <th>{index + 1}</th>
              <td>{task.taskName}</td>
              <td>{task.taskType}</td>
              <td>{task.taskTiming}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleEdit(task._id)}
                  className="btn btn-info btn-sm me-2"
                >
                  <i className="fa fa-pencil me-2" />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(task._id)}
                  className="btn btn-danger btn-sm"
                >
                  <i className="fa fa-trash me-2" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-primary btn-sm" type="button">
          Create Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;

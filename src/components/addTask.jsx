import { addTask, getTaskById, updateTask } from "../services/taskService";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Base from "./base";
import { isAuthenticated } from "../auth/helper";

const AddTask = (props) => {
  const user = isAuthenticated();

  let history = useNavigate();
  const taskId = localStorage.getItem("taskId");

  const [task, setTask] = useState({});

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (taskId)
      // get task from db
      getTaskById(taskId)
        .then((res) => {
          if (res) if (res.data.status) setTask(res.data.message);
        })
        .catch((err) => console.log(err));
  }, [taskId]);

  useEffect(() => {
    setValue("taskName", task.taskName);
    setValue("taskDescription", task.taskDesc);
    setValue("taskTiming", task.taskTiming);
    setValue("taskLang", task.lang);

    if (task.taskSize === "big") setValue("isTaskBig", true);
  });

  const handleTaskFormSubmit = (event) => {
    // console.log(event);
    let body = {
      taskName: event.taskName,
      taskDesc: event.taskDescription,
      taskType: "both",
      taskTiming: event.taskTiming,
      taskSize: event.isTaskBig ? "big" : "small",
      lang: event.taskLang,
      taskAddUserId: user.data.id,
    };

    if (taskId) {
      // update case
      updateTask(body, taskId)
        .then((res) => {
          console.log(res);
          toast.success("Task updated successfully...");
          history("/taskList");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Some error occured...");
        });
    } else {
      // add case
      addTask(body)
        .then((res) => {
          console.log(res);
          toast.success("Task added successfully...");
          history("/taskList");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Some error occured...");
        });
    }
  };

  const cancelForm = () => {
    reset();
    history("/taskList");
  };

  return (
    <Base title="Add Task" description="">
      <form className="w-50" onSubmit={handleSubmit(handleTaskFormSubmit)}>
        <div className="form-group mt-3">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            name="taskName"
            placeholder="Task Name"
            {...register("taskName")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="taskDescription">Task Description</label>
          <textarea
            className="form-control"
            placeholder="Task Description"
            id="taskDescription"
            name="taskDescription"
            {...register("taskDescription")}
            rows="3"
          ></textarea>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="taskTiming">Duration in seconds</label>
          <input
            className="form-control"
            type="number"
            id="taskTiming"
            name="taskTiming"
            placeholder="Duration"
            {...register("taskTiming")}
          />
        </div>
        {/* <div className="form-group mt-3">
          <label>Task type</label>
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
        </div> */}
        <div className="form-group mt-3">
          <label>Task Size</label>
          <div className="d-flex">
            <div className="form-check form-switch me-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isTaskBig"
                name="isTaskBig"
                {...register("isTaskBig")}
              />
              <label className="form-check-label" htmlFor="isTaskBig">
                Big
              </label>
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <label>Task Language</label>
          <div className="d-flex">
            <select
              id="taskLang"
              name="taskLang"
              {...register("taskLang")}
              className="form-select"
              aria-label="Default select example"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
            {/* <div className="form-check form-switch me-2">
              <label className="form-check-label" htmlFor="taskLang">
                English
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="taskLang"
                name="taskLang"
                {...register("taskLang")}
              />
              <label className="form-check-label" htmlFor="taskLang">
                French
              </label>
            </div> */}
          </div>
        </div>
        <div className="d-flex col-6 mt-3">
          <button type="submit" className="btn btn-primary w-50 me-2">
            {taskId ? "Update" : "Submit"}
          </button>
          <button
            onClick={cancelForm}
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

export default AddTask;

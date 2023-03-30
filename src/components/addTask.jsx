import { addTask, getTaskById, updateTask } from "../services/taskService";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Base from "./base";
import { isAuthenticated } from "../auth/helper";
import Loading from "./loader";

const AddTask = (props) => {
  let history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const user = isAuthenticated();

  const taskId = localStorage.getItem("taskId");
  const taskLang = localStorage.getItem("taskLang");

  const [task, setTask] = useState({});

  const [isBig, setIsBig] = useState(false);

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (taskId) {
      setIsLoading(true);
      // get task from db
      getTaskById(taskId, taskLang)
        .then((res) => {
          if (res)
            if (res.data.status) {
              setTask(res.data.message);
              setIsLoading(false);
            }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [taskId]);

  useEffect(() => {
    if (taskId) {
      setValue("taskName", task.taskName);
      setValue("taskDescription", task.taskDesc);
      setValue("taskTiming", task.taskTiming);
      setValue("taskLang", task.lang);

      if (task.taskSize === "big") {
        setValue("isTaskBig", true);
        // setIsBig(true);
      }
    } else {
      setValue("taskLang", "en");
      setValue("isTaskBig", false);
    }
  });

  const handleTaskFormSubmit = (event) => {
    // console.log(event);
    let body = {
      taskName: event.taskName,
      taskDesc: event.taskDescription,
      taskType: "both",
      taskTiming: event.taskTiming ?? 0,
      taskSize: event.isTaskBig ? "big" : "small",
      lang: event.taskLang,
      taskAddUserId: user.data.id,
    };

    if (taskId) {
      setIsLoading(true);
      // update case
      updateTask(body, taskId, taskLang)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          toast.success("Task updated successfully...");
          history("/taskList");
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Some error occured...");
        });
    } else {
      setIsLoading(true);
      // add case
      addTask(body)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          toast.success("Task added successfully...");
          history("/taskList");
        })
        .catch((err) => {
          setIsLoading(false);
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
    <Base title={taskId ? "Edit Task" : "Add Task"} description="">
      <Loading isLoading={isLoading} />
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
            disabled={taskId}
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
            disabled={isBig}
          />
        </div>
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
                onChange={() => setIsBig(!isBig)}
              />
              <label className="form-check-label" htmlFor="isTaskBig">
                Big
              </label>
            </div>
          </div>
        </div>
        <div className={`form-group mt-3 ${taskId ? "d-none" : ""}`}>
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

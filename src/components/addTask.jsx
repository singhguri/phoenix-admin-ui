const AddTask = (props) => {
  return (
    <div>
      <h1>Add Task</h1>
      <form>
        <div className="form-group">
          <label for="Taskname">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="Taskname"
            placeholder="Add your task here"
          />
        </div>
        <div className="form-group">
          <label for="Description of the task">Task Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Duration in Seconds</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
            <option>55</option>
            <option>60</option>
          </select>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="button" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;

const AddTask = (props) => {
  return (
    <div>
      <h1>Add Task</h1>
      <form>
        <div class="form-group">
          <label for="Taskname">Task Name</label>
          <input type="text" class="form-control" id="Taskname" placeholder="Add youre task here"/>
        </div>
        <div class="form-group">
          <label for="Description of the task">Task Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Duration in Seconds</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
            <option>55</option>
            <option>60</option>
          </select>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-primary">Submit</button>
          <button type="button" class="btn btn-danger">Cancel</button>

        </div>
          

        
        
        
        
      </form>


    </div>
    

  );
};

export default AddTask;

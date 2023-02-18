
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TaskList = (props) => {
  return (
    
    
    <div>
      <h1>Task List</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Task</th>
      <th scope="col">Type Of Task</th>
      <th scope="col">Level Of Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>task1</td>
      <td>online</td>
      <td>offline</td>
      <td><button type="button" class="btn btn-info btn-sm"><FontAwesomeIcon icon="fa-regular fa-pen-to-square" />Edit </button>
      <button type="button" class="btn btn-danger btn-sm"><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</button>
      </td>
    </tr>
   
  </tbody>
  </table>
  <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary btn-sm" type="button">Create Task</button>
</div>
    </div>
    
  );
};

export default TaskList;

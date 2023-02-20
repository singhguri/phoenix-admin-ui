const UserList = (props) => {
  return (
    <div>
      
      <h1>User List</h1>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Eamil</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="table">
          <tr>
            <th scope="row">1</th>
            <td>MarkOtto</td>
            <td>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select user type</option>
                  <option value="1">Admin</option>
                  <option value="2">User</option>
                </select>
            </td>
            <td>@mdo</td>
            <td>
                <a href="#" class="view" title="View" data-toggle="tooltip"><i class="fa fa-eye"></i></a>
                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="fa fa-edit"></i></a>
                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></a>
            </td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
              <td>
                <select class="form-select" aria-label="Default select example">
                <option selected>Select user type</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
                </select>
              </td>
            <td>@fat</td>
            <td>
                <a href="#" class="view" title="View" data-toggle="tooltip"><i class="fa fa-eye"></i></a>
                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="fa fa-edit"></i></a>
                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry  Bird</td>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select user type</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
            </td>
             
            <td>@twitter</td>
            
            <td>
                <a href="#" class="view" title="View" data-toggle="tooltip"><i class="fa fa-eye"></i></a>
                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="fa fa-edit"></i></a>
                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
        <div class="clearfix">
          <div class="hint-text">Page <b>1</b> of <b>25</b></div>
          <ul class="pagination">
            <li class="page-item"><a href="#" class="page-link">Previous</a></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><a href="#" class="page-link">3</a></li>
            <li class="page-item"><a href="#" class="page-link">4</a></li>
            <li class="page-item"><a href="#" class="page-link">5</a></li>
            <li class="page-item"><a href="#" class="page-link">Next</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserList;

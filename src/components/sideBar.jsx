const SideBar = (props) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px" }}
      bis_skin_checked="1"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32"></svg>
        <span className="fs-4">Phoenix logo</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Dashboard
          </a>
        </li>
        <li className="nav-item active">
          <a href="/userList" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Users
          </a>
        </li>
        <li>
          <a href="/taskList" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Tasks
          </a>
        </li>
        <li>
          <a href="/addTask" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Add Task
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

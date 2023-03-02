const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row justify-content-between">
        <div className="card text-bg-primary mb-3 me-4">
          <div className="card-header">Total User</div>
          <div className="card-body">
            <h5 className="card-title">User Number</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card text-bg-secondary mb-3">
          <div className="card-header">Online User</div>
          <div className="card-body">
            <h5 className="card-title">Current User Logged In:</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card text-bg-success mb-3">
          <div className="card-header">In App Currency</div>
          <div className="card-body">
            <h5 className="card-title">Total Coins purchased</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card text-bg-danger mb-3">
          <div className="card-header">In App Currency</div>
          <div className="card-body">
            <h5 className="card-title">Total Coins Spent</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card text-bg-warning mb-3">
          <div className="card-header">Tasks</div>
          <div className="card-body">
            <h5 className="card-title">Total Tasks Created</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card text-bg-info mb-3">
          <div className="card-header">Online Task</div>
          <div className="card-body">
            <h5 className="card-title">Task which can be play online</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card text-bg-light mb-3">
          <div className="card-header">Offline Task</div>
          <div className="card-body">
            <h5 className="card-title">Task which can be play offline</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Tasks Level</div>
          <div className="card-body">
            <h5 className="card-title">Levels Of Task</h5>
            <p className="card-text">
              No. Of Easy task: 100 <br />
              No. Of Medium task: 100 <br />
              No. Of Hard task: 100 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

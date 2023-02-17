const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body"># of Users</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body"># of Tasks</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

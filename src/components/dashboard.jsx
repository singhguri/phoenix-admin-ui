const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div class="row row-cols-1 row-cols-md-2 g-5">
      <div class="card text-bg-primary mb-3 " >
  <div class="card-header">Total User</div>
  <div class="card-body">
    <h5 class="card-title">User Number</h5>
    <p class="card-text">100</p>
  </div>
</div>
<div class="card text-bg-secondary mb-3" >
  <div class="card-header">Online User</div>
  <div class="card-body">
    <h5 class="card-title">Current User Logged In:</h5>
    <p class="card-text">100</p>
  </div>
</div>
<div class="card text-bg-success mb-3" >
  <div class="card-header">In App Currency</div>
  <div class="card-body">
    <h5 class="card-title">Total Coins purchased</h5>
    <p class="card-text">100</p>
  </div>
</div>
<div class="card text-bg-danger mb-3" >
  <div class="card-header">In App Currency</div>
  <div class="card-body">
    <h5 class="card-title">Total Coins Spent</h5>
    <p class="card-text">100</p>
  </div>
</div>
<div class="card text-bg-warning mb-3" >
  <div class="card-header">Tasks</div>
  <div class="card-body">
    <h5 class="card-title">Total Tasks Created</h5>
    <p class="card-text">100</p>
  </div>
</div>
<div class="card text-bg-info mb-3" >
  <div class="card-header">Online Task</div>
  <div class="card-body">
    <h5 class="card-title">Task which can be play online</h5>
    <p class="card-text">100</p>
  </div>
</div>
<div class="card text-bg-light mb-3" >
  <div class="card-header">Offline Task</div>
  <div class="card-body">
    <h5 class="card-title">Task which can be play offline</h5>
    <p class="card-text">100</p>
  </div>
</div>
<div class="card text-bg-dark mb-3" >
  <div class="card-header">Tasks Level</div>
  <div class="card-body">
    <h5 class="card-title">Levels Of Task</h5>
    <p class="card-text">No. Of Easy task: 100 <br/>
    No. Of Medium task: 100 <br/>
    No. Of Hard task: 100 <br/></p>
  </div>
</div>
   </div> 
   </div>  
      
  );
};

export default Dashboard;

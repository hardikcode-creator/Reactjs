function Addtask(){
return (
<div class='container'>
<div class="row kg-row">
      <div class="col-4">
        <input type="text" placeholder="Enter task here"></input>
      </div>
      <div class="col-4">
        <input type="date"></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success kg-button" >
          Add
        </button>
      </div>
    </div>
</div>
);

}
export default  Addtask;
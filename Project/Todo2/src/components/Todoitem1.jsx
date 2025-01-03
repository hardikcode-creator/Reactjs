function Todoitem({name,date, handleDelete}){
  
   
    return (
        <div class="container">
        <div class="row kg-row">
        <div class="col-4">
         {name}
        </div>
        <div class="col-4">
        {date}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button"
          onClick={()=>handleDelete(name,date)}>
            Delete
          </button>
        </div>
      </div>
      </div>


    );

}
export default Todoitem;
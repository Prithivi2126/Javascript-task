let array=[];
let editvalue;
let object={};
function add(){
  let task = document.getElementById("task").value;
 

  if (task == "") {
    document.getElementById("task_req").innerHTML = "task required**";
  } else {
    document.getElementById("task_req").innerHTML = "";
  }
  
  if (
    task == "") {
    return false;
  }
  insert();

  document.getElementById("task").value= ""
  
}
  function insert(){
    let task = document.getElementById("task").value;
    let object = { task};
    console.log(object);
    
    if(editvalue!=undefined){
      array[editvalue].task= object.task;
     
    }
    else{
      array.push(object);

    }
   
  list();

  }

  function list(){
  editvalue= undefined;
  let k=""
  for( i = 0; i < array.length; i++){
    k += "<ul>"
    k += "<li>" + array[i].task + "  "+ '<button type="button" class="btn btn-primary" onclick= "edit('+ i +')">Edit</button>  <button type="button" class="btn btn-danger" onclick= "Delete('+ i +')">Delete</button>' + "</li>";
    k += "</ul>"
  }
  document.getElementById("listdata").innerHTML = k;
}

function edit(id){
  editvalue = id;
  console.log(editvalue)
  document.getElementById("task").value= array[id].task;
}
function Delete(id){
  array.splice(id, 1);
  console.log(id);
  list();
}

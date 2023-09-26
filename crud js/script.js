let array=[];
let editvalue;
let obj={};
function submit(){
  let name = document.getElementById("name").value;
  let Password = document.getElementById("Password").value;

  if (name == "") {
    document.getElementById("name_req").innerHTML = "Name required**";
  } else {
    document.getElementById("name_req").innerHTML = "";
  }
  if (Password == "") {
    document.getElementById("pwd_req").innerHTML = "password required**";
  } else {
    document.getElementById("pwd_req").innerHTML = "";
  }
  if (
    name == "",
    Password == "" ) {
    return false;
  }
  insert();

  document.getElementById("name").value= ""
  document.getElementById("Password").value= ""
}
  function insert(){
    let name = document.getElementById("name").value;
    let Password = document.getElementById("Password").value;
    let object = { name , Password};
    console.log(object);
    
    if(editvalue!=undefined){
      array[editvalue].name= object.name;
      array[editvalue].Password= object.Password;
    }
    else{
      array.push(object);

    }
   
  table();

  }

  function table(){
  
  let k=""
  for( i = 0; i < array.length; i++){
    k += "<tr>"
    k += "<td>" + array[i].name + "</td>"
    k += "<td>" + array[i].Password + "</td>"
    k += '<td> <button type="button" class="btn btn-primary" onclick= "edit('+ i +')">Edit</button>   <button type="button" class="btn btn-danger" onclick= "Delete('+ i +')">Delete</button></td>';
    k += "</tr>"
  }
  document.getElementById("tabledata").innerHTML = k;
}

function edit(id){
  editvalue = id;
  console.log(editvalue)
  document.getElementById("name").value= array[id].name;
  document.getElementById("Password").value= array[id].Password;
}
function Delete(id){
  array.splice(id, 1);
  console.log(id);
  table();
}

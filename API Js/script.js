
let array=[];
let editvalue;
let object={};
window.onload=()=>{
  edit();
}
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
    name == ""||
    Password == "" ) {
    return false;
  }
  let object = { name , Password};
  if (editvalue != undefined) {
    console.log(editvalue);
    array[editvalue].name = document.getElementById("name").value;
    array[editvalue].Password = document.getElementById("Password").value;
    editvalue= undefined;
  } else {
    array.push(object);
  }
  console.log(editvalue);

  localStorage.setItem("array", JSON.stringify(array));
  window.location.replace(`list.html`);
}

  function edit() {
      var url_string=window.location.href.toLocaleLowerCase();
      var url=new URL(url_string)
      var id=url.searchParams.get("id")
      editvalue = id;
      array = JSON.parse(localStorage.getItem("array")) || [];
      console.log(editvalue);
      if(id){
        document.getElementById("name").value = array[id].name;
        document.getElementById("Password").value = array[id].Password;
      }
  }
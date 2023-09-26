let array = [];
let editvalue;
let object = {};
window.onload = () => {
  table();
};

function table(){
  array = JSON.parse(localStorage.getItem("array")) || [];

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
  

function edit(id) {
    window.location.href = "index.html?id=" + id;
}
function back(){
  window.location.replace('index.html');
}

function Delete(id) {
    array.splice(id, 1);
    console.log(id);
    localStorage.setItem("array", JSON.stringify(array));
    table();
}

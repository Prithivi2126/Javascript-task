window.onload = () => {
    table();
  };
  let teacher = [];
  let editvalue;
  let teacherDetails= {};
  
  
  async function table(){
    let url = "https://650abed7dfd73d1fab08cefd.mockapi.io/teacher";
      await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((Result) => Result.json())
        .then((res) => {
          console.log(res);
          teacher = res;
          console.log(teacher);
        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
  
      let k=""
      for( i = 0; i < teacher.length; i++){
        k += "<tr>"
        k += "<td>" + teacher[i].name + "</td>"
        k += "<td>" + teacher[i].email + "</td>"
        k += "<td>" + teacher[i].number + "</td>"
        k += "<td>" + teacher[i].password+ "</td>"
        k += "<td>" + teacher[i].c_password+ "</td>"
        k += "<td>" + teacher[i].gender+ "</td>"
        k += "<td>" + teacher[i].language+ "</td>"
        k += "<td>" + teacher[i].date+ "</td>"
        k += '<td> <button type="button" class="btn btn-primary" onclick= "edit('+ teacher[i].id +')">Edit</button>   <button type="button" class="btn btn-danger" onclick= "Delete('+ teacher[i].id +')">Delete</button></td>';
        k += "</tr>"
      }
      document.getElementById("tabledata").innerHTML = k;
    }
  
    
  
  function edit(id) {
      editvalue = id;
      window.location.href = "teacher_details.html?id=" + id;
  }
  function back(){
    window.location.replace('card.html');
  }
  function add(){
    window.location.replace('teacher_details.html');
  }
  
  function Delete(id) {
    let url ="https://650abed7dfd73d1fab08cefd.mockapi.io/teacher" ;
    fetch(url + "/" + id , {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        table();
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  
  
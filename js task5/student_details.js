let student=[];
let editvalue;
let studentDetails={};
window.onload=()=>{
  edit();
}
function male(){
  let male= document.getElementById("male").checked
  if(male===true){
    document.getElementById("female").checked=false
  }
}
function female(){
  let female= document.getElementById("female").checked
  if(female===true){
    document.getElementById("male").checked=false
  }
}
function submit(){
    let name=document.getElementById("name").value;
    console.log(name);
    let email=document.getElementById("email").value;
    console.log(email)
    let number=document.getElementById("number").value;
    console.log(number);
    let password=document.getElementById("password").value;
    console.log(password);
    let c_password=document.getElementById("c_password").value;
    console.log(c_password);
    let gender_value = document.querySelector('input[name="gender"]:checked');
    let gender;
    if(gender_value){
      gender=gender_value.value
   }
    let language=document.getElementById("language").value;
    console.log(language);
    let date=document.getElementById("date").value;
    console.log(date);
     let hasError = false;

    if(name.length<3){
        document.getElementById("name_req").innerHTML = "Name required**";
        document.getElementById("name").style.border="2px solid red"
        hasError = true;
    }else{
        document.getElementById("name_req").innerHTML = "";
        document.getElementById("name").style.border="2px solid green"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById("email_req").innerHTML = "Email required**";
        document.getElementById("email").style.border="2px solid red"
        hasError = true;
    }else{
        document.getElementById("email_req").innerHTML = "";
        document.getElementById("email").style.border="2px solid green"
    }
    if(number.length===10){
      document.getElementById("num_req").innerHTML = "";
      document.getElementById("number").style.border="2px solid green"
      
  }else{
      document.getElementById("num_req").innerHTML = "Number required**";
      document.getElementById("number").style.border="2px solid red"
      hasError = true;
  }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if(!passwordRegex.test(password)){
        document.getElementById("password_req").innerHTML = "Password required**";
        document.getElementById("password").style.border="2px solid red"
        hasError = true;
    }else{
        document.getElementById("password_req").innerHTML = "";
        document.getElementById("password").style.border="2px solid green"
    }
    if(password!==c_password){
        document.getElementById("c_password_req").innerHTML = "C-password required**";
        document.getElementById("c_password").style.border="2px solid red"
        hasError = true;
    }else{
        document.getElementById("c_password_req").innerHTML = ""; 
        document.getElementById("c_password").style.border="2px solid green"
      }
      if (gender===""||gender===undefined||gender===null) {
        document.getElementById("gender_req").innerHTML = "Gender required**";
        hasError = true;
      } else {
        document.getElementById("gender_req").innerHTML="";
      }
     if(language===""){
      document.getElementById("lang_req").innerHTML="language required**";
      document.getElementById("language").style.border="2px solid red"
      hasError = true;
     }else{
      document.getElementById("lang_req").innerHTML="";
      document.getElementById("language").style.border="2px solid green"
     }
      if (date == "") {
        document.getElementById("dob_req").innerHTML = "date required**";
        document.getElementById("date").style.border="2px solid red"
        hasError = true;
      } else {
        document.getElementById("dob_req").innerHTML = "";
        document.getElementById("date").style.border="2px solid green"
      }
      if (
        hasError
         ) {
        return false;
      }
      let studentDetails = { name , email, number, password, gender, c_password, language, date};
      if (editvalue != undefined) {
        let url =  "https://650abed7dfd73d1fab08cefd.mockapi.io/student";
        fetch(url + "/" + editvalue, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(studentDetails),
        })
          .then((Result) => Result.json())
          .then((string) => {
            console.log(string);
            window.location.replace("student_list.html");
          })
          .catch((errorMsg) => {
            console.log(errorMsg);
          });
      } 
      else {
        let url = "https://650abed7dfd73d1fab08cefd.mockapi.io/student";
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(studentDetails),
        })
          .then((Result) => Result.json())
          .then((string) => {
            console.log(string);
            window.location.replace("student_list.html");
          
          })
          .catch((errorMsg) => {
            console.log(errorMsg);
       });
      }
    }
    
      function edit() {
        console.log(window);
         var url_string=window.location.href.toLocaleLowerCase();
          var url=new URL(url_string)
          var id=url.searchParams.get("id")
          editvalue = id;
          console.log(editvalue);
            if (id) {
              let url ="https://650abed7dfd73d1fab08cefd.mockapi.io/student";
              fetch(url + "/" + id, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              })
                .then((Result) => Result.json())
                .then((string) => {
                  console.log(string);
                  student = string;
            document.getElementById("name").value = student.name;
            document.getElementById("email").value = student.email;
            document.getElementById("number").value = student.number;
            document.getElementById("password").value = student.password;
            document.getElementById("c_password").value = student.c_password;
            if (student.gender === "male") {
              document.getElementById("male").checked = true;
            } else if (student.gender === "female") {
              document.getElementById("female").checked = true;
            } else {
              document.getElementById("male").checked = false;
              document.getElementById("female").checked = false;
            }
            document.getElementById("language").value = student.language;
            document.getElementById("date").value = student.date;
          
          })
          .catch((errorMsg) => {
            console.log(errorMsg);
    });
    }
    }
        
    function cancel(){
      window.location.replace('student_list.html');
    }
           

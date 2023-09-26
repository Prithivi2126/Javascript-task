let count = 0;

let number = document.getElementById("number");

function increment(){
    count++;
    console.log(count)
    number.innerText=count;
}
function decrement(){
    if(count>0){
        count--;
        console.log(count)
        number.innerText=count;
    }
}

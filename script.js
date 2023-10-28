let btnincremment= document.getElementById("incremment");
let btndicremment= document.getElementById("dicremment");
let todolist = document.getElementById("todolist")

let counter = 0;
let textt = document.getElementById("text");

function addTodoList(){
    if(textt.value === ""){
        alert("hello word")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML += textt.value;
        todolist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    textt.value = '';
    saveData();
}
todolist.addEventListener('click', function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)

function saveData(){
    localStorage.setItem("data", todolist.innerHTML)
}
let btnincremment= document.getElementById("incremment");
let btndicremment= document.getElementById("dicremment");
let todolist = document.getElementById("todolist")

let counter = 0;
let textt = document.getElementById("text");

function addTodoList(){
    if(textt.value === ""){
        alert("You Must Write Something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML += textt.value;
        todolist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    textt.value = '';
    saveData();
}
todolist.addEventListener('click', function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)

function saveData(){
    localStorage.setItem("data", todolist.innerHTML)
}
function showTask(){
    todolist.innerHTML = localStorage.getItem("data")
}
showTask()

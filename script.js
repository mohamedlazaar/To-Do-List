/*var semaine = ["lan", "mra", "mer", "jeu", "ven","sam","ddi"]

semaine.pop();
semaine.push("dim");
semaine.shift();
semaine.unshift("lun");
semaine[1]= "mar";
console.log(semaine);
console.log(semaine.length);
console.log(semaine[4])
if(semaine.includes("ven")){
    console.log(true);
}else{
    console.log(false)
}
console.log(semaine)
console.log(semaine.indexOf("dim"));
//week and weekend
var week = semaine.slice(1,4);
console.log(week);
var weekend= semaine.slice(5,7);
console.log=(weekend);

var fruits= ["Pomme", "Raisin","Banane","Kiwi"];
document.write(fruits);
var clientchoice = prompt("choose you fruit");
var indices = fruits.indexOf(clientchoice);
if(indices==-1)
    alert("indisponible");
else
    alert("ok");

document.write(indices)
*/
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
}
todolist.addEventListener('click', function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)

/*function dicremmentCounter(){
    counterl--;
    counter.innerHTML = counterl;
}*/



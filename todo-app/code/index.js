
import ("./style.css")
import {add,subtract} from "./calc"
import Myimage from "../public/logo.png"
console.log(add(5,6))
console.log(subtract(10,3))


const form = document.createElement("div")

 
const submit = document.createElement("button")

submit.textContent = "submit"

submit.addEventListener("click",cons)

const input = document.createElement("input")

input.type = "text"

form.append(input,submit)

var parent =document.getElementById("root")

var img = document.createElement("img")

img.classList.add("img")
img.src = Myimage
parent.append(img)
parent.appendChild(form)

// Creating object by caling cons(e)
function task(work){
    this.status = false;
    this.work = work;
    this.date =  new Date().toISOString().slice(0, 10)
}
function cons(){
   
 let work = input.value;
 let p = new task(work)
 domappend(p)
}
var count = document.getElementById("count")
var c = 0;
count.textContent = "Total tasks = " + c;
// function to append on dom
function domappend(p){
  let li1 = document.createElement("li");
  let toggle = document.createElement("button");
  toggle.textContent = "Toggle"
  li1.style.width = "fit-content"
  let complete = document.createElement("button");
  complete.textContent = "Done"
  let remove = document.createElement("button")
  remove.textContent = "Remove"
  li1.style.width = "fit-content"
  complete.onclick= function(){
      done(li1);
  }
  remove.onclick = function(){
      remove_task(li1);
  }
  toggle.onclick = function(){
      toggle_task(li1,p,toggle,complete,remove);
  }
  c++;
  count.textContent = "Total tasks = " + c;
  
  li1.textContent = p.work+ " Date:-"+ p.date + " Status:-" + p.status;
  li1.append(toggle,complete,remove);
  parent.append(li1);
}

// function to toggle task
 function toggle_task(li1,p,toggle,complete,remove){
     if(p.status == false){
         p.status = true;
     }else{
         p.status = false;
     }
     li1.textContent = p.work+ " Date:-"+ p.date + " Status:-" + p.status;
  li1.append(toggle,complete,remove);
 }
 function done(li1){
    li1.style.textDecoration = "line-through"
    li1.style.backgroundColor = "lightgreen"
}
function remove_task(li){
    li.remove()
    c--;
    count.textContent = "Total tasks = " + c;
}

let tasks=0;
let texting = document.getElementById("texting");
let availableTasks=document.getElementById("available-tasks");

let homeBtn=document.getElementById("home-btn");


let addTaskBtn=document.getElementById("add-btn");
let tasksList=document.querySelector("ul");

if(tasks>0){
    texting.innerText="test"
}


addTaskBtn.addEventListener("click", function(){

    texting.classList.add("texting");
    availableTasks.classList.remove("available-tasks");











    // console.log("HHHHHHHH");
    // // let newTask=document.createElement("li")
    // // newTask.innerText=`This is another method`
    // // tasksList.append(newTask)
    // tasksList.innerHTML+= `<li><p>#1</p> Task 1s <p>date</p> <span class="status"></span></li>`
})
homeBtn.addEventListener("click",function(){
    texting.classList.remove("texting");
    availableTasks.classList.add("available-tasks");
    if(tasks>0){
        texting.innerText="test"
    }
})
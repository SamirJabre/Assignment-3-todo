let tasks=0;
let texting = document.getElementById("texting");
let availableTasks=document.getElementById("available-tasks");
let submitBtn=document.getElementById("submit-btn");
let homeBtn=document.getElementById("home-btn");
let taskName=document.getElementById("task-input");
let description=document.getElementById("description");
let assign=document.getElementById("assign-task");
let date=document.getElementById("duedate");

let addTaskBtn=document.getElementById("add-btn");
let tasksList=document.querySelector("ul");

if(tasks>0){
    texting.innerText="test";
}
submitBtn.addEventListener("click",function(){
    if(taskName.value != "" && description.value!="" && date.value!=""){
        tasks++;
        console.log("all is empty");
        // let newTask=document.createElement("li")
        // newTask.innerText=taskName.value
        // tasksList.append(newTask)
        tasksList.innerHTML+= `<li><p>#${tasks}</p>${taskName.value} <br><p class="date-config">${date.value}</p> <span class="status"></span></li>`
        taskName.value="";
        description.value="";
        date.value="";
        assign.value="";
    }
})


addTaskBtn.addEventListener("click", function(){

    texting.classList.add("texting");
    availableTasks.classList.remove("available-tasks");











    // console.log("HHHHHHHH");
    // // let newTask=document.createElement("li")
    // // newTask.innerText=`This is another method`
    // // tasksList.append(newTask)
    // tasksList.innerHTML+= `<li><p>#1</p> Task 1s <p>date</p> <span class="status"></span></li>`
})

function homie(){
    texting.classList.remove("texting");
    availableTasks.classList.add("available-tasks");
    if(tasks>0){
        texting.innerText="FINISH YOUR TASKS !!"
    }
}
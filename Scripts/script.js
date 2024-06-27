let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskCounter = tasks.length;
let texting = document.getElementById("texting");
let availableTasks = document.getElementById("available-tasks");
let submitBtn = document.getElementById("submit-btn");
let homeBtn = document.getElementById("home-btn");
let taskName = document.getElementById("task-input");
let description = document.getElementById("description");
let assign = document.getElementById("assign-task");
let date = document.getElementById("duedate");
let addTaskBtn = document.getElementById("add-btn");
let tasksList = document.querySelector("ul");
if (tasks > 0) {
    texting.innerText = "FINISH YOUR TASKS !!";
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    tasksList.innerHTML = "";
    tasks.forEach((task, index) => {
        tasksList.innerHTML += `
            <li>
                <div class="cleaning">
                    <p>#${index + 1}</p>
                    <p>${task.name}</p>
                    <p class="date-config">${task.date}</p>
                    <span class="status"></span>
                </div>
                <div class="delete">
                    <p class="assigned">To: ${task.assign}</p>
                    <button class="delete-btn" id="delete-btn" data-index="${index}">DELETE</button>
                </div>
            </li>`;
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            let index = this.getAttribute("data-index");
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
    });
}

submitBtn.addEventListener("click", function() {
    if (taskName.value !== "" && description.value !== "" && date.value !== "") {
        tasks.push({
            name: taskName.value,
            description: description.value,
            assign: assign.value,
            date: date.value,
            status: false
        });
        taskCounter++;
        saveTasks();
        renderTasks();

        taskName.value = "";
        description.value = "";
        date.value = "";
        assign.value = "";
    }
});

addTaskBtn.addEventListener("click", function() {
    texting.classList.add("texting");
    availableTasks.classList.remove("available-tasks");
});

function homie() {
    texting.classList.remove("texting");
    availableTasks.classList.add("available-tasks");
    if (tasks.length > 0) {
        texting.innerText = "FINISH YOUR TASKS !!";
    }
}

renderTasks();



















































// let tasks=0;
// let texting = document.getElementById("texting");
// let availableTasks=document.getElementById("available-tasks");
// let submitBtn=document.getElementById("submit-btn");
// let homeBtn=document.getElementById("home-btn");
// let taskName=document.getElementById("task-input");
// let description=document.getElementById("description");
// let assign=document.getElementById("assign-task");
// let date=document.getElementById("duedate");
// let deleteBtn=document.getElementById("delete-btn");


// let addTaskBtn=document.getElementById("add-btn");
// let tasksList=document.querySelector("ul");

// if(tasks>0){
//     texting.innerText="test";
// }
// submitBtn.addEventListener("click",function(){
//     if(taskName.value != "" && description.value!="" && date.value!=""){
//         tasks++;
//         console.log("all is empty");
//         // let newTask=document.createElement("li")
//         // newTask.innerText=taskName.value
//         // tasksList.append(newTask)
//         tasksList.innerHTML+= `<li><div class="cleaning"><p>#${tasks}</p><p>${taskName.value}</p><p class="date-config">${date.value}</p> <span class="status"></span>
//         </div>
//         <div class="delete">
//         <p class="assigned">To : ${assign.value}</p>
//         <button id="delete-btn">DELETE</button>
//         </div>
//         </li>`
//         // `<li><p>#${tasks}</p>${taskName.value} <br><p class="date-config">${date.value}</p> <span class="status"></span></li>`
//         taskName.value="";
//         description.value="";
//         date.value="";
//         assign.value="";
//     }
// })


// addTaskBtn.addEventListener("click", function(){

//     texting.classList.add("texting");
//     availableTasks.classList.remove("available-tasks");











//     // console.log("HHHHHHHH");
//     // // let newTask=document.createElement("li")
//     // // newTask.innerText=`This is another method`
//     // // tasksList.append(newTask)
//     // tasksList.innerHTML+= `<li><p>#1</p> Task 1s <p>date</p> <span class="status"></span></li>`
// })

// function homie(){
//     texting.classList.remove("texting");
//     availableTasks.classList.add("available-tasks");
//     if(tasks>0){
//         texting.innerText="FINISH YOUR TASKS !!"
//     }
// }

// deleteBtn.addEventListener("click",function(){

// })
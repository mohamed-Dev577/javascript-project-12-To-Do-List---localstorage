let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = [];

// 🔥 تحميل البيانات من LocalStorage
let savedTasks = JSON.parse(localStorage.getItem("tasks"));

if(savedTasks){
    tasks = savedTasks;

    tasks.forEach(function(task){
        addTaskToPage(task);
    });
}

// إضافة مهمة
addBtn.onclick = function(){

    let taskText = input.value;

    if(taskText !== ""){

        tasks.push(taskText);

        // 🔥 حفظ البيانات
        localStorage.setItem("tasks", JSON.stringify(tasks));

        addTaskToPage(taskText);

        input.value = "";
    }
}

// دالة إضافة المهمة
function addTaskToPage(taskText){

    let li = document.createElement("li");
    li.textContent = taskText;

    // done
    li.onclick = function(){
        li.classList.toggle("done");
    }

    // حذف
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "حذف";

    deleteBtn.onclick = function(){
        li.remove();
    }

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
window.onload = (event)=>{
    renderTask()
}

const taskInput = document.querySelector(".task-input")
const buttonAdd = document.querySelector(".btn-add")
const htmlTaskList = document.querySelector(".list-task")
const msgError = document.querySelector(".error")

let emptyMsg = document.createElement("p")
let taskList = []

buttonAdd.addEventListener("click",()=>{
    if(taskInput.value == ""){
        msgError.textContent = "Sorry. Input Empty."
        msgError.style.display = "block"
        renderTask()
    }else if(taskList.length == 4){
        msgError.textContent = "Sorry. Limited reached."
        msgError.style.display = "block"
        renderTask()
    }else{

        msgError.style.display = "none"
        taskList.push(taskInput.value)
        taskInput.value= ""
        renderTask()
    }   
    
})

function renderTask(){
    if(taskList.length == 0){
        emptyMsg.textContent = "Empty"
        emptyMsg.classList.add("empty")
        htmlTaskList.appendChild(emptyMsg)
    }else{
        emptyMsg.remove()
        htmlTaskList.innerHTML = ""  
        taskList.forEach((item,index) =>{
            let task = document.createElement("p")
            let btnDelete = document.createElement("button")
            let containerTask = document.createElement("div")

            task.textContent = item
            btnDelete.textContent = "Delete"
            containerTask.classList.add("task")


            btnDelete.addEventListener("click",()=>{
                
                if(taskList.length == 1){
                    containerTask.remove()
                    taskList.pop()
                    renderTask()
                }else{
                    taskList.splice(index,1)
                    renderTask()
                }
                console.log(taskList.length)
            })

            containerTask.appendChild(task)
            containerTask.appendChild(btnDelete)
            htmlTaskList.append(containerTask)
        })
    }
}







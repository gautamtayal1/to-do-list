import { projects } from "./index.js";
import { ProjectDetails } from "./constructers.js";
import { TaskDetails } from "./constructers.js";
import { renderProject } from "./project-manager.js";
import { updateOptions } from "./project-manager.js";

export function displayProjectCard(){
    const cardConatiner = document.querySelector('.cards-container')
    const projectCard = document.createElement('div');
    projectCard.innerHTML = `
        <div class="project-card">
            <div class="project-navbar">
                <h2 class="task-header">Create Project</h2>
            </div>
            <form id = "project-form">
                <label for="project-title">Title</label><br>
                <input type="text" placeholder="enter title" id="project-title"><br>

                <label for="project-description">Description</label><br>
                <input type="text" placeholder="enter desciption" id="project-description"><br>
                
                <button type="submit" id="project-submit">Submit</button>
                <button type="">Cancel</button>
            </form>
        </div>
    `
    cardConatiner.appendChild(projectCard)

    const projectSubmitBtn = document.querySelector('#project-submit')
    projectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectTitle = document.querySelector('#project-title').value
        const projectDescription = document.querySelector('#project-description').value
        const project = new ProjectDetails(projectTitle, projectDescription);
        projects.push(project);
        console.log(projects);
        renderProject()
        updateOptions()
    })
}  




export function displayTaskCard(){
    const cardConatiner = document.querySelector('.cards-container')
    const taskBox = document.createElement('div');
    taskBox.innerHTML = `
    <div class="task-card">
        <div class="project-navbar">
            <h2 class="task-header">Create Task</h2>
        </div>
        <form class= "task-form">
            <label for="task-title">Title</label><br>
            <input type="text" placeholder="enter description" id="task-title"><br>

            <label for="task-description">Description</label><br>
            <input type="text" placeholder="enter title" id="task-description"><br>

            <label for="task-date">Date</label><br>
            <input type="date" id="task-date"><br>

            <label for="task-priority">Priority</label><br>
            <select id="task-priority" name="options">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select><br>

            <label for="task-project">Project</label><br>
            <select id="task-project" name="projects">
                <option value="Nil"> Select a project </option>
                <option value="Sample Project"> Sample Project </option>
            </select><br>

            <button type="submit" id="submit-task">Submit</button>
            <button type="">Cancel</button>
            
        </form>
    </div>
    `
    cardConatiner.appendChild(taskBox)
    const taskCard = document.querySelector('.task-card')
    const addTaskBtn = document.querySelector('.add-task-btn')
    addTaskBtn.addEventListener('click', () => {
        taskCard.style.display = 'block'
    })

    const submitTaskBtn = document.querySelector('#submit-task');
    submitTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const taskTitle = document.querySelector('#task-title').value
        const taskDescription = document.querySelector('#task-description').value
        const taskDate = document.querySelector('#task-date').value
        const taskPriority = document.querySelector('#task-priority').value
        const taskProject = document.querySelector('#task-project').value
        const newTask = new TaskDetails(taskTitle, taskDescription, taskDate, taskPriority, taskProject)
        console.log(newTask)
    })
}
    
    
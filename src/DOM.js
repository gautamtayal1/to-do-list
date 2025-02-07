import { projects } from "./index.js";
import { ProjectDetails } from "./constructers.js";
import { TaskDetails } from "./constructers.js";
import { renderProject } from "./project-manager.js";
import { updateOptions } from "./project-manager.js";
import { openProjectTasks } from "./project-manager.js";

export function displayProjectCard() {
    const cardContainer = document.querySelector('.cards-container');
    let projectCard = document.querySelector('.project-card');

    // Create the project card only if it doesn't exist
    if (!projectCard) {
        projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <div class="project-navbar">
                <h2 class="task-header">Create Project</h2>
            </div>
            <form id="project-form">
                <label for="project-title">Title</label><br>
                <input type="text" placeholder="enter title" id="project-title"><br>

                <label for="project-description">Description</label><br>
                <input type="text" placeholder="enter description" id="project-description"><br>
                
                <button type="submit" id="project-submit">Submit</button>
                <button type="button" id="project-cancel">Cancel</button>
            </form>
        `;
        cardContainer.appendChild(projectCard);
    }

    const overlay = document.querySelector('.overlay');
    const projectSubmitBtn = document.querySelector('#project-submit');
    const projectCancelBtn = document.querySelector('#project-cancel');

    // Show the project card and overlay
    const showProjectCard = () => {
        projectCard.style.display = 'block';
        overlay.style.display = 'block';

        // Reset form fields
        document.querySelector('#project-title').value = '';
        document.querySelector('#project-description').value = '';
    };

    // Hide the project card and overlay
    const hideProjectCard = () => {
        projectCard.style.display = 'none';
        overlay.style.display = 'none';
    };

    // Add event listener to the project head button
    const projectHeadBtn = document.querySelector('.project-head');
    projectHeadBtn.addEventListener('click', showProjectCard);

    // Add event listener to the overlay to hide the card
    overlay.addEventListener('click', hideProjectCard);

    // Add event listener to the cancel button to hide the card
    projectCancelBtn.addEventListener('click', hideProjectCard);

    // Handle project submission
    projectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideProjectCard();

        const projectTitleInput = document.querySelector('#project-title');
        const projectDescriptionInput = document.querySelector('#project-description');
        const projectTitle = projectTitleInput.value;
        const projectDescription = projectDescriptionInput.value;

        const project = new ProjectDetails(projectTitle, projectDescription);
        projects.push(project);
        console.log(projects);

        renderProject();
        updateOptions();
    });
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
            <label for="task-title">Title</label>
            <input type="text" placeholder="enter description" id="task-title"><br>

            <label for="task-description">Description</label>
            <input type="text" placeholder="enter title" id="task-description"><br>

            <label for="task-date">Date</label>
            <input type="date" id="task-date"><br>

            <label for="task-priority">Priority</label>
            <select id="task-priority" name="options">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select><br>

            <label for="task-project">Project</label>
            <select id="task-project" name="projects">
                <option value="Nil"> Select a project </option>
            </select><br>

            <button type="submit" id="submit-task">Submit</button>
            <button type="">Cancel</button>
            
        </form>
    </div>
    `
    cardConatiner.appendChild(taskBox)
    const taskCard = document.querySelector('.task-card')
    const addTaskBtn = document.querySelector('.add-task-btn')
    const overlay = document.querySelector('.overlay')
    addTaskBtn.addEventListener('click', () => {
        taskCard.style.display = 'block'
        overlay.style.display = 'block';
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            taskCard.style.display = 'none';
        });
        
    })

    const submitTaskBtn = document.querySelector('#submit-task');
    submitTaskBtn.addEventListener('click', (e) => {
        taskCard.style.display = 'none'
        overlay.style.display = 'none';
        e.preventDefault();
        const taskTitle = document.querySelector('#task-title').value
        const taskDescription = document.querySelector('#task-description').value
        const taskDate = document.querySelector('#task-date').value
        const taskPriority = document.querySelector('#task-priority').value
        const taskProject = document.querySelector('#task-project').value

        const newTask = new TaskDetails(taskTitle, taskDescription, taskDate, taskPriority, taskProject);

        // Find the project that matches the selected project name
        const selectedProject = projects.find(project => project.title === taskProject);

        if (selectedProject) {
            selectedProject.addTask(newTask);
            console.log(projects);
        } else {
            // Add to "Sample Project" if no project is selected
            const sampleProject = projects.find(project => project.title === "Sample Project");
            sampleProject.addTask(newTask);
        }

        // No need to append task to taskContainer here, as tasks are displayed when a project is clicked
    });
}
    
    
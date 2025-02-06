import { displayProjectCard } from "./DOM.js";
import { projects } from "./index.js";

const taskContainer = document.querySelector('.task-container')

export function displayProject(){
    const addProjectBtn = document.querySelector('.project-head');
    const projectCard = document.querySelector('.project-card')
    addProjectBtn.addEventListener('click', () => {
        projectCard.style.display = "block";
    })
}

export function renderProject(){
    const projectBox = document.querySelector('.project-box')
    for (let i = 0; i < projects.length; i++){
        const projectName = document.createElement('div')
        projectName.innerHTML = projects[i].title;
        projectName.classList.add('project-name')
        projectBox.appendChild(projectName)
        projectName.addEventListener('click', () => {
            taskContainer.innerHTML = ''
            console.log(`Project ${projects[i].title} clicked`);
            openProjectTasks(i)
        })
    }
}

export function openProjectTasks(projectIndex){
    const projectDescriptionBox = document.createElement('div')
    projectDescriptionBox.classList.add('project-description-box')
    projectDescriptionBox.innerHTML = `
    <h1 class="project-title">${projects[projectIndex].title}</h1>
    <span class = "project-description">${projects[projectIndex].description}</span>
    `
    taskContainer.appendChild(projectDescriptionBox)

    //projectTask assignment

    // const projectTaskBox = document.createElement('div')
    // projectTaskBox.classList.add('project-task-box')
    // projectTaskBox.innerHTML = `
    // <h1 class="project-task">${projects[projectIndex].tasks.title}</h1>
    // <span class = "project-description">${projects[projectIndex].tasks.description}</span>
    // <span class = "project-date">${projects[projectIndex].tasks.date}</span>
    // `
    // taskContainer.appendChild(projectTaskBox)
}

export function updateOptions(){
    for (let i = 0; i < projects.length; i++){
        const taskProject = document.querySelector('#task-project')
        const addOptions = document.createElement('option')
        addOptions.textContent = projects[i].title
        taskProject.appendChild(addOptions);
    }
}


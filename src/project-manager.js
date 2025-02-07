import { displayProjectCard } from "./DOM.js";
import { projects } from "./index.js";

const taskContainer = document.querySelector('.task-container')

export function displayProject(){
    const addProjectBtn = document.querySelector('.project-head');
    const projectCard = document.querySelector('.project-card')
    const overlay = document.querySelector('.overlay')
    addProjectBtn.addEventListener('click', () => {
        projectCard.style.display = "block";
        overlay.style.display = 'block';
    })
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        if (projectCard) projectCard.style.display = 'none';
    });
}

export function renderProject(){
    const projectBox = document.querySelector('.project-box')
    
    // Clear the existing projects to avoid duplicates
    projectBox.innerHTML = ''

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
    
}

export function updateOptions(){
    for (let i = 0; i < projects.length; i++){
        const taskProject = document.querySelector('#task-project')
        const addOptions = document.createElement('option')
        addOptions.textContent = projects[i].title
        taskProject.appendChild(addOptions);
    }
}


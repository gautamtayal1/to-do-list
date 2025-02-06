import { displayProjectCard } from "./DOM.js";
import { projects } from "./index.js";

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
            console.log(`Project ${projects[i].title} clicked`);
            openProjectTasks(i)
        })
    }
}

export function openProjectTasks(projectIndex){
    console.log(`Displaying tasks for project ${projects[projectIndex].title}`);
    
}


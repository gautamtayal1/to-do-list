import "./styles.css";
import { displayProject } from "./project-manager.js";
import { displayProjectCard } from "./DOM.js";
import { displayTaskCard } from "./DOM.js";

// import { openProjects } from "./project-manager.js";

document.addEventListener('DOMContentLoaded', () => {
    displayProjectCard()
    displayProject()
    // openProjects()
})

export const projects = []


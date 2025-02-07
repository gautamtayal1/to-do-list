import { renderProject } from "./project-manager.js";

// Ensure projects are initialized correctly
export const projects = [
    { title: "Odin Project", description: "A project from Odin", tasks: [] },
    // Add other projects here if needed
];

// Import other modules after exporting projects
import "./styles.css";
import { displayProject } from "./project-manager.js";
import { displayProjectCard } from "./DOM.js";
import { displayTaskCard } from "./DOM.js";
import { ProjectDetails } from "./constructers.js";
import { TaskDetails } from "./constructers.js";

document.addEventListener('DOMContentLoaded', () => {
    displayProjectCard();
    displayTaskCard();
    displayProject();
    renderProject();
});



import "./styles.css";
import { displayProject } from "./project-manager.js";
import { displayProjectCard } from "./DOM.js";
import { displayTaskCard } from "./DOM.js";

document.addEventListener('DOMContentLoaded', () => {
    displayProjectCard()
    displayTaskCard()
    displayProject()
})

export const projects = []


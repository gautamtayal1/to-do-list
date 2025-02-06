export function TaskDetails(title, description, date, priority, project){
    this.title = title
    this.description = description
    this.date = date
    this.priority = priority
    this.project = project
}

export function ProjectDetails(title, description){
    this.title = title;
    this.description = description;
    this.tasks = []
}
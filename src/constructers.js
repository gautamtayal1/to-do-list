export function TaskDetails(title, description, date, priority, project){
        this.title = title
        this.description = description
        this.date = date
        this.priority = priority
        this.project = project
}

export class ProjectDetails{

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.tasks = []
    }
    
    addTask(task){
        this.tasks.push(task)
    }
}
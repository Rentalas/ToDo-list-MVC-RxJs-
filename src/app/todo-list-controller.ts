import { ModuleDetectionKind } from "typescript";
import { Id, TaskStatus } from "./abstraction";
import { TodoListModel } from "./model/todo-list-model";

export class TodoListController {

    constructor(public model: TodoListModel) {}
    

    addTask(description: string): void {
        this.model.createTask(description);
    }

    deleteTask(id: Id): void {
        this.model.removeTask(id);
    }

    setTaskStatus(id: Id, status: TaskStatus): void {
        this.model.updateTask(id, status);
    }

}
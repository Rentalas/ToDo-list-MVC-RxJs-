import { Observable, of } from "rxjs";
import { Id, TaskDTO, TaskStatus } from "../abstraction";
import { TaskDAO } from "./task-DAO";

export class TodoListModel {
    private tasks: Map<Id, TaskDTO>;
    private dao = new TaskDAO();

    getData$(): Observable<Map<Id, TaskDTO>> {
        return of(new Map());
    }

    createTask(description: string): void {

    }

    updateTask(id: Id, status: TaskStatus): void {

    }

    removeTask(id: Id): void {

    }
}
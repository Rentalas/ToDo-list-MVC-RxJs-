import { Id, TaskDTO } from "../abstraction";

export class TaskDAO {
    getTasks(): Map<Id, TaskDTO> {
        return new Map();
    }
}
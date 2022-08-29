import { Observable } from "rxjs";
import { Id, TaskDTO, View } from "./abstraction";
import { TodoListController } from "./todo-list-controller";
import { TodoListModel } from "./model/todo-list-model";
import { TodoListView } from "./todo-list-view";

export class App {
    private controller: TodoListController;
    private model: TodoListModel;
    private view: TodoListView;

    start(rootEl: HTMLElement): void {
        this.controller = this.createController();
        this.model = this.createModel();
        const data$ = this.model.getData$();
        this.view = this.createView(data$);

        rootEl.append(this.view.element);
    }
    
    private createView(data$: Observable<Map<Id, TaskDTO>>): View {
        return new TodoListView(this.controller, data$);
    }

    private createController(): TodoListController {
        return new TodoListController(this.model);
    }

    private createModel(): TodoListModel {
        return new TodoListModel();
    }
}


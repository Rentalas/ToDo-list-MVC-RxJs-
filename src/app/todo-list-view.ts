import { Observable } from "rxjs";
import { View } from "./abstraction";

export class TodoListView implements View {
    element: HTMLElement;
    
    constructor (
        controller: any,
        data$: Observable<any>,
    ) {}
}
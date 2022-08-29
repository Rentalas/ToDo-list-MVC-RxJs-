export interface View {
    element: HTMLElement;
}

export interface TaskDTO {
    desctiption: string;
    id?: number;
    status?: TaskStatus;
}

export type Id = number;

export enum TaskStatus {

}
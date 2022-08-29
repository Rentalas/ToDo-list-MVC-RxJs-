import { App } from "./app/app";

const app = new App();
const rootEl = document.querySelector('#root');
app.start(rootEl as HTMLElement);

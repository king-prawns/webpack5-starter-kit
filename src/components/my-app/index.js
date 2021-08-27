import './style.pcss';
import view from './template.html';

const html = (value) => String.raw`${value}`;

export default class MyApp extends HTMLElement {
  static template() {
    return html(view);
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

let template = document.createElement('template');
template.innerHTML = MyApp.template();

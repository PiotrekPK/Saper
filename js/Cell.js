import { Ui } from "./Ui.js";

export class Cell extends Ui {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.value = 0;
    this.isMine = false;
    this.isReveal = false;
    this.isFlagged = false;
    this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`;
    this.element = null;
  }
  createElement() {
    const element = `<div class="cell border border--concave" date-cell data-x="${this.x} [data-y="${this.y}"" ></div>`;
    return element;
  }
  revealCell() {
    this.isReveal = true;
    this.element.classList.remove("border--concave");
  }
}

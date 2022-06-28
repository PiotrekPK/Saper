export class Ui {
  UiSelectors = {
    boaed: "[data-board]",
  };
  getElement(selector) {
    return document.querySelector(selector);
  }
  getElements(selectors) {
    return document.querySelectorAll(selectors);
  }
}

import Popup from "./Popup.js";

export default class ReadNotePopup extends Popup {
  constructor(selector, openButtonSelector, title, body) {
    super(selector, openButtonSelector);
    this._title = title;
    this._body = body;
  }

  _open() {
    const titleSelector = this._selector.querySelector('.popup__title');
    const bodySelector = this._selector.querySelector('.popup__body');

    titleSelector.textContent = this._title;
    bodySelector.textContent = this._body;

    this._selector.classList.add('popup_open');
  }
}
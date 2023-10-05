export default class Popup {
  constructor(selector, openButtonSelector) {
    this._selector = selector;
    this._openButton = openButtonSelector;
    this._closeButton = selector.querySelector('.popup__close');
  }

  _close() {
    this._selector.classList.remove('popup_open');
  }

  setEventListeners() {
    this._openButton.addEventListener('click', () => {
      this._selector.classList.add('popup_open');
    })

    this._closeButton.addEventListener('click', () => {
      this._close();
    })
  }
}
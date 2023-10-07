import Note from "./Note.js";
import NotesList from "./NotesList.js";
import Popup from "./Popup.js";

export default class AddPopup extends Popup {
  constructor(selector, openButtonSelector, formSelector) {
    super(selector, openButtonSelector);
    this._form = formSelector;
    this._submitButton = this._form.elements.submit;
    this._input = this._form.elements.input;
    this._textArea = this._form.elements.textarea;
  }

  _submit(e) {
    e.preventDefault();

    // const noteIndex = localStorage.getItem('notes') ?
    //   JSON.parse(localStorage.getItem('notes')).length :
    //   0;

    const noteIndex = Math.floor(Math.random() * 1e17);
    
    const note = new Note(this._input.value, this._textArea.value, noteIndex);

    note.saveNote();
    new NotesList(document.querySelector('.notes__list')).renderNewNote();

    this._input.value = '';
    this._textArea.value = '';

    this._close();
  }

  setEventListeners() {
    this._openButton.addEventListener('click', () => {
      this._selector.classList.add('popup_open');
    })

    this._closeButton.addEventListener('click', () => {
      this._selector.classList.remove('popup_open');
    })

    this._submitButton.addEventListener('click', e => {
      this._submit(e);
    })
  }
  
}
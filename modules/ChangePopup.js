import NotesList from "./NotesList.js";
import Popup from "./Popup.js";

export default class ChangePopup extends Popup {
  constructor(selector, openButtonSelector, note, title, body) {
    super(selector, openButtonSelector);
    this._form = selector.querySelector('#popup-change-note-form');
    this._note = note;
    this._title = title;
    this._body = body;
    this._input = this._form.elements.input;
    this._textArea = this._form.elements.textarea;
    this._input.value = this._title;
    this._textArea.value = this._body;
  }

  submit() {
    const notes = JSON.parse(localStorage.getItem('notes'));

    this._form.addEventListener('submit', e => {
      e.preventDefault();

      const title = this._input.value;
      const text = this._textArea.value;

      const newNotes = notes.map(el => {
        if (el.id == this._note.id) {
          el.title = title;
          el.body = text;
        }

        return el;
      })

      localStorage.setItem('notes', JSON.stringify(newNotes));

      const noteListSelector = document.querySelector('.notes__list');
      const noteList = new NotesList(noteListSelector);

      noteList.renderNewNote();

      this._close();
    })
  }
}
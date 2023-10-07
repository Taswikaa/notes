import Note from "./Note.js";
import ReadNotePopup from "./ReadNotePopup.js";

export default class NotesList {
  constructor(selector) {
    this._selector = selector;
    this._notes = this._getSavedNotes();
  }

  _getSavedNotes() {
    if (localStorage.getItem('notes')) {
      const savedNotes = JSON.parse(localStorage.getItem('notes'));
      const notes = savedNotes.map(el => {
        return new Note(el.title, el.body).createNote(el.id);
      })

      return notes;
    }
  }

  _makeNoteIsPopup() {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    this._notes.forEach((el, i) => {
      const title = savedNotes[i].title;
      const body = savedNotes[i].body;

      const readNotePopupSelector = document.querySelector('#popup-read-note');
      const readNotePopupOpenButtonSelector = el;
      const readNotePopup = new ReadNotePopup(readNotePopupSelector, readNotePopupOpenButtonSelector, title, body);

      readNotePopup.setEventListeners();
    })
  }

  render() {
    if (localStorage.getItem('notes')) {
      this._makeNoteIsPopup();
      this._notes.forEach(el => {
        const deleteButton = el.querySelector('.notes__button_puprose_delete');

        deleteButton.addEventListener('click', e => {
          this._deleteNote(e, deleteButton);
        })

        this._selector.appendChild(el);
      })
    }
  }

  renderNewNote() {
    this._selector.replaceChildren(...[]);

    this.render();
  }

  _deleteNote(e, selector) {
    e.stopPropagation();

    const note = selector.closest('.notes__item');
    const notes = JSON.parse(localStorage.getItem('notes'));
    const newNotes = notes.filter(el => {
      return el.id !== note.id * 1;
    })

    localStorage.setItem('notes', JSON.stringify(newNotes));

    note.remove();
  }
}
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
        return new Note(el.title, el.body).createNote();
      })

      return notes;
    }
  }

  _makeNoteIsPopup() {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    console.log(savedNotes);

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
        this._selector.appendChild(el);
      })
    }
  }  

  renderNewNote() {
    const note = this._notes[this._notes.length - 1];

    this._makeNoteIsPopup();
    this._selector.appendChild(note);
  }
}
import Note from "./Note.js";
import ReadNotePopup from "./ReadNotePopup.js";
import ChangePopup from "./ChangePopup.js";

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
    const readNotePopupSelector = document.querySelector('#popup-read-note');
    const changePopupTemplate = document.querySelector('#popup-change-note-template');

    this._notes.forEach((el, i) => {
      const title = savedNotes[i].title;
      const body = savedNotes[i].body;

      const readNotePopupOpenButtonSelector = el;
      const readNotePopup = new ReadNotePopup(readNotePopupSelector, readNotePopupOpenButtonSelector, title, body);
      
      const changePopupOpenButtonSelector = el.querySelector('.notes__button_puprose_change');
      const changePopupSelector = changePopupTemplate.content.cloneNode(true).querySelector('#popup-change-note');
      
      document.querySelector('.page').append(changePopupSelector);
      
      const changePopup = new ChangePopup(changePopupSelector, changePopupOpenButtonSelector, el, title, body);

      changePopup.setEventListeners();
      changePopup.submit();

      readNotePopup.setEventListeners();
    })
  }

  render() {
    if (localStorage.getItem('notes')) {
      this._makeNoteIsPopup();
      this._notes.forEach(el => {
        const deleteButton = el.querySelector('.notes__button_puprose_delete');
        const changeButton = el.querySelector('.notes__button_puprose_change');

        deleteButton.addEventListener('click', e => {
          this._deleteNote(e, deleteButton);
        });
        changeButton.addEventListener('click', e => {
          this._changeNote(e, changeButton);
        });

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

  _changeNote(e, selector) {
    e.stopPropagation();

    // const popupSelector = document.querySelector('#popup-change-note');
    // const popup = new ChangePopup(popupSelector, selector);

    // console.log(selector);

    // popup.setEventListeners();
  }
}
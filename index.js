import NotesList from "./modules/NotesList.js";
import AddPopup from "./modules/AddPopup.js";

// Note Lsit
const noteListSelector = document.querySelector('.notes__list');
const noteList = new NotesList(noteListSelector);

// Add Note Popup
const addNotePopupSelector = document.querySelector('#popup-add-note');
const addNotePopupOpenButtonSelector = document.querySelector('#popup-add-note-button');
const addNotePopupFormSelector = document.querySelector('#popup-add-note-form');
const addNotePopup = new AddPopup(addNotePopupSelector, addNotePopupOpenButtonSelector, addNotePopupFormSelector);

noteList.render();

addNotePopup.setEventListeners();



import NotesList from "./modules/NotesList.js";
import AddPopup from "./modules/AddPopup.js";

const noteListSelector = document.querySelector('.notes__list');
const noteList = new NotesList(noteListSelector);

noteList.render();

// const readNotePopupSelector = document.querySelector('#popup-read-note');
// const readNotePopupOpenButtonSelector = document.querySelector('');
// const readNotePopup = new Popup(readNotePopupSelector);

// readNotePopup.openPopup()

const addNotePopupSelector = document.querySelector('#popup-add-note');
const addNotePopupOpenButtonSelector = document.querySelector('#popup-add-note-button');
const addNotePopupFormSelector = document.querySelector('#popup-add-note-form');
const addNotePopup = new AddPopup(addNotePopupSelector, addNotePopupOpenButtonSelector, addNotePopupFormSelector);

addNotePopup.setEventListeners();
// addNotePopup.submit();

// document.querySelectorAll('.notes__button').forEach(el => {
//   el.addEventListener('click', () => {
//     console.log(document.querySelector('.popup'));
//     document.querySelector('.popup').classList.add('popup_open')
//   })
// })

// document.querySelector('.popup__close').addEventListener('click', () => {
//   document.querySelector('.popup').classList.remove('popup_open')
// })

// const addPopup = document.querySelector('.popup-add');

// const form = document.querySelector('.form');

// const openCreatePopup = (e) => {
//   e.preventDefault();

//   addPopup.classList.add('popup_open');

//   console.log(addPopup);
// }

// form.addEventListener('submit', openCreatePopup);

// localStorage.setItem('notes', JSON.stringify([{
//   title: 'note',
//   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro minus sint, facilis nostrum et officiis blanditiis vitae libero consequatur numquam tempora reiciendis placeat id provident esse quibusdam omnis. Animi sit cumque, ducimus, eius repellendus deserunt architecto deleniti culpa cupiditate temporibus eum adipisci fugiat voluptates earum, esse illum magni explicabo reiciendis accusantium eveniet porro ratione asperiores. Provident veniam magni inventore recusandae perspiciatis asperiores voluptate, consectetur ab velit hic. Maxime saepe error nemo labore totam inventore.'
// }, {
//   title: 'long note name',
//   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro minus sint, facilis nostrum et officiis blanditiis vitae libero consequatur numquam tempora reiciendis placeat id provident esse quibusdam omnis. Animi sit cumque, ducimus, eius repellendus deserunt architecto deleniti culpa cupiditate temporibus eum adipisci fugiat voluptates earum, esse illum magni explicabo reiciendis accusantium eveniet porro ratione asperiores. Provident veniam magni inventore recusandae perspiciatis asperiores voluptate, consectetur ab velit hic. Maxime saepe error nemo labore totam inventore.'
// }]))
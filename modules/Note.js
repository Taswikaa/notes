export default class Note {
  constructor(title, body) {
    this._title = title;
    this._body = body;
    this._note = {
      title: this._title,
      body: this._body
    }
  }

  saveNote() {
    if (localStorage.getItem('notes')) {
      const notes = JSON.parse(localStorage.getItem('notes'));
      notes.push(this._note)
      localStorage.setItem('notes', JSON.stringify(notes));
    } else {
      localStorage.setItem('notes', JSON.stringify([this._note]));
    }
  }

  createNote() {
    const note = document.createElement('li');
    const noteTitle = document.createElement('button');

    note.classList.add('notes__item');
    noteTitle.classList.add('button');
    noteTitle.classList.add('notes__button');
    noteTitle.textContent = this._title;

    note.appendChild(noteTitle);

    return note;
  }
}
export default class Note {
  constructor(title, body, id) {
    this._title = title;
    this._body = body;
    this._id = id;
    this._note = {
      title: this._title,
      body: this._body,
      id: this._id,
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

  createNote(id) {
    const note = document.createElement('li');
    const noteTitle = document.createElement('button');
    const deleteButton = document.createElement('button');

    note.classList.add('notes__item');
    note.id = id;
    noteTitle.classList.add('button');
    noteTitle.classList.add('notes__button');
    noteTitle.textContent = this._title;
    deleteButton.classList.add('button');
    deleteButton.classList.add('notes__button_puprose_delete');

    note.appendChild(noteTitle);
    note.appendChild(deleteButton);

    return note;
  }
}